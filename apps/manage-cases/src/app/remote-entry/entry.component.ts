import { Component } from '@angular/core';
import { NxWelcomeComponent } from './nx-welcome.component';

@Component({
    selector: 'xui-next-manage-cases-entry',
    template: `<xui-next-nx-welcome></xui-next-nx-welcome>`,
    standalone: true,
    imports: [NxWelcomeComponent],
})
export class RemoteEntryComponent {}
