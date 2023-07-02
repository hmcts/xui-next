import { Component, Input } from '@angular/core';
import { NgIf, NgSwitch, NgSwitchCase } from '@angular/common';

@Component({
    selector: 'xui-next-lib-banner',
    templateUrl: './hmcts-banner.component.html',
    styleUrls: ['./hmcts-banner.component.scss'],
    standalone: true,
    imports: [NgIf, NgSwitch, NgSwitchCase]
})
export class HmctsBannerComponent {
  @Input() public message!: string;
  @Input() public type!: 'warning' | 'success' | 'information';
  @Input() public title?: string = '';
  @Input() public showMessageIcon?: boolean = false;
  @Input() public messageBoldText?: boolean = false;
}
