import { Component } from 'react';
import { NextRouter, withRouter } from 'next/router';
import { Box, HStack, Stack, Button, Text, useColorModeValue } from '@chakra-ui/react';
import { Form, Formik, FormikConfig } from 'formik';

import { EmailInput, TextInput, PasswordInput } from '../inputs';
import Link from '../others/Link';
import { SignUpPayload } from '../../types/api';
import { signInRequest, signUpRequest } from '../../utils/request/auth';

type SignUpFormProps = {
  router: NextRouter;
};

type SignUpFormValues = SignUpPayload;
type SignUpFormConfig = FormikConfig<SignUpFormValues>;

class SignUpForm extends Component<SignUpFormProps> {
  handleSubmit: SignUpFormConfig['onSubmit'] = async (values, { setStatus, setSubmitting }) => {
    const { router } = this.props;
    setStatus({ error: null });

    try {
      const { email } = await signUpRequest(values);
      await signInRequest({ email, password: values.password });
      router.push('/dashboard');
    } catch (error) {
      console.error(error);
      setStatus({ error: error.message });
    } finally {
      setSubmitting(false);
    }
  };

  getInitialValues(): SignUpFormConfig['initialValues'] {
    return {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
    };
  }

  render() {
    return (
      <Formik
        initialStatus={{ error: null }}
        initialValues={this.getInitialValues()}
        onSubmit={this.handleSubmit}
      >
        {() => (
          <Form>
            <Box rounded='lg' bg={useColorModeValue('white', 'gray.700')} boxShadow='lg' p={8}>
              <Stack spacing={4}>
                <HStack>
                  <Box>
                    <TextInput id='firstName' isRequired label='First Name' name='firstName' />
                  </Box>
                  <Box>
                    <TextInput id='lastName' isRequired label='Last Name' name='lastName' />
                  </Box>
                </HStack>
                <EmailInput isRequired label='Email Address' />
                <PasswordInput label='Password' />
                <Button
                  type='submit'
                  loadingText='Submitting'
                  size='lg'
                  bg={'blue.400'}
                  color='white'
                  _hover={{
                    bg: 'blue.500',
                  }}
                >
                  Sign up
                </Button>
                <Text align='center'>
                  Already a user?{' '}
                  <Link color='green' href='/sign-in'>
                    Login
                  </Link>
                </Text>
              </Stack>
            </Box>
          </Form>
        )}
      </Formik>
    );
  }
}

export default withRouter(SignUpForm);
