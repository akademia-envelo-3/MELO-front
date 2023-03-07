import { AbstractControl, AsyncValidatorFn } from '@angular/forms';
import { map } from 'rxjs';
import { UnitFormService } from './unit-form.service';

export function unitNameTakenValidator(
  unitFormService: UnitFormService
): AsyncValidatorFn {
  return (control: AbstractControl) => {
    return unitFormService
      .checkIfNameTaken(control.value.toLowerCase())
      .pipe(map(names => (names.length == 0 ? null : { nameTaken: true })));
  };
}
