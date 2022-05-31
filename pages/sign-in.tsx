import { GetServerSideProps } from 'next';
import { getSession } from 'next-auth/react';
import { Flex, Stack, Link, Heading, Text, useColorModeValue } from '@chakra-ui/react';

import Layout from 'components/others/Layout';
import SignInForm from 'components/forms/SignInForm';
import { ROUTES } from 'constants/';

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

const SignInPage = () => {
  return (
    <Layout title='Sign In'>
      <Flex
        align='center'
        bg={useColorModeValue('gray.50', 'gray.800')}
        justify='center'
        minH='100vh'
      >
        <Stack maxW='lg' mx='auto' px={6} py={12} spacing={8}>
          <Stack align='center'>
            <Heading fontSize='4xl'>Sign in to your account</Heading>
            <Text color={'gray.600'} fontSize='lg'>
              to enjoy all of our cool <Link color={'blue.400'}>features</Link> ✌️
            </Text>
          </Stack>
          <SignInForm />
        </Stack>
      </Flex>
    </Layout>
  );
};

export default SignInPage;
