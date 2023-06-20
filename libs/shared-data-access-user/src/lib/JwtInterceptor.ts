import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable } from 'rxjs';
import {UserService} from "./user.service";


// import { environment } from '@environments/environment';
// import { AccountService } from '@app/_services';

@Injectable()
export class JwtInterceptor implements HttpInterceptor {
    constructor(private userService: UserService) { }
    private isLoggedIn = false
    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        // add auth header with jwt if account is logged in and request is to the api url

      this.userService.isUserLoggedIn$.subscribe( (data) => {
          this.isLoggedIn = data
      });
        const isApiUrl = true;
        //const isApiUrl = request.url.startsWith(environment.apiUrl);
        if (this.isLoggedIn && isApiUrl) {
            request = request.clone({
                setHeaders: { Authorization: `Bearer ${this.userService?.getToken()}` }
            });
        }

        return next.handle(request);
    }
}
