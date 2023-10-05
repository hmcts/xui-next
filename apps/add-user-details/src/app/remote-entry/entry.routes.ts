import { Route } from '@angular/router';
import { AddUserComponent } from "./entry.component";
import { AddUserAddressContainerComponent } from "../AddUserAddress/add-user-address-container-component";
import { AddUserBankDetailsComponent } from "../AddUserBankDetails/add-user-bank-details-component";
import { AddUserSignupComponent } from "../add-user-signup/add-user-signup.component";
import { EditUserAddressComponent } from "../edit-user-address/edit-user-address.component";

export const remoteRoutes: Route[] = [
  { path: '', component: AddUserComponent, children:[
      { path: '', component: AddUserSignupComponent },
      { path: 'addAddress', component: AddUserAddressContainerComponent },
      { path: 'editAddress', component: EditUserAddressComponent },
      { path: 'bank-details', component: AddUserBankDetailsComponent }
    ]} ,
];
//export const remoteRoutes: Route[] = new DynamicRouteService().getModuleRoutes('Add User');
