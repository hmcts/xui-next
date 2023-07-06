import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from "@angular/forms";
import { remoteRoutes } from './entry.routes';
import { IdamContainerComponent } from "./idam-container/idam-container.component";
import { LoginEntryComponent } from "./entry.component";
import { NotAuthorisedComponent } from "../notAuthorised/not-authorised.component";
export let RemoteEntryModule = class RemoteEntryModule {
};
RemoteEntryModule = __decorate([
    NgModule({
        imports: [CommonModule, FormsModule, RouterModule.forChild(remoteRoutes), LoginEntryComponent, NotAuthorisedComponent, IdamContainerComponent],
        providers: [],
    })
], RemoteEntryModule);
//# sourceMappingURL=entry.module.js.map