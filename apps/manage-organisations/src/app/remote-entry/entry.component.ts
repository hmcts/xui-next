import { Component } from '@angular/core';
import { NxWelcomeComponent } from './nx-welcome.component';
import { CommonFooterComponent, CommonHeaderComponent, PhaseBannerComponent } from "@ui-hmcts-common";


@Component({
    selector: 'xui-next-manage-organisations-entry',
    template: `<xui-next-common-header></xui-next-common-header>
    <xui-next-phase-banner  type="Beta"></xui-next-phase-banner>
                    <xui-next-nx-welcome></xui-next-nx-welcome>
                <xui-next-common-footer></xui-next-common-footer>`,
    standalone: true,
    imports: [NxWelcomeComponent, CommonFooterComponent, CommonHeaderComponent, PhaseBannerComponent]
})
export class RemoteEntryComponent {}
