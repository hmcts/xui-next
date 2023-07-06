import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { StoreModule } from "@ngrx/store";
import { userFeature } from "@xui-next/shared-data-access-user";
import { HttpClient } from "@angular/common/http";
export let AppModule = class AppModule {
};
AppModule = __decorate([
    NgModule({
        declarations: [AppComponent],
        imports: [
            BrowserModule,
            RouterModule.forRoot([
                {
                    path: '',
                    loadChildren: () => import('./remote-entry/entry.module').then((m) => m.RemoteEntryModule),
                },
            ], { initialNavigation: 'enabledBlocking' }),
            StoreModule.forFeature(userFeature)
        ],
        providers: [HttpClient],
        bootstrap: [AppComponent],
    })
], AppModule);
//# sourceMappingURL=app.module.js.map