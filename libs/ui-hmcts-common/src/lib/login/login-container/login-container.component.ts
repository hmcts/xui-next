import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {LoginFormComponent} from "../login-form/login-form.component";
import {LoginSignupComponent} from "../login-signup/login-signup.component";

@Component({
  selector: 'xui-next-login-container',
  standalone: true,
    imports: [CommonModule, LoginFormComponent, LoginSignupComponent],
  templateUrl: './login-container.component.html',
  styleUrls: ['./login-container.component.scss'],
})
export class LoginContainerComponent {}
