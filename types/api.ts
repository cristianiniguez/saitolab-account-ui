export type SignInApiResponse = {
  access_token: string;
  user: {
    id: number;
    firstName: number;
    lastName: number;
    role: string;
  };
};
