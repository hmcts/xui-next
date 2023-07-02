import { UntypedFormGroup, ValidatorFn } from '@angular/forms';
//TODO workout why this throws an error
export function dateValidator(): ValidatorFn  {
  // @ts-ignore
  return  function validate(formGroup: UntypedFormGroup) {

    const d = new Date(
      parseInt(formGroup.controls['day'].value, 10),
      parseInt(formGroup.controls['month'].value, 10) - 1,
      parseInt(formGroup.controls['year'].value, 10) - 1
    );

    function isValidDate(val: any) {
      return val instanceof Date && !isNaN( +d );
    }

    if (!isValidDate(d)) {
      return {
        dateIsInvalid: true,
      };
    }

    return null;
  };
}
