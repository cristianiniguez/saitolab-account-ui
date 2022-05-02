import NextAuth, { NextAuthOptions } from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import axios from 'axios';

import { SignInApiResponse } from '../../../types/api';

const options: NextAuthOptions = {
  callbacks: {
    jwt: ({ token, user }) => {
      if (user) token = { ...token, accessToken: user.accessToken };
      return token;
    },
    session: ({ session, token }) => {
      session.accessToken = token.accessToken;
      return session;
    },
  },
  pages: {
    signIn: '/sign-in',
  },
  providers: [
    CredentialsProvider({
      credentials: {
        email: { type: 'email', required: true },
        password: { type: 'password', required: true },
      },
      authorize: async (credentials) => {
        if (!credentials) return null;
        const { email, password } = credentials;

        try {
          const { data } = await axios.post<SignInApiResponse>(
            `${process.env.API_HOST}/auth/sign-in`,
            null,
            {
              auth: { username: email, password },
            },
          );
          const { access_token, user } = data;
          return {
            ...user,
            accessToken: access_token,
            name: `${user.firstName} ${user.lastName}`,
          };
        } catch (error) {
          console.error(error);
          throw new Error('Invalid credentials');
          return null;
        }
      },
    }),
  ],
};

export default NextAuth(options);
