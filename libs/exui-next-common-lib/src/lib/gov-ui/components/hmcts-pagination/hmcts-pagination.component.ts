import { Component, EventEmitter, Input, Output } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NgIf, NgFor, DecimalPipe } from '@angular/common';
import { NgxPaginationModule } from 'ngx-pagination';

@Component({
    selector: 'xui-next-lib-pagination',
    templateUrl: './hmcts-pagination.component.html',
    styleUrls: ['./hmcts-pagination.component.scss'],
    standalone: true,
    imports: [NgxPaginationModule, NgIf, RouterLink, NgFor, DecimalPipe]
})
export class HmctsPaginationComponent {

  @Input() public id!: string;
  @Input() public maxSize  = 7;
  @Input() public pageSize = 10;
  @Input() public showPageNumbers = true;
  @Input() public showResultCount = true;
  @Output() public pageChange: EventEmitter<number> = new EventEmitter<number>();
  @Output() public pageBoundsCorrection: EventEmitter<number> = new EventEmitter<number>();

}
