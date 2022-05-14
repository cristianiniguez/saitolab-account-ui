import { GetServerSideProps } from 'next';
import { getSession, signOut } from 'next-auth/react';
import { Button } from '@chakra-ui/react';

import { ROUTES } from '../constants';
import Layout from '../components/others/Layout';

export const getServerSideProps: GetServerSideProps = async ({ req }) => {
  const session = await getSession({ req });

  if (!session) {
    return {
      redirect: {
        destination: ROUTES.SIGN_IN,
        permanent: false,
      },
    };
  }

  return {
    props: {
      session,
    },
  };
};

const DashboardPage = () => {
  return (
    <Layout title='Dashboard'>
      <Button onClick={() => signOut()}>Sign Out</Button>
    </Layout>
  );
};

export default DashboardPage;
