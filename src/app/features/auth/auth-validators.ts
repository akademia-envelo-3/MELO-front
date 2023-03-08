import { AbstractControl, ValidationErrors } from '@angular/forms';

export class AuthValidators {
  static email(control: AbstractControl): ValidationErrors | null {
    const regPattern = /^([a-z\d.-]+)@([a-z\d-]+)\.([a-z]{2,8})(\.[a-z]{2,8})?$/;
    const regex = new RegExp(regPattern);
    if (regex?.test(control.value)) {
      return null;
    }
    return { email: 'Nieprawidłowy format adresu email' };
  }
}
