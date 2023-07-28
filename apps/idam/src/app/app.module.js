import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { StoreModule } from "@ngrx/store";
import { userFeature } from "@xui-next/shared-data-access-user";
import { HttpClient } from "@angular/common/http";
import { CommonModule } from "@angular/common";
export let AppModule = class AppModule {
};
AppModule = __decorate([
    NgModule({
        declarations: [AppComponent],
        imports: [
            BrowserModule,
            CommonModule,
            RouterModule.forRoot([
                {
                    path: '',
                    loadChildren: () => import('./remote-entry/entry.module').then((m) => m.RemoteEntryModule),
                },
            ], { initialNavigation: 'enabledBlocking' }),
            StoreModule.forFeature(userFeature)
        ],
        exports: [CommonModule, BrowserModule],
        providers: [HttpClient],
        bootstrap: [AppComponent],
    })
], AppModule);
//# sourceMappingURL=app.module.js.map