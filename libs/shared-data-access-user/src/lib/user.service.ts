import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

import {Store} from "@ngrx/store";
import {UserActions} from "./store/user.actions";
@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private store:Store) {
    this.store.dispatch(UserActions.loadUsers())
  }
  get isUserLoggedIn(): BehaviorSubject<boolean> {
    return this._isUserLoggedIn;
  }
  private _isUserLoggedIn = new BehaviorSubject(false);
  //isUserLoggedIn$ = this.store.select(selectUserLoggedIn);
  isUserLoggedIn$ = this._isUserLoggedIn.asObservable();
  checkCredentials(username: string, password: string) {
    if (username === 'demo' && password === 'demo') {
      this._isUserLoggedIn.next(true);
      this.store.dispatch(UserActions.loadUsersSuccess({data:true}))
    }
  }
  logout() {
    this._isUserLoggedIn.next(false);
    this.store.dispatch(UserActions.loadUsersSuccess({data:false}))
  }
}
