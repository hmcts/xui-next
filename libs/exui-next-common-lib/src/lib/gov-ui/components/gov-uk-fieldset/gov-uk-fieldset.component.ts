import {Component, CUSTOM_ELEMENTS_SCHEMA, Input, NO_ERRORS_SCHEMA} from '@angular/core';
import { ErrorMessagesModel } from '../../models';
import { GovUiConfigModel } from '../../models/gov-ui-config-model';
import {HtmlTemplatesHelper} from '../../util/helpers/html-templates.helper';
import { NgIf } from '@angular/common';
/*
* Gov Uk Fieldset Component
* Used to wrap group fieldset elements
* it can conditionally display h1 tag
* @param config
* @param isHeading
* @param errorMessage - used for aria tag
* */
@Component({
    selector: 'xui-next-lib-gov-uk-fieldset',
    templateUrl: './gov-uk-fieldset.component.html',
    standalone: true,
    schemas:[CUSTOM_ELEMENTS_SCHEMA,NO_ERRORS_SCHEMA],
    imports: [NgIf]
})
export class GovUkFieldsetComponent {
  constructor() {
      this.config = {id:''}
      this.errorMessage =  { isInvalid: false,
          messages: ['']}
  }
  @Input() public config: GovUiConfigModel;
  // {legend: string; classes: string, id: string, hint: string, key: string, isPageHeading: boolean};
  @Input() public isPageHeading = false;
  @Input() public errorMessage: ErrorMessagesModel;

  public setDescribedBy(): string | null {
    return HtmlTemplatesHelper.setDescribedBy(this.errorMessage, this.config);
  }
}
