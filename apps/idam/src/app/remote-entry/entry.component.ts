// import { Component } from '@angular/core';
//
// @Component({
//   selector: 'xui-next-idam-entry',
//   template: `<xui-next-idam-container></xui-next-idam-container>`,
// })
// export class RemoteEntryComponent {}
import { Component } from '@angular/core';
import {UserService} from "@xui-next/shared-data-access-user";
import { NgIf, AsyncPipe } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {CommonFooterComponent, CommonHeaderComponent} from "@ui-hmcts-common";

@Component({
    selector: 'xui-next-idam',
    template: `
        <xui-next-common-header></xui-next-common-header>
    <div class="login-app">
      <form class="login-form" (ngSubmit)="login()">
        <label>
          Username:
          <input type="text" name="username" [(ngModel)]="username" />
        </label>
        <label>
          Password:
          <input type="password" name="password" [(ngModel)]="password" />
        </label>
        <button type="submit">Login</button>
      </form>
      <div *ngIf="isLoggedIn$ | async">User is logged in!</div>
        <div>User Status </div>
    </div>
        <xui-next-common-footer></xui-next-common-footer>
  `,
    styles: [
        `
      .login-app {
        width: 30vw;
        border: 2px dashed black;
        padding: 8px;
        margin: 0 auto;
      }
      .login-form {
        display: flex;
        align-items: center;
        flex-direction: column;
        margin: 0 auto;
        padding: 8px;
      }
      label {
        display: block;
      }
    `,
    ],
    standalone: true,
    imports: [
        FormsModule,
        NgIf,
        AsyncPipe,
        CommonHeaderComponent,
        CommonFooterComponent,
    ],
})
export class LoginEntryComponent {
  username = '';
  password = '';
  isLoggedIn$ = this.userService.isUserLoggedIn$;
  constructor(private userService: UserService) {}
  login() {
    this.userService.checkCredentials(this.username, this.password);
  }
}
