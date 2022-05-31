import { Component } from 'react';
import { NextRouter, withRouter } from 'next/router';
import {
  Box,
  HStack,
  Stack,
  Button,
  Text,
  useColorModeValue,
  Alert,
  AlertIcon,
} from '@chakra-ui/react';
import { Form, Formik, FormikConfig } from 'formik';
import * as Yup from 'yup';

import { EmailInput, TextInput, PasswordInput } from 'components/inputs';
import Link from 'components/others/Link';
import { SignUpPayload } from 'types/api';
import { signInRequest, signUpRequest } from 'utils/request/auth';
import { getErrorMessage } from 'utils/others/errors';
import * as C from 'constants/';

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
      router.push(C.ROUTES.DASHBOARD);
    } catch (e) {
      console.error(e);
      setStatus({ error: getErrorMessage(e) });
    } finally {
      setSubmitting(false);
    }
  };

  getInitialValues(): SignUpFormConfig['initialValues'] {
    return {
      email: '',
      firstName: '',
      lastName: '',
      password: '',
    };
  }

  getValidationSchema(): SignUpFormConfig['validationSchema'] {
    return Yup.object().shape({
      email: Yup.string().email('Invalid email').required('Email is required'),
      firstName: Yup.string().required('First name is required'),
      lastName: Yup.string().required('Last name is required'),
      password: Yup.string().required('Password is required'),
    });
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

  renderForm: SignUpFormConfig['component'] = ({ isSubmitting, status }) => (
    <Form>
      <Box bg={useColorModeValue('white', 'gray.700')} boxShadow='lg' p={8} rounded='lg'>
        <Stack spacing={4}>
          <HStack alignItems='start'>
            <Box>
              <TextInput id='firstName' isRequired label='First Name' name='firstName' />
            </Box>
            <Box>
              <TextInput id='lastName' isRequired label='Last Name' name='lastName' />
            </Box>
          </HStack>
          <EmailInput isRequired label='Email Address' />
          <PasswordInput label='Password' />
          {status.error && (
            <Alert status='error'>
              <AlertIcon />
              {this.getFormErrorMessage(status.error)}
            </Alert>
          )}
          <Button
            _hover={{ bg: 'blue.500' }}
            bg={'blue.400'}
            color='white'
            isLoading={isSubmitting}
            loadingText='Enrolling ...'
            size='lg'
            type='submit'
          >
            Sign up
          </Button>
          <Text align='center'>
            Already a user?{' '}
            <Link color='green' href={C.ROUTES.SIGN_IN}>
              Login
            </Link>
          </Text>
        </Stack>
      </Box>
    </Form>
  );

  render() {
    return (
      <Formik
        component={this.renderForm}
        initialStatus={{ error: null }}
        initialValues={this.getInitialValues()}
        onSubmit={this.handleSubmit}
        validationSchema={this.getValidationSchema()}
      />
    );
  }
}

export default withRouter(SignUpForm);
