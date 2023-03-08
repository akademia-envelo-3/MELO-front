import { Maybe } from '@shared/utility-types';

export type User = {
  firstName: string;
  lastName: string;
  email: string;
};

export type UserState = {
  user: Maybe<User>;
};

export const initialUserState: UserState = {
  user: null,
};
