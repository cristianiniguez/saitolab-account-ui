import { GetServerSideProps } from 'next';
import { getSession, signOut } from 'next-auth/react';
import { Button } from '@chakra-ui/react';

import { ROUTES } from '../constants';

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
    <div>
      <Button onClick={() => signOut()}>Sign Out</Button>
    </div>
  );
};

export default DashboardPage;
