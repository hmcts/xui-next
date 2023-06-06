import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromUser from './user.reducer';
import {UserState} from "./user.reducer";

export const selectUserState = createFeatureSelector<fromUser.UserState>(
  fromUser.userFeatureKey
);

export const selectUserLoggedIn = createSelector(selectUserState, (state: UserState) => state.loggedIn)
