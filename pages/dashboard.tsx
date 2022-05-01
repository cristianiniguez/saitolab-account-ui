import { useRouter } from 'next/router';
import { GetServerSideProps } from 'next';
import { getSession, signOut, useSession } from 'next-auth/react';
import { Button } from '@chakra-ui/react';

export const getServerSideProps: GetServerSideProps = async ({ req }) => {
  const session = await getSession({ req });

  if (!session) {
    return {
      redirect: {
        destination: '/sign-in',
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
