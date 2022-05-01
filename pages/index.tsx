import { Box, Button, Center, Heading, HStack } from '@chakra-ui/react';

export default function Home() {
  return (
    <Center h='100vh'>
      <Box>
        <Heading mb={8}>Welcome to Saito Lab Accounts</Heading>
        <HStack spacing={8} justifyContent='center'>
          <Button>Sign In</Button>
          <Button>Sign Up</Button>
        </HStack>
      </Box>
    </Center>
  );
}
