import { Component } from '@angular/core';
import {ManageCasesContainerComponent} from "../manage-cases-container/manage-cases-container.component";

@Component({
    selector: 'xui-next-manage-cases-entry',
    template: `<xui-next-manage-cases-container></xui-next-manage-cases-container>`,
    standalone: true,
    imports: [ ManageCasesContainerComponent],
})
export class RemoteEntryComponent {}
