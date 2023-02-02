import { createActionGroup, emptyProps, props } from '@ngrx/store';
import { User } from '.';

export const userActionsSuccess = createActionGroup({
  source: 'user',
  events: {
    set_user: props<User>(),
  },
});

export const userActionsFailure = createActionGroup({
  source: 'user',
  events: {
    set_user: emptyProps(),
  },
});
