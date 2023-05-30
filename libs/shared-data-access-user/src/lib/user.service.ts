import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class UserService {
  get isUserLoggedIn(): BehaviorSubject<boolean> {
    return this._isUserLoggedIn;
  }
  private _isUserLoggedIn = new BehaviorSubject(false);
  isUserLoggedIn$ = this._isUserLoggedIn.asObservable();
  checkCredentials(username: string, password: string) {
    if (username === 'demo' && password === 'demo') {
      this._isUserLoggedIn.next(true);
    }
  }
  logout() {
    this._isUserLoggedIn.next(false);
  }
}