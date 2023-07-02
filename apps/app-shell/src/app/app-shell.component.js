import { __decorate, __metadata } from "tslib";
import { Component } from '@angular/core';
import { Router, RouterOutlet } from "@angular/router";
import { distinctUntilChanged } from "rxjs";
import { UserService } from "@xui-next/shared-data-access-user";
export let AppShellComponent = class AppShellComponent {
    constructor(userService, router) {
        this.userService = userService;
        this.router = router;
        this.title = 'app-shell';
        this.isLoggedIn$ = this.userService.isUserLoggedIn$;
    }
    ngOnInit() {
        this.isLoggedIn$
            .pipe(distinctUntilChanged())
            .subscribe(async (loggedIn) => {
            // Queue the navigation after initialNavigation blocking is completed
            setTimeout(() => {
                if (!loggedIn) {
                    this.router.navigateByUrl('login');
                }
                else {
                    this.router.navigateByUrl('');
                }
            });
        });
    }
};
AppShellComponent = __decorate([
    Component({
        selector: 'xui-next-root',
        templateUrl: './app.component.html',
        styleUrls: ['./app-shell.component.scss'],
        standalone: true,
        imports: [RouterOutlet],
    }),
    __metadata("design:paramtypes", [UserService, Router])
], AppShellComponent);
//# sourceMappingURL=app-shell.component.js.map