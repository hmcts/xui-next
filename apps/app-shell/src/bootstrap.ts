import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppShellComponent } from './app/app-shell.component';
import { isDevMode, importProvidersFrom } from '@angular/core';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { StoreRouterConnectingModule } from '@ngrx/router-store';
import { EffectsModule } from '@ngrx/effects';
import {provideState, StoreModule} from '@ngrx/store';
import { appRoutes } from './app/app.routes';
import { withEnabledBlockingInitialNavigation, provideRouter } from '@angular/router';
import { BrowserModule, bootstrapApplication } from '@angular/platform-browser';
import {userFeature} from "@xui-next/shared-data-access-user";

bootstrapApplication(AppShellComponent, {
    providers: [
        importProvidersFrom(BrowserModule, StoreModule.forRoot({}, {
            metaReducers: [],
            runtimeChecks: {
                strictActionImmutability: true,
                strictStateImmutability: true,
            },
        }), EffectsModule.forRoot([]), StoreRouterConnectingModule.forRoot(), StoreDevtoolsModule.instrument({
            maxAge: 25,
            logOnly: !isDevMode(),
            autoPause: true,
            trace: false,
            traceLimit: 75, // maximum stack trace frames to be stored (in case trace option was provided as true)
        })),
        provideRouter(appRoutes, withEnabledBlockingInitialNavigation()),
        //provideState(userFeature) // ngrx suggested code does not work here -- investigate
    ]
})
  .catch((err) => console.error(err));
