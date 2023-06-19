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
  on(UserActions.loadUser, state => state),
  on(UserActions.loadUserSuccess, (state) => ({...state, loggedIn: true})),
  on(UserActions.loadUserFailure, (state) => ({...state, loggedIn: false})),
);

export const userFeature = createFeature({
  name: userFeatureKey,
  reducer,
});

