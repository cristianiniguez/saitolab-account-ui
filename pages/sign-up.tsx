import { GetServerSideProps } from 'next';
import { getSession } from 'next-auth/react';
import { Flex, Stack, Heading, Text, useColorModeValue } from '@chakra-ui/react';

import SignUpForm from '../components/form/SignUpForm';
import { ROUTES } from '../constants';

export const getServerSideProps: GetServerSideProps = async ({ req }) => {
  const session = await getSession({ req });

  if (session?.user) {
    return {
      redirect: {
        destination: ROUTES.DASHBOARD,
        permanent: false,
      },
    };
  }

  return {
    props: {},
  };
};

const SignUpPage = () => {
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
        <SignUpForm />
      </Stack>
    </Flex>
  );
};

export default SignUpPage;