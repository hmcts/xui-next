import { DOCUMENT, NgIf, NgFor } from '@angular/common';
import {
  AfterViewInit,
  Component,
  CUSTOM_ELEMENTS_SCHEMA,
  Inject,
  Input,
  NO_ERRORS_SCHEMA,
  OnChanges,
  SimpleChanges
} from '@angular/core';
import { RouterLink } from '@angular/router';
/*
  Error Summary component
  State Less component
  @property errorMessages that is array of messages.
  Component is also responsible for scrolling. Up and Down the page when user click on links
*/
@Component({
    selector: 'xui-next-lib-error-summary',
    templateUrl: './hmcts-error-summary.component.html',
    standalone: true,
    schemas:[CUSTOM_ELEMENTS_SCHEMA,NO_ERRORS_SCHEMA],
    imports: [NgIf, NgFor, RouterLink]
})
export class HmctsErrorSummaryComponent implements AfterViewInit, OnChanges {

  @Input() public set errorMessages(value: string[]) {
    this.messages = value;
  }

  @Input() public header!: string;
  @Input() public showWarningMessage!: boolean;

  public messages!: string[];

  constructor(@Inject(DOCUMENT) private readonly document: any) { }

  public ngAfterViewInit(): void {
    this.scrollTo('errorSummary');
  }

  public ngOnChanges(changes: SimpleChanges): void {
    if (changes['errorMessages']) {
      this.scrollTo('errorSummary');
    }
  }

  public scrollTo(selector: any) {
    if (this.document.querySelector(`#${selector}`)) {
      const el = this.document.querySelector(`#${selector}`);

      el.focus();
    }
  }

  public hasElement(selector: any) {
    return this.document.querySelector(`#${selector}`);
  }

}
