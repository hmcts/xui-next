import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

import {Store} from "@ngrx/store";
import {UserActions} from "./store/user.actions";
import {selectUserLoggedIn} from "./store/user.selectors";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Router} from "@angular/router";
@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private store:Store, private router: Router, private http:HttpClient) {
    console.log('User Service init')
    this.store.dispatch(UserActions.loadUser())
  }
  get isUserLoggedIn(): BehaviorSubject<boolean> {
    return this._isUserLoggedIn;
  }

  getToken():string {
    return this._token;
  }
  private options = { headers: new HttpHeaders({'Content-Type' : 'application/json'})};
  private loginURL= 'http://localhost:3000/api/auth/login'
  private _isUserLoggedIn = new BehaviorSubject(false);
  private _token =''
  isUserLoggedIn$ = this.store.select(selectUserLoggedIn)
  //isUserLoggedIn$ = this._isUserLoggedIn.asObservable();
  checkCredentials(username: string, password: string) {
    // if (username === 'demo' && password === 'demo') {
    //   this._isUserLoggedIn.next(true);
    //   this.store.dispatch(UserActions.loadUsersSuccess({data:true}))
    // }
  this.http.post(this.loginURL, {username: username, password:password}, this.options).subscribe((data:any) => {
    this._token = data.access_token
    this.isUserLoggedIn.next(true);
    this.store.dispatch(UserActions.loadUserSuccess({data:true}))
    //const  permitedRoutes = JSON.parse( data.permittedRoutes);
    const defaultRoute = data.defaultRoute;
    console.log('default route is ', defaultRoute);
    console.log('router config is ', this.router)
    if (defaultRoute) {
      // this.router.resetConfig(permitedRoutes);
      setTimeout( () => { // why is the setTimeout needed here??
        this.router.navigate([defaultRoute]);
      })

    }


  }, error => {
    console.log('got an error', error)
    this.logout()
    this.router.parseUrl('/notAuthorised')
  })
  }



  logout() {
    this._isUserLoggedIn.next(false);
    this._token =''
    this.store.dispatch(UserActions.loadUserSuccess({data:false}))
  }
}
