import { Route } from '@angular/router';
import { AddUserComponent } from "./entry.component";
import { AddUserAddressComponent } from "../AddUserAddress/add-user-address-component";
import { AddUserBankDetailsComponent } from "../AddUserBankDetails/add-user-bank-details-component";
import { AddUserSignupComponent } from "../add-user-signup/add-user-signup.component";

export const remoteRoutes: Route[] = [
  { path: '', component: AddUserComponent, children:[
      { path: '', component: AddUserSignupComponent },
      { path: 'addAddress', component: AddUserAddressComponent },
      { path: 'bank-details', component: AddUserBankDetailsComponent }
    ]} ,
  // { path: 'addAddress', component: AddUserAddressComponent },
  // { path: 'bank-details', component: AddUserBankDetailsComponent },
];
