import { GetServerSideProps } from 'next';
import { Box, Button, Center, Heading, HStack } from '@chakra-ui/react';
import { useRouter } from 'next/router';
import { useTranslations } from 'next-intl';

import Layout from 'components/others/Layout';
import { ROUTES } from 'constants/';

export const getServerSideProps: GetServerSideProps = async ({ locale }) => {
  return {
    props: {
      messages: (await import(`i18n/${locale}.json`)).default,
    },
  };
};

export default function Home() {
  const router = useRouter();
  const t = useTranslations();

  const goToSignInPage = () => router.push(ROUTES.SIGN_IN);
  const goToSignUpPage = () => router.push(ROUTES.SIGN_UP);

  return (
    <Layout>
      <Center h='100vh'>
        <Box>
          <Heading mb={8}>{t('welcome')}</Heading>
          <HStack justifyContent='center' spacing={8}>
            <Button onClick={goToSignInPage}>Sign In</Button>
            <Button onClick={goToSignUpPage}>Sign Up</Button>
          </HStack>
        </Box>
      </Center>
    </Layout>
  );
}
