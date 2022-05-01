import { useState } from 'react';
import { Field, Form, Formik } from 'formik';
import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Icon,
  Input,
  InputGroup,
  HStack,
  InputRightElement,
  Stack,
  Button,
  Heading,
  Text,
  useColorModeValue,
  Link,
} from '@chakra-ui/react';
import { FiEye, FiEyeOff } from 'react-icons/fi';

import type { FormikConfig } from 'formik';

type SignUpFormValues = {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
};

type SignUpFormProps = FormikConfig<SignUpFormValues>;

const SignUpPage = () => {
  const [showPassword, setShowPassword] = useState(false);

  const initialValues: SignUpFormValues = {
    firstName: '',
    lastName: '',
    email: '',
    password: '',
  };

  const handleSubmit: SignUpFormProps['onSubmit'] = (values) => {
    console.log(values);
  };

  return (
    <Flex
      minH='100vh'
      align='center'
      justify='center'
      bg={useColorModeValue('gray.50', 'gray.800')}
    >
      <Stack spacing={8} mx='auto' maxW='lg' py={12} px={6}>
        <Stack align='center'>
          <Heading fontSize='4xl' textAlign='center'>
            Sign up
          </Heading>
          <Text fontSize='lg' color={'gray.600'}>
            to enjoy all of our cool features ✌️
          </Text>
        </Stack>
        <Formik initialValues={initialValues} onSubmit={handleSubmit}>
          {() => (
            <Form>
              <Box rounded='lg' bg={useColorModeValue('white', 'gray.700')} boxShadow='lg' p={8}>
                <Stack spacing={4}>
                  <HStack>
                    <Box>
                      <Field name='firstName'>
                        {({ field }) => (
                          <FormControl id='firstName' isRequired>
                            <FormLabel>First Name</FormLabel>
                            <Input {...field} type='text' />
                          </FormControl>
                        )}
                      </Field>
                    </Box>
                    <Box>
                      <Field name='lastName'>
                        {({ field }) => (
                          <FormControl id='lastName' isRequired>
                            <FormLabel>Last Name</FormLabel>
                            <Input {...field} type='text' />
                          </FormControl>
                        )}
                      </Field>
                    </Box>
                  </HStack>
                  <Field name='email'>
                    {({ field }) => (
                      <FormControl id='email' isRequired>
                        <FormLabel>Email address</FormLabel>
                        <Input {...field} type='email' />
                      </FormControl>
                    )}
                  </Field>
                  <Field name='password'>
                    {({ field }) => (
                      <FormControl id='password' isRequired>
                        <FormLabel>Password</FormLabel>
                        <InputGroup>
                          <Input {...field} type={showPassword ? 'text' : 'password'} />
                          <InputRightElement h='full'>
                            <Button
                              variant='ghost'
                              onClick={() => setShowPassword((showPassword) => !showPassword)}
                            >
                              <Icon as={showPassword ? FiEye : FiEyeOff} />
                            </Button>
                          </InputRightElement>
                        </InputGroup>
                      </FormControl>
                    )}
                  </Field>
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
      </Stack>
    </Flex>
  );
};

export default SignUpPage;
