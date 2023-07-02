import {Component, Input, NO_ERRORS_SCHEMA, OnInit} from '@angular/core';
import { UntypedFormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { GovUiConfigModel } from '../../models/gov-ui-config-model';
import { RemoveHostDirective } from '../../directives/remove-host.directive';
import { GovUkLabelComponent } from '../gov-uk-label/gov-uk-label.component';
/*
* Gov Uk Radio state-less  Component responsible for
* displaying radios input and hint
*
* */
@Component({
    selector: 'xui-next-lib-gov-radio',
    templateUrl: './gov-uk-radio.component.html',
    schemas:[NO_ERRORS_SCHEMA],
    standalone: true,
    imports: [FormsModule, ReactiveFormsModule, GovUkLabelComponent, RemoveHostDirective]
})
export class GovUkRadioComponent implements OnInit {

  @Input() public group!: UntypedFormGroup;
  @Input() public config: GovUiConfigModel  = {id:'', name:''};
  // {value: string, label: string, hint: string; name: string; focusOn: string; id: string; classes: string}; // TODO create interface

  public id!: string
    public formControlName = '';
  /*
   * ngOnInIt
   * needed to manage the focus id if passed on in config
   * si it can focus on element when user clicks on error message in the header.
   **/
  public ngOnInit(): void {
    const id =  this.config.focusOn ? this.config.focusOn : this.config.value;
      if (id != null ) {
          this.config.id = id as string;
      }
    this.config.classes = this.config.classes ?
      this.config.classes.concat(' govuk-radios__label') : 'govuk-radios__label';
      this.formControlName = this.group.controls[this.config.name as string] as unknown as string
  }

}
