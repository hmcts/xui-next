import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { RemoteEntryComponent } from './entry.component';
import { remoteRoutes } from './entry.routes';
import {ManageCasesContainerComponent} from "../manage-cases-container/manage-cases-container.component";
import {ManageCasesComponent} from "../manage-cases/manage-cases.component";

@NgModule({
    imports: [CommonModule, RouterModule.forChild(remoteRoutes), RemoteEntryComponent,ManageCasesContainerComponent,ManageCasesComponent],
    providers: [],
})
export class RemoteEntryModule {}
