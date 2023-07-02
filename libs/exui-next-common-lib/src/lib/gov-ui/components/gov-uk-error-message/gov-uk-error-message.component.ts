import {Component, Input} from '@angular/core';
import { ErrorMessagesModel } from '../../models';
import { GovUiConfigModel } from '../../models/gov-ui-config-model';
import { NgFor } from '@angular/common';
/*
* Gov UK Error Message
* Responsible for displaying in-line error messages
* @prop config - obj with properties
* @prop errorMessage - all error bject with messages property that is arry of strings.
* */
@Component({
    selector: ' xui-next-lib-gov-uk-error-message',
    templateUrl: './gov-uk-error-message.component.html',
    standalone: true,
    imports: [NgFor]
})
export class GovUkErrorMessageComponent {
  constructor() { }
  @Input() public config!: GovUiConfigModel;
  // { id: string };
  @Input() public errorMessage!: ErrorMessagesModel;
}
