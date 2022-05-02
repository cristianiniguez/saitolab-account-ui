import { signIn } from 'next-auth/react';
import axios from 'axios';

import { SignUpPayload, SignUpApiResponse, SignInPayload } from '../../types/api';
import { UNKNOWN_ERROR } from '../../constants';

const API_URL = process.env.NEXT_PUBLIC_API_HOST;

export const signUpRequest = async (payload: SignUpPayload) => {
  const { data } = await axios.post<SignUpApiResponse>(`${API_URL}/auth/sign-up`, payload);
  return data;
};

export const signInRequest = async (payload: SignInPayload) => {
  const response = await signIn<'credentials'>('credentials', { ...payload, redirect: false });

  if (!response) throw new Error(UNKNOWN_ERROR);
  if (response.error) throw new Error(response.error);
};
