import {
  ChangeDetectionStrategy,
  Component,
  inject,
  OnInit,
  OnDestroy,
} from '@angular/core';
import { NonNullableFormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { NgIf } from '@angular/common';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-auth',
  standalone: true,
  imports: [ReactiveFormsModule, MatInputModule, MatIconModule, MatCheckboxModule, NgIf],
  templateUrl: './auth-component.html',
  styleUrls: ['./auth.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AuthComponent implements OnInit, OnDestroy {
  builder = inject(NonNullableFormBuilder);
  form = this.createForm();
  emailNotFocused = false;
  passwordNotFocused = false;
  isFormValid = true;
  sub = new Subscription();

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

  getPasswordErrorMessage() {
    return 'To pole jest obowiązkowe';
  }

  ngOnInit(): void {
    this.sub = this.form.statusChanges.subscribe((status: string) => {
      if (status === 'INVALID') {
        this.onFormInvalid();
      } else if (status === 'VALID') {
        this.onFormValid();
      }
    });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  private onFormValid() {
    this.isFormValid = false;
  }
  private onFormInvalid() {
    this.isFormValid = true;
  }
}
