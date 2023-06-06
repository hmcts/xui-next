import {Component, OnInit} from '@angular/core';
import { Router, RouterOutlet } from "@angular/router";

import {distinctUntilChanged} from "rxjs";

import {UserService} from "@xui-next/shared-data-access-user";

@Component({
    selector: 'xui-next-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app-shell.component.scss'],
    standalone: true,
    imports: [RouterOutlet],
})
export class AppShellComponent implements OnInit {
  title = 'app-shell';
  isLoggedIn$ = this.userService.isUserLoggedIn$;
  constructor(private userService: UserService, private router: Router) {}
  ngOnInit() {
    this.isLoggedIn$
        .pipe(distinctUntilChanged())
        .subscribe(async (loggedIn) => {
          // Queue the navigation after initialNavigation blocking is completed
          setTimeout(() => {
            if (!loggedIn) {
              this.router.navigateByUrl('login');
            } else {
              this.router.navigateByUrl('');
            }
          });
        });
  }

}
