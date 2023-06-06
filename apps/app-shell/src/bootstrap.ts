

import { AppShellComponent } from './app/app-shell.component';
import { isDevMode} from '@angular/core';
import {provideStoreDevtools} from '@ngrx/store-devtools';
import {routerReducer} from '@ngrx/router-store';

import {provideState, provideStore} from '@ngrx/store';
import { appRoutes } from './app/app.routes';
import { withEnabledBlockingInitialNavigation, provideRouter } from '@angular/router';
import { bootstrapApplication } from '@angular/platform-browser';
import {userFeature} from "@xui-next/shared-data-access-user";

bootstrapApplication(AppShellComponent, {
    providers: [
        // importProvidersFrom(BrowserModule, StoreModule.forRoot({}, {
        //     metaReducers: [],
        //     runtimeChecks: {
        //         strictActionImmutability: true,
        //         strictStateImmutability: true,
        //     },
        // }), EffectsModule.forRoot([]), StoreRouterConnectingModule.forRoot(), StoreDevtoolsModule.instrument({
        //     maxAge: 25,
        //     logOnly: !isDevMode(),
        //     autoPause: true,
        //     trace: false,
        //     traceLimit: 75, // maximum stack trace frames to be stored (in case trace option was provided as true)
        // })),
        provideStore({
            router: routerReducer
        }),
        provideRouter(appRoutes, withEnabledBlockingInitialNavigation()),
        provideStoreDevtools({
            maxAge: 25,
            logOnly: !isDevMode(),
            autoPause: true,
            trace: false,
            traceLimit: 75, // maximum stack trace frames to be stored (in case trace option was provided as true)
        }),
        provideState(userFeature) // ngrx suggested code does not work here -- investigate
    ]
})
  .catch((err) => console.error(err));
