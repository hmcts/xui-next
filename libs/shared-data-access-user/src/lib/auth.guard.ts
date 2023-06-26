import {CanActivateFn, Router} from '@angular/router';
import {UserService} from "./user.service";
import {inject} from "@angular/core";


export const authGuard: CanActivateFn = (route, state) => {
  const authService = inject(UserService)
  const router: Router = inject(Router)
  console.log('In Auth guard',authService.isUserLoggedIn.value )
  if ( authService.isUserLoggedIn.value && authService.getToken().length > 0 ) {
    return true
  }else {
    return router.parseUrl('/notAuthorised')
  }
};
