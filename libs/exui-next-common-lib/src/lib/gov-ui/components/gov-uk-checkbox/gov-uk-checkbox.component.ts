import {Component, Input, NO_ERRORS_SCHEMA, OnInit} from '@angular/core';
import {FormsModule, FormGroup, ReactiveFormsModule,} from '@angular/forms';
import { GovUiConfigModel } from '../../models';
import { RemoveHostDirective } from '../../directives/remove-host.directive';
import { GovUkLabelComponent } from '../gov-uk-label/gov-uk-label.component';
/*
* Gov Uk Checkbox Dumb Component responsible for
* displaying checkbox input and hint
*
* */
@Component({
    selector: 'xui-next-lib-gov-checkbox',
    templateUrl: './gov-uk-checkbox.component.html',
    standalone: true,
    schemas: [NO_ERRORS_SCHEMA],
    imports: [FormsModule, GovUkLabelComponent, ReactiveFormsModule, RemoveHostDirective]
})

export class GovUkCheckboxComponent implements OnInit {

  @Input() group!: FormGroup;
  @Input()  config! : GovUiConfigModel
    @Input()  isChecked  = false;
  // {value: string, label: string, hint: string; name: string; focusOn: string; id: string; classes: string};

  public id: string|undefined;
    constructor() {
        this.config = {
            "id": '',
            value: ''
        } as GovUiConfigModel
    }
  public ngOnInit(): void {

          const id = this.config.focusOn ? this.config.focusOn : this.config.value as string;
      if (id != null) {
          this.config.id = id
      }
          this.config.classes = this.config.classes ?
              this.config.classes.concat(' govuk-checkboxes__label') : 'govuk-checkboxes__label';
      }

}
