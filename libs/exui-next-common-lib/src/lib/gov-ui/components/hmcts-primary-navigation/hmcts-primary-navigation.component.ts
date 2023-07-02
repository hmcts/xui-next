import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';
import {NgIf, NgFor, CommonModule} from '@angular/common';

@Component({
    selector: 'xui-next-lib-primary-navigation',
    templateUrl: './hmcts-primary-navigation.component.html',
    styleUrls: ['./hmcts-primary-navigation.component.scss'],
    standalone: true,
    imports: [NgIf, NgFor, CommonModule, RouterLink]
})
export class HmctsPrimaryNavigationComponent {

    @Input() isUserLoggedIn!:boolean

    @Input() public label!: string;
    @Input() public items!: {active: boolean, href: string, text: string}[];
    @Input() public isBrandedHeader!: boolean;


}
