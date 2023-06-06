import { createFeature, createReducer, on } from '@ngrx/store';
import { UserActions } from './user.actions';

export const userFeatureKey = 'user';

export interface UserState {
  loggedIn:boolean
}

export const initialState: UserState = {
loggedIn: false
};

export const reducer = createReducer(
  initialState,
  on(UserActions.loadUsers, state => state),
  on(UserActions.loadUsersSuccess, (state, action) => state),
  on(UserActions.loadUsersFailure, (state, action) => state),
);

export const userFeature = createFeature({
  name: userFeatureKey,
  reducer,
});

