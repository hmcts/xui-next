import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PhaseBannerComponent } from "../phase-banner/phase-banner.component";

@Component({
  selector: 'xui-next-common-header',
  standalone: true,
  imports: [CommonModule, PhaseBannerComponent],
  templateUrl: './common-header.component.html',
  styleUrls: ['./common-header.component.scss'],
})
export class CommonHeaderComponent {}
