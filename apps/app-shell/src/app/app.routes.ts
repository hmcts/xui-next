
import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  {
    path: 'idam',
    loadChildren: () => import('idam/Module').then((m) => m.RemoteEntryModule),
  },
  {
    path: '',
    loadChildren: () => import('idam/Module').then((m) => m.RemoteEntryModule),
  },
];
