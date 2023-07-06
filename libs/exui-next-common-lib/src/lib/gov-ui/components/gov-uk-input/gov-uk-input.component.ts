import { Component, Input, OnInit } from '@angular/core';
import { UntypedFormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ErrorMessagesModel, GovUiConfigModel } from '../../models';
import { HtmlTemplatesHelper } from '../../util/helpers/html-templates.helper';
import { GovUkErrorMessageComponent } from '../gov-uk-error-message/gov-uk-error-message.component';
import { GovUkLabelComponent } from '../gov-uk-label/gov-uk-label.component';
import { NgClass, NgIf } from '@angular/common';
/*
* Gov UK Input component
* Responsible for displaying input, hint and error messages
* @prop errorMessages - array of messages
* @prop focusOn - passing the FormGroup
* @prop config - adding configuration
* */
@Component({
    selector: 'xui-next-lib-gov-uk-input',
    templateUrl: './gov-uk-input.component.html',
    styleUrls: ['./gov-uk-input.component.scss'],
    standalone: true,
    imports: [FormsModule, ReactiveFormsModule, NgClass, GovUkLabelComponent, NgIf, GovUkErrorMessageComponent]
})
export class GovUkInputComponent implements OnInit {

  @Input() public errorMessage!: ErrorMessagesModel;
  @Input() public group!: UntypedFormGroup;
  @Input() public config!: GovUiConfigModel;
  // { label: string, hint: string; name: string; id: string, type: string; isPageHeading: boolean, classes: string };

  public ngOnInit(): void {
    this.config.classes = typeof(this.config.classes) === 'string' ? this.config.classes : 'govuk-label govuk-label--m';
  }

  public setDescribedBy(): string | null{
    return HtmlTemplatesHelper.setDescribedBy(this.errorMessage, this.config);
  }
}
