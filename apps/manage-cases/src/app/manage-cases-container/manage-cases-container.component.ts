import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommonFooterComponent, CommonHeaderComponent, PhaseBannerComponent } from "@ui-hmcts-common";
import {ManageCasesComponent} from "../manage-cases/manage-cases.component";

@Component({
  selector: 'xui-next-manage-cases-container',
  standalone: true,
  imports: [CommonModule, CommonFooterComponent, CommonHeaderComponent, ManageCasesComponent, PhaseBannerComponent],
  template: `
        <xui-next-common-header></xui-next-common-header>
        <xui-next-phase-banner  type="Beta"></xui-next-phase-banner>
        <xui-next-manage-cases></xui-next-manage-cases>
        <xui-next-common-footer></xui-next-common-footer>
  `,
  styleUrls: ['./manage-cases-container.component.scss']
})
export class ManageCasesContainerComponent {

}
