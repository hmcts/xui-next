import { Component, Input } from '@angular/core';
import { CommonModule } from "@angular/common";

@Component({
  selector: 'xui-next-phase-banner',

  standalone: true,
  imports: [CommonModule],
  styleUrls: ['./phase-banner-component.scss'],
  templateUrl:'./phase-banner.component.html'
})
export class PhaseBannerComponent  {
  @Input() public type: string   | undefined

}
