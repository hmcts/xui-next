import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import {FormsModule} from "@angular/forms";

import { RemoteEntryComponent } from './entry.component';
import { remoteRoutes } from './entry.routes';
import {IdamContainerComponent} from "./idam-container/idam-container.component";


@NgModule({
    imports: [CommonModule, FormsModule, RouterModule.forChild(remoteRoutes), RemoteEntryComponent, IdamContainerComponent],
    providers: [],
})
export class RemoteEntryModule {}
