import { Component } from '@angular/core';
import { NxWelcomeComponent } from './nx-welcome.component';
import {CommonFooterComponent, CommonHeaderComponent} from "@ui-hmcts-common";


@Component({
    selector: 'xui-next-manage-organisations-entry',
    template: `<xui-next-common-header></xui-next-common-header>
                    <xui-next-nx-welcome></xui-next-nx-welcome>
                <xui-next-common-footer></xui-next-common-footer>`,
    standalone: true,
    imports: [NxWelcomeComponent, CommonFooterComponent, CommonHeaderComponent],
})
export class RemoteEntryComponent {}
