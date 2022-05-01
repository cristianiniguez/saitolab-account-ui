import { Flex, Stack, Link, Heading, Text, useColorModeValue } from '@chakra-ui/react';

import SignInForm from '../components/form/SignInForm';

const SignInPage = () => {
  return (
    <Flex
      minH='100vh'
      align='center'
      justify='center'
      bg={useColorModeValue('gray.50', 'gray.800')}
    >
      <Stack spacing={8} mx='auto' maxW='lg' py={12} px={6}>
        <Stack align='center'>
          <Heading fontSize='4xl'>Sign in to your account</Heading>
          <Text fontSize='lg' color={'gray.600'}>
            to enjoy all of our cool <Link color={'blue.400'}>features</Link> ✌️
          </Text>
        </Stack>
        <SignInForm />
      </Stack>
    </Flex>
  );
};

export default SignInPage;
