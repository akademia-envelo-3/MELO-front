import {
  Component,
  ChangeDetectionStrategy,
  inject,
  ChangeDetectorRef,
} from '@angular/core';
import { NonNullableFormBuilder, Validators } from '@angular/forms';
import { MESSAGES } from '@shared/constants';
import { AuthService, AuthValidators } from '..';

@Component({
  selector: 'app-auth',
  templateUrl: './auth-component.html',
  styleUrls: ['./auth.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AuthComponent {
  message: null | string = null;
  private builder = inject(NonNullableFormBuilder);
  private authService = inject(AuthService);
  private changeDetector = inject(ChangeDetectorRef);

  form = this.createForm();
  emailNotFocused = false;
  passwordNotFocused = false;
  isPasswordVisible = false;

  private createForm() {
    return this.builder.group({
      email: this.builder.control('', {
        validators: [Validators.required, AuthValidators.email],
      }),
      password: this.builder.control('', {
        validators: [Validators.required],
      }),
      rememberMe: this.builder.control(true),
    });
  }

  get emailCtrl() {
    return this.form.controls.email;
  }
  get passwordCtrl() {
    return this.form.controls.password;
  }

  getEmailErrorMessage() {
    if (this.emailCtrl.hasError('required')) {
      return 'Email jest wymagany';
    }
    return this.emailCtrl.hasError('email') ? this.emailCtrl.getError('email') : '';
  }

  togglePasswordVisibility() {
    this.isPasswordVisible = !this.isPasswordVisible;
  }

  login() {
    this.form.markAllAsTouched();
    if (this.form.valid) {
      this.authService.login(this.form.getRawValue()).subscribe({
        next: loginDto => this.authService.loginSuccess(loginDto),

        error: () => {
          this.form.controls.email.setErrors({
            authenticationError: MESSAGES.AUTHENTICATION_FAILED,
          });
          this.form.controls.password.setErrors({
            authenticationError: MESSAGES.AUTHENTICATION_FAILED,
          });
          this.changeDetector.detectChanges();
        },
      });
    }
  }
}
