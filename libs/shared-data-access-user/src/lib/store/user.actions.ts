import { createActionGroup, emptyProps, props } from '@ngrx/store';

export const UserActions = createActionGroup({
  source: 'User',
  events: {
    'Load User': emptyProps(),
    'Load User Credentials': props<{userName:string,password:string}>,
    'Load User Success': props<{ data: unknown }>(),
    'Load User Failure': props<{ error: unknown }>(),
  }
});
