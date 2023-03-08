import { createActionGroup, emptyProps, props } from '@ngrx/store';
import { User } from '.';

export const UserActions = createActionGroup({
  source: 'user',
  events: {
    set_user: props<User>(),
    remove_user: emptyProps(),
  },
});
