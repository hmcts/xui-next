import { Component, Input } from '@angular/core';
import { NgIf } from '@angular/common';

@Component({
    selector: 'xui-next-lib-identity-bar',
    templateUrl: './hmcts-identity-bar.component.html',
    styleUrls: ['./hmcts-identity-bar.component.scss'],
    standalone: true,
    imports: [NgIf]
})
export class HmctsIdentityBarComponent {

    @Input() value: any
}
