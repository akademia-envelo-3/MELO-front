import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { NonNullableFormBuilder, Validators } from '@angular/forms';
import { AuthService, LoginCredentials } from '..';

@Component({
  selector: 'app-auth',
  templateUrl: './auth-component.html',
  styleUrls: ['./auth.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AuthComponent {
  private builder = inject(NonNullableFormBuilder);
  private authService = inject(AuthService);

  form = this.createForm();
  emailNotFocused = false;
  passwordNotFocused = false;
  isPasswordVisible = false;

  private createForm() {
    return this.builder.group({
      email: this.builder.control('', {
        validators: [Validators.required, Validators.email],
      }),
      password: this.builder.control('', {
        validators: [Validators.required],
      }),
    });
  }

  get emailCtrl() {
    return this.form.controls.email;
  }
  get passwordCtrl() {
    return this.form.controls.password;
  }
  getEmailSuccessMessage() {
    return 'great!';
  }

  getEmailErrorMessage() {
    if (this.emailCtrl.hasError('required')) {
      return 'To pole jest obowiązkowe';
    }
    return this.emailCtrl.hasError('email') ? 'Nieprawidłowy adres email' : '';
  }

  togglePasswordVisibility() {
    this.isPasswordVisible = !this.isPasswordVisible;
  }

  login() {
    this.form.markAllAsTouched();
    if (this.form.valid) {
      this.authService.login(this.form.value as LoginCredentials);
    }
  }
}
