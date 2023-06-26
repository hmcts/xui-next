import {Component, Input} from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'xui-next-common-service-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './common-service-header.component.html',
  styleUrls: ['./common-service-header.component.scss'],
})
export class CommonServiceHeaderComponent {
  @Input()  serviceName: string | undefined;
}
