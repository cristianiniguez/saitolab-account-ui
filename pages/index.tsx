import { Box, Button, Center, Heading, HStack } from '@chakra-ui/react';
import { useRouter } from 'next/router';

import Layout from '../components/others/Layout';
import { ROUTES } from '../constants';

export default function Home() {
  const router = useRouter();

  const goToSignInPage = () => router.push(ROUTES.SIGN_IN);
  const goToSignUpPage = () => router.push(ROUTES.SIGN_UP);

  return (
    <Layout>
      <Center h='100vh'>
        <Box>
          <Heading mb={8}>Welcome to Saito Lab Accounts</Heading>
          <HStack spacing={8} justifyContent='center'>
            <Button onClick={goToSignInPage}>Sign In</Button>
            <Button onClick={goToSignUpPage}>Sign Up</Button>
          </HStack>
        </Box>
      </Center>
    </Layout>
  );
}
