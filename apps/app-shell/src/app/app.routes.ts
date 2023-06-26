import { Route } from '@angular/router';
import {loadRemoteModule} from "@nx/angular/mf";
import {authGuard} from "@xui-next/shared-data-access-user";



export const appRoutes: Route[] = [
  // {
  //   path: 'notAuthorised',
  //   loadChildren: () => loadRemoteModule('idam','./Module').then((m) => m.NotAuthorisedComponent),
  // },
  {
    path: 'login',
    loadChildren: () =>
        loadRemoteModule('idam','./Module').then(
            (m) => m.RemoteEntryModule),
  },
  {
    path: 'manage-organisations',
    canActivate:[authGuard],
    loadChildren: () =>
      loadRemoteModule('manage-organisations','./Module').then((m) => m.RemoteEntryModule),
  },
  {
    path: 'manage-cases',
    canActivate:[authGuard],
    loadChildren: () =>
      loadRemoteModule('manage-cases','./Module').then((m) => m.RemoteEntryModule),
  },
  {
    path: 'show-cases',
    canActivate:[authGuard],
    loadChildren: () =>
      loadRemoteModule('show-cases','./Module').then((m) => m.RemoteEntryModule),
  },
  {
    path: 'idam',
    loadChildren: () => loadRemoteModule('idam','./Module').then((m) => m.RemoteEntryModule),
  },
  {
    path: '',
    loadChildren: () => loadRemoteModule('idam','./Module').then((m) => m.RemoteEntryModule),
  },
];
