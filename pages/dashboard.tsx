import { signOut, useSession } from 'next-auth/react';
import { Button } from '@chakra-ui/react';

const DashboardPage = () => {
  const session = useSession();
  console.log(session);

  return (
    <div>
      <Button onClick={() => signOut()}>Sign Out</Button>
    </div>
  );
};

export default DashboardPage;
