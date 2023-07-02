import {Component, Input} from '@angular/core';
import { UntypedFormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ErrorMessagesModel } from '../../models';
import { GovUiConfigModel } from '../../models/gov-ui-config-model';
import {HtmlTemplatesHelper} from '../../util/helpers/html-templates.helper';
import { GovUkErrorMessageComponent } from '../gov-uk-error-message/gov-uk-error-message.component';
import { GovUkLabelComponent } from '../gov-uk-label/gov-uk-label.component';
import { NgClass } from '@angular/common';
/*
* CheckBox component - state less
* Responsible for displaying a list of gov-uk-checkboxes
* @param: options - object with data for wrapper (fieldset) and
* array of items for gov-uk-checkboxes
* @param: errors - array of errorMessage
* */
@Component({
    selector: 'xui-next-lib-gov-uk-textarea',
    templateUrl: './gov-uk-textarea.component.html',
    standalone: true,
    imports: [FormsModule, ReactiveFormsModule, NgClass, GovUkLabelComponent, GovUkErrorMessageComponent]
})
export class GovUkTextareaComponent {
  @Input() public config!: GovUiConfigModel;
  // {label: string; classes: string; hint: string; key: string; rows: number, id: string};
  @Input() public errorMessage!: ErrorMessagesModel;
  @Input() public group!: UntypedFormGroup;

  public setDescribedBy(): string | null {
    return HtmlTemplatesHelper.setDescribedBy(this.errorMessage, this.config);
  }

}
