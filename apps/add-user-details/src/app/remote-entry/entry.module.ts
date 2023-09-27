import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';


import { remoteRoutes } from './entry.routes';
import { AddUserComponent } from "./entry.component";

@NgModule({
  imports: [AddUserComponent, CommonModule, RouterModule.forChild(remoteRoutes)],
  providers: [],
})
export class RemoteEntryModule {}
