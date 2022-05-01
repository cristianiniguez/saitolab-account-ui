import { Component } from 'react';
import { Box, HStack, Stack, Button, Text, useColorModeValue, Link } from '@chakra-ui/react';
import { Form, Formik, FormikConfig } from 'formik';

import { EmailInput, TextInput, PasswordInput } from '../inputs';

type SignUpFormValues = {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
};

type SignUpFormConfig = FormikConfig<SignUpFormValues>;

class SignUpForm extends Component {
  handleSubmit: SignUpFormConfig['onSubmit'] = (values) => {
    console.log(values);
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
      <Formik initialValues={this.getInitialValues()} onSubmit={this.handleSubmit}>
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
                <Stack spacing={10} pt={2}>
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
                </Stack>
                <Stack pt={6}>
                  <Text align='center'>
                    Already a user? <Link color={'blue.400'}>Login</Link>
                  </Text>
                </Stack>
              </Stack>
            </Box>
          </Form>
        )}
      </Formik>
    );
  }
}

export default SignUpForm;
