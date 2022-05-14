import { Component } from 'react';
import { NextRouter, withRouter } from 'next/router';
import { Box, Stack, Button, useColorModeValue, Alert, AlertIcon, Text } from '@chakra-ui/react';
import { Form, Formik, FormikConfig } from 'formik';

import { EmailInput, PasswordInput } from '../inputs';
import Link from '../others/Link';
import * as C from '../../constants';
import { signInRequest } from '../../utils/request/auth';

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
    setStatus({ error: null });

    try {
      await signInRequest(values);
      router.push(C.ROUTES.DASHBOARD);
    } catch (error) {
      console.error(error);
      setStatus({ error: error.message });
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

  renderForm: SignInFormConfig['component'] = ({ isSubmitting, status }) => (
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
          <Text align='center'>
            Don't have an account?{' '}
            <Link href={C.ROUTES.SIGN_UP} color='green'>
              Enroll
            </Link>
          </Text>
        </Stack>
      </Box>
    </Form>
  );

  render() {
    return (
      <Formik
        initialValues={this.getInitialValues()}
        onSubmit={this.handleSubmit}
        initialStatus={{ error: null }}
        component={this.renderForm}
      />
    );
  }
}

export default withRouter(SignInForm);
