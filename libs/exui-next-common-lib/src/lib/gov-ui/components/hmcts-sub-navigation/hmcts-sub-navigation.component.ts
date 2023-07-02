import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';
import {CommonModule, NgFor, NgIf} from "@angular/common";


@Component({
    selector: 'xui-next-lib-sub-navigation',
    styleUrls: ['hmcts-sub-navigation.component.scss'],
    templateUrl: './hmcts-sub-navigation.component.html',
    standalone: true,
    imports: [CommonModule, NgIf, NgFor, RouterLink],
})
export class HmctsSubNavigationComponent {
    @Input() public label!: string;
    @Input() public items!: SubNavigation[];
}

export interface SubNavigation {
    text: string;
    href: string;
    active: boolean;
    total?: number;
    roundel?: number;
}

