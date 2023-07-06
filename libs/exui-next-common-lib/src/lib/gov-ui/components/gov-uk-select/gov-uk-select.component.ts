import {Component, Input} from '@angular/core';
import { UntypedFormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ErrorMessagesModel } from '../../models';
import { GovUiConfigModel } from '../../models';
import {HtmlTemplatesHelper} from '../../util/helpers/html-templates.helper';
import { GovUkErrorMessageComponent } from '../gov-uk-error-message/gov-uk-error-message.component';
import { GovUkLabelComponent } from '../gov-uk-label/gov-uk-label.component';
import { NgClass, NgIf, NgFor } from '@angular/common';
/*
* Gov Uk Select Dumb Component responsible for
* dropdown input.
* */
@Component({
    selector: 'xui-next-lib-gov-select',
    templateUrl: './gov-uk-select.component.html',
    standalone: true,
    imports: [FormsModule, ReactiveFormsModule, NgClass, GovUkLabelComponent, NgIf, GovUkErrorMessageComponent, NgFor]
})
export class GovUkSelectComponent {

  @Input() public errorMessage!: ErrorMessagesModel;
  @Input() public group!: UntypedFormGroup;
  @Input() public config!: GovUiConfigModel;
  // {hint: string; name: string; id: string,  isPageHeading: boolean, classes: string };
  @Input() public items!: { label: string, value: string; id: string; }[];

  public setDescribedBy(): string | null {
    return HtmlTemplatesHelper.setDescribedBy(this.errorMessage, this.config);
  }
}
