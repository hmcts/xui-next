import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { RemoteEntryComponent } from './entry.component';
import { NxWelcomeComponent } from './nx-welcome.component';
import { remoteRoutes } from './entry.routes';

@NgModule({
    imports: [CommonModule, RouterModule.forChild(remoteRoutes), RemoteEntryComponent, NxWelcomeComponent],
    providers: [],
})
export class RemoteEntryModule {}
