import { __decorate, __metadata } from "tslib";
// import { Component } from '@angular/core';
//
// @Component({
//   selector: 'xui-next-idam-entry',
//   template: `<xui-next-idam-container></xui-next-idam-container>`,
// })
// export class RemoteEntryComponent {}
import { Component } from '@angular/core';
import { UserService } from "@xui-next/shared-data-access-user";
import { NgIf, AsyncPipe, CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CommonFooterComponent, CommonHeaderComponent, LoginContainerComponent } from "@ui-hmcts-common";
export let LoginEntryComponent = class LoginEntryComponent {
    constructor(userService) {
        this.userService = userService;
        this.username = '';
        this.password = '';
        this.isLoggedIn$ = this.userService.isUserLoggedIn$;
    }
    login() {
        this.userService.checkCredentials(this.username, this.password);
    }
};
LoginEntryComponent = __decorate([
    Component({
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
    }),
    __metadata("design:paramtypes", [UserService])
], LoginEntryComponent);
//# sourceMappingURL=entry.component.js.map