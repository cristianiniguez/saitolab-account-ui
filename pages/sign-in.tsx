import { GetServerSideProps } from 'next';
import { getSession } from 'next-auth/react';
import { useTranslations } from 'next-intl';
import { Flex, Stack, Heading, Text, useColorModeValue } from '@chakra-ui/react';

import Layout from 'components/others/Layout';
import SignInForm from 'components/forms/SignInForm';
import { ROUTES } from 'constants/';
import { getTranslationsProps } from 'utils/others/intl';

export const getServerSideProps: GetServerSideProps = async ctx => {
  const session = await getSession(ctx);

  if (session?.user) {
    return {
      redirect: {
        destination: ROUTES.DASHBOARD,
        permanent: false,
      },
    };
  }

  return {
    props: {
      ...(await getTranslationsProps(ctx)),
    },
  };
};

const SignInPage = () => {
  const t = useTranslations();

  return (
    <Layout title={t('signIn.pageTitle')}>
      <Flex
        align='center'
        bg={useColorModeValue('gray.50', 'gray.800')}
        justify='center'
        minH='100vh'
      >
        <Stack maxW='lg' mx='auto' px={6} py={12} spacing={8}>
          <Stack align='center'>
            <Heading fontSize='4xl'>{t('signIn.title')}</Heading>
            <Text color={'gray.600'} fontSize='lg'>
              {t('signIn.subtitle')}
            </Text>
          </Stack>
          <SignInForm />
        </Stack>
      </Flex>
    </Layout>
  );
};

export default SignInPage;
