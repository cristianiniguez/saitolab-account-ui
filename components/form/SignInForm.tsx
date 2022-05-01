import { Component } from 'react';
import { signIn } from 'next-auth/react';
import { Box, Checkbox, Stack, Button, useColorModeValue, Link } from '@chakra-ui/react';
import { Form, Formik, FormikConfig } from 'formik';

import { EmailInput, PasswordInput } from '../inputs';

type SignInFormValues = {
  email: string;
  password: string;
};

type SignInFormConfig = FormikConfig<SignInFormValues>;

class SignInForm extends Component {
  handleSubmit: SignInFormConfig['onSubmit'] = async (values) => {
    try {
      await signIn('credentials', values);
    } catch (error) {
      console.error(error);
    }
  };

  getInitialValues(): SignInFormConfig['initialValues'] {
    return {
      email: '',
      password: '',
    };
  }

  render() {
    return (
      <Formik initialValues={this.getInitialValues()} onSubmit={this.handleSubmit}>
        {() => (
          <Form>
            <Box rounded='lg' bg={useColorModeValue('white', 'gray.700')} boxShadow='lg' p={8}>
              <Stack spacing={4}>
                <EmailInput isRequired label='Email Address' />
                <PasswordInput label='Password' />
                <Stack spacing={10}>
                  <Stack
                    direction={{ base: 'column', sm: 'row' }}
                    align='start'
                    justify='space-between'
                  >
                    <Checkbox>Remember me</Checkbox>
                    <Link color='blue.400'>Forgot password?</Link>
                  </Stack>
                  <Button type='submit' bg='blue.400' color='white' _hover={{ bg: 'blue.500' }}>
                    Sign in
                  </Button>
                </Stack>
              </Stack>
            </Box>
          </Form>
        )}
      </Formik>
    );
  }
}

export default SignInForm;
