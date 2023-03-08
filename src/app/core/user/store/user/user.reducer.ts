import { createReducer, on } from '@ngrx/store';
import { UserActions, initialUserState, UserState } from '.';

export const userReducer = createReducer(
  initialUserState,
  on(UserActions.set_user, (state, action): UserState => {
    return {
      ...state,
      user: action,
    };
  }),
  on(UserActions.remove_user, (state): UserState => {
    return {
      ...state,
      user: null,
    };
  })
);
