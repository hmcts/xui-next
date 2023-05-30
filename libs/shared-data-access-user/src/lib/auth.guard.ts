import { CanActivateFn } from '@angular/router';
import {UserService} from "./user.service";
import {inject} from "@angular/core";


export const authGuard: CanActivateFn = (route, state) => {
  const authService = inject(UserService)
  console.log('In Auth guard',authService.isUserLoggedIn.value )
  return authService.isUserLoggedIn.value;
};
