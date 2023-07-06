import {
  Component,
  Input, NO_ERRORS_SCHEMA,
  OnInit
} from '@angular/core';
import { ValidationErrors, ValidatorFn, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ErrorMessagesModel } from '../../models/error-messages-model';
import { GovUiConfigModel } from '../../models/gov-ui-config-model';
import { GovUkLabelComponent } from '../gov-uk-label/gov-uk-label.component';
import { GovUkErrorMessageComponent } from '../gov-uk-error-message/gov-uk-error-message.component';
import { GovUkFieldsetComponent } from '../gov-uk-fieldset/gov-uk-fieldset.component';
import { NgClass, NgIf } from '@angular/common';
/*
 * Gov UK Date Component
 * Responsible for displaying 3 input fields:
 * day / month / year
 * displaying errorMessage messages
 * */
@Component({
    selector: 'xui-next-lib-gov-uk-date',
    templateUrl: './gov-uk-date.component.html',
    styleUrls: ['./gov-uk-date.component.scss'],
    standalone: true,
  schemas:[NO_ERRORS_SCHEMA],
    imports: [NgClass, FormsModule, ReactiveFormsModule, GovUkFieldsetComponent, NgIf, GovUkErrorMessageComponent, GovUkLabelComponent]
})
export class GovUkDateComponent implements OnInit {

  @Input() public config!: GovUiConfigModel;
  @Input() public errorMessage!: ErrorMessagesModel;
  @Input() public formGroup: any;
  @Input() public isOptional = false;

  constructor() {
    this.config = {id:''}
    this.errorMessage =  { isInvalid: false,
    messages: ['']}
  }

  public month: any;
  public day: any;
  public year: any;

  public ngOnInit(): void {
    this.day = `${this.config.id}_day`;
    this.month = `${this.config.id}_month`;
    this.year = `${this.config.id}_year`;
    const dateValidator = this.DateValidator();
    this.formGroup.get(this.day).setValidators(dateValidator);
  }

  private isValidDate(d: Date, month: number, year: number): boolean {
    const dateCheck = !isNaN(d.getTime());
    // Month mismatch occurs if the provided day or month are invalid, or either is omitted. **Note:** This is insufficient for
    // checking date validity when the year is omitted because it defaults to 1900 - an extra check is required
    const monthMatch = d.getMonth() === month;
    const yearMatch = d.getFullYear() === year;
    return dateCheck && monthMatch && yearMatch;
  }

  private isEmpty(value: any) {
    // Note: Intentional use of == to check for null or undefined
    /* eslint-disable eqeqeq */
    /* tslint:disable:triple-equals */
    // NaN and < 0 checks required for month field
    return value == null || value === '' || isNaN(value) || value < 0;
    /* eslint-enable eqeqeq */
    /* tslint:enable:triple-equals */
  }

  public DateValidator(): ValidatorFn {
    return (): ValidationErrors | null => {
      const day = this.formGroup.get(this.day).value;
      const month = this.formGroup.get(this.month).value - 1;
      const year = this.formGroup.get(this.year).value;
      // Validation should pass if the date field is optional and day, month, and year are all empty
      if (this.isOptional && this.isEmpty(day) && this.isEmpty(month) && this.isEmpty(year)) {
        return null;
      }
      // + to coerce year to a number
      return !this.isValidDate(new Date(year, month, day), month, +year) ? { dateComponent: true } : null;
    };
  }
}
