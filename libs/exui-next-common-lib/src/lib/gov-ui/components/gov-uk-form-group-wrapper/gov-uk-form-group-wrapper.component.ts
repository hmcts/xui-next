import {Component, Input} from '@angular/core';
import { ErrorMessagesModel } from '../../models';
import { GovUiConfigModel } from '../../models/gov-ui-config-model';
import { GovUkErrorMessageComponent } from '../gov-uk-error-message/gov-uk-error-message.component';
import { GovUkFieldsetComponent } from '../gov-uk-fieldset/gov-uk-fieldset.component';
import { NgClass } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
/*
* Gov Uk Form Group Wrapper
* Used to wrap group form elements in html tags below such as
* gov-uk-checkboxes and radio buttons
* and errorMessage messages
* */
@Component({
    selector: 'xui-next-lib-gov-uk-form-group-wrapper',
    templateUrl: './gov-uk-form-group-wrapper.component.html',
    standalone: true,
    imports: [FormsModule, ReactiveFormsModule, NgClass, GovUkFieldsetComponent, GovUkErrorMessageComponent]
})
export class GovUkFormGroupWrapperComponent {

  @Input() public error!: ErrorMessagesModel;
  @Input() public group!: string;
  @Input() public config!: GovUiConfigModel;
  // {hint: string; legend: string, key: string, isPageHeading: boolean;}; // TODO create a global interface

}

