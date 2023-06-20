import { Route } from '@angular/router';
import {authGuard} from "@xui-next/shared-data-access-user";

export const appRoutes: Route[] = [
  {
    path: '',
    canActivate:[authGuard],
    loadChildren: () =>
      import('./remote-entry/entry.module').then((m) => m.RemoteEntryModule),
  },
];
