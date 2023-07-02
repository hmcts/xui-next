import { UntypedFormGroup, ValidatorFn } from '@angular/forms';

// TODO fix TS errors here
export function radioGroupValidator(): ValidatorFn {
  // @ts-ignore
  return function validate(formGroup: UntypedFormGroup) {
    if (formGroup.controls) {
      for (const control in formGroup.controls) {
        if (!formGroup.controls[control].valid) {
          return {
            isRadioGroupInvalid: true,
          };
        }
      }
    }else{
      return null;
    }
  };
}
