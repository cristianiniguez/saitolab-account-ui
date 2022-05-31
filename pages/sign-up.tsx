import { GetServerSideProps } from 'next';
import { getSession } from 'next-auth/react';
import { Flex, Stack, Heading, Text, useColorModeValue } from '@chakra-ui/react';

import Layout from '../components/others/Layout';
import SignUpForm from '../components/forms/SignUpForm';
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
    <Layout title='Sign Up'>
      <Flex
        align='center'
        bg={useColorModeValue('gray.50', 'gray.800')}
        justify='center'
        minH='100vh'
      >
        <Stack maxW='lg' mx='auto' px={6} py={12} spacing={8}>
          <Stack align='center'>
            <Heading fontSize='4xl' textAlign='center'>
              Sign up
            </Heading>
            <Text color={'gray.600'} fontSize='lg'>
              to enjoy all of our cool features ✌️
            </Text>
          </Stack>
          <SignUpForm />
        </Stack>
      </Flex>
    </Layout>
  );
};

export default SignUpPage;
