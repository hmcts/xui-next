// import { Component } from '@angular/core';
//
// @Component({
//   selector: 'xui-next-idam-entry',
//   template: `<xui-next-idam-container></xui-next-idam-container>`,
// })
// export class RemoteEntryComponent {}
import { Component } from '@angular/core';
import {UserService} from "@xui-next/shared-data-access-user";
import {NgIf, AsyncPipe, CommonModule} from '@angular/common';
import { FormsModule } from '@angular/forms';
import {CommonFooterComponent, CommonHeaderComponent, LoginContainerComponent} from "@ui-hmcts-common";


@Component({
    selector: 'xui-next-idam',
    template: `
        <xui-next-common-header></xui-next-common-header>
            <xui-next-login-container></xui-next-login-container>
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
        CommonModule,
        FormsModule,
        NgIf,
        AsyncPipe,
        CommonHeaderComponent,
        CommonFooterComponent,
        LoginContainerComponent
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
