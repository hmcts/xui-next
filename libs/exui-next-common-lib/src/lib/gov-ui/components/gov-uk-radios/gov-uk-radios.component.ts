import { Component, Input } from '@angular/core';
import { ErrorMessagesModel } from '../../models';
import { RadioButtonsModel } from '../../models/radio-buttons.model';
import { RemoveHostDirective } from '../../directives/remove-host.directive';
import { GovUkRadioComponent } from '../gov-uk-radio/gov-uk-radio.component';
import { NgFor } from '@angular/common';
import { GovUkFormGroupWrapperComponent } from '../gov-uk-form-group-wrapper/gov-uk-form-group-wrapper.component';
/*
* Radios component - state less
* Responsible for displaying a list of gov-uk-radio components
* @param: options - object with data for wrapper (fieldset) and
* array of items for gov-uk-checkboxes
* @param: errors - array of error stings
* */
@Component({
    selector: 'xui-next-lib-gov-uk-radios',
    templateUrl: './gov-uk-radios.component.html',
    standalone: true,
    imports: [GovUkFormGroupWrapperComponent, NgFor, GovUkRadioComponent, RemoveHostDirective]
})

export class GovUkRadiosComponent {

  @Input() public options!: RadioButtonsModel;
  @Input() public errors!: ErrorMessagesModel;

}
