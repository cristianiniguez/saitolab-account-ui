import { Component } from 'react';
import { NextRouter, withRouter } from 'next/router';
import { signIn } from 'next-auth/react';
import { Box, Stack, Button, useColorModeValue, Alert, AlertIcon } from '@chakra-ui/react';
import { Form, Formik, FormikConfig } from 'formik';

import { EmailInput, PasswordInput } from '../inputs';
import * as C from '../../constants';

type SignInFormProps = {
  router: NextRouter;
};

type SignInFormValues = {
  email: string;
  password: string;
};

type SignInFormConfig = FormikConfig<SignInFormValues>;

class SignInForm extends Component<SignInFormProps> {
  handleSubmit: SignInFormConfig['onSubmit'] = async (values, { setStatus, setSubmitting }) => {
    const { router } = this.props;

    try {
      const response = await signIn<'credentials'>('credentials', { ...values, redirect: false });

      if (!response) return setStatus({ error: C.UNKNOWN_ERROR });
      if (response.error) return setStatus({ error: response.error });

      router.push('/dashboard');
    } catch (error) {
      console.error(error);
    } finally {
      setSubmitting(false);
    }
  };

  getInitialValues(): SignInFormConfig['initialValues'] {
    return {
      email: '',
      password: '',
    };
  }

  getFormErrorMessage(error: string) {
    switch (error) {
      case C.INVALID_CREDENTIALS_ERROR:
        return 'Invalid credentials';
      case C.UNKNOWN_ERROR:
      default:
        return 'An unknown error occurred';
    }
  }

  render() {
    return (
      <Formik
        initialValues={this.getInitialValues()}
        onSubmit={this.handleSubmit}
        initialStatus={{ error: null }}
      >
        {({ isSubmitting, status }) => (
          <Form>
            <Box rounded='lg' bg={useColorModeValue('white', 'gray.700')} boxShadow='lg' p={8}>
              <Stack spacing={4}>
                <EmailInput isRequired label='Email Address' />
                <PasswordInput label='Password' />
                {status.error && (
                  <Alert status='error'>
                    <AlertIcon />
                    {this.getFormErrorMessage(status.error)}
                  </Alert>
                )}
                <Button
                  isLoading={isSubmitting}
                  type='submit'
                  bg='blue.400'
                  color='white'
                  _hover={{ bg: 'blue.500' }}
                >
                  Sign in
                </Button>
              </Stack>
            </Box>
          </Form>
        )}
      </Formik>
    );
  }
}

export default withRouter(SignInForm);
