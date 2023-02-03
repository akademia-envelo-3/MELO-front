import { createReducer } from '@ngrx/store';
import { Maybe } from '@shared/utility-types';
import { User } from './user.types';

export type UserState = {
  user: Maybe<User>;
};

const initialUserState = {
  user: null,
};

export const userReducer = createReducer(initialUserState);
