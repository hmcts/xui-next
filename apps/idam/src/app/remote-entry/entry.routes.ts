import { Route } from '@angular/router';
import {LoginEntryComponent} from './entry.component';
import {NotAuthorisedComponent} from "../notAuthorised/not-authorised.component";

export const remoteRoutes: Route[] = [
  { path: 'notAuthorised', component: NotAuthorisedComponent },
  { path: '', component: LoginEntryComponent }
];
