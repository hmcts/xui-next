import { Component } from '@angular/core';
import { AddUserSignupComponent } from "../add-user-signup/add-user-signup.component";
import { CommonFooterComponent, CommonHeaderComponent, PhaseBannerComponent } from "@ui-hmcts-common";
import { RouterOutlet } from "@angular/router";

@Component({
  standalone: true,
  selector: "xui-next-add-user-details-entry",
  template: `    
  <xui-next-common-header></xui-next-common-header>
  <xui-next-phase-banner type="Beta"></xui-next-phase-banner>
  <router-outlet></router-outlet>
    <xui-next-common-footer></xui-next-common-footer>`,
  imports: [
    AddUserSignupComponent,
    CommonHeaderComponent,
    PhaseBannerComponent,
    CommonFooterComponent,
    RouterOutlet
  ]
})
export class AddUserComponent {}
