import { Component } from '@angular/core';
import {UserService} from "@xui-next/shared-data-access-user";
import {NgIf, AsyncPipe, CommonModule} from '@angular/common';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'xui-next-login-form',
  standalone: true,
  imports: [CommonModule, FormsModule,
    NgIf,
    AsyncPipe],
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss'],
})
export class LoginFormComponent {
  username = '';
  password = '';
  isLoggedIn$ = this.userService.isUserLoggedIn$;
  constructor(private userService: UserService) {}
  login() {
    this.userService.checkCredentials(this.username, this.password);
  }
}
