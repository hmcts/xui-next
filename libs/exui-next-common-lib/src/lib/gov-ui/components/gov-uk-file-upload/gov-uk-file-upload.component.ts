import { NgClass, NgIf } from '@angular/common';
import {Component, Input, OnInit} from '@angular/core';
import { FormsModule, ReactiveFormsModule, UntypedFormGroup } from '@angular/forms';
import { ErrorMessagesModel } from '../../models';
import { GovUiConfigModel } from '../../models/gov-ui-config-model';
import {HtmlTemplatesHelper} from '../../util/helpers/html-templates.helper';
import { GovUkErrorMessageComponent } from '../gov-uk-error-message/gov-uk-error-message.component';
import { GovUkLabelComponent } from '../gov-uk-label/gov-uk-label.component';
/*
* Gov UK Input component
* Responsible for displaying input, hint and error messages
* @prop errorMessages - array of messages
* @prop focusOn - passing the FormGroup
* @prop config - adding configuration
* */
@Component({
    selector: 'xui-next-lib-gov-uk-file-upload',
    templateUrl: './gov-uk-file-upload.component.html',
    standalone: true,
    imports: [FormsModule, ReactiveFormsModule, NgClass, GovUkLabelComponent, NgIf, GovUkErrorMessageComponent]
})
export class GovUkFileUploadComponent implements OnInit {
  constructor() { }
  @Input() public errorMessage!: ErrorMessagesModel;
  @Input() public group!: UntypedFormGroup;
  @Input() public config!: GovUiConfigModel;
  // { label: string, hint: string; name: string; id: string, type: string; isPageHeading: boolean, classes: string };

  public reloadInput = true;

  public ngOnInit(): void {
    this.config.classes = 'govuk-label--m';
  }

  public setDescribedBy(): string | null {
    return HtmlTemplatesHelper.setDescribedBy(this.errorMessage, this.config);
  }
}
