import {
  ChangeDetectionStrategy,
  Component,
  inject,
  OnInit,
  ViewChild,
} from '@angular/core';
import { NonNullableFormBuilder, Validators } from '@angular/forms';
import { MatFormField } from '@angular/material/form-field';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-unit-form',
  template: `
    <h1 class="text-h1">Utwórz koło zainteresowań</h1>
    <form [formGroup]="unitForm" (ngSubmit)="onSubmit()" class="bg-gradient-neutral-3">
      <mat-form-field appearance="outline" #inputForminputMatField>
        <mat-label>Nazwa koła</mat-label>
        <input
          matInput
          type="text"
          formControlName="unitName"
          (blur)="setToSessionStrage('unitName', unitForm.controls.unitName.value)"
          (ngClass)="(unitForm.controls.unitName.valid ? 'successStyle' : '')"
        />
        <mat-error *ngIf="unitForm.controls.unitName.hasError('required')"
          ><mat-icon>info</mat-icon> Pole nazwa koła jest wymagane </mat-error
        ><mat-error *ngIf="unitForm.controls.unitName.hasError('maxlength')"
          ><mat-icon>info</mat-icon> Maksymalna dopuszczalna ilość znaków to 255 </mat-error
        ><mat-hint class="accent-color" *ngIf="unitForm.controls.unitName.valid"
          ><mat-icon fontIcon="done_outline"></mat-icon>
        </mat-hint>
      </mat-form-field>
      <mat-form-field appearance="outline" class="textarea-form-field" #textareaMatField>
        <mat-label>Opis</mat-label>
        <textarea
          matInput
          formControlName="unitDescription"
          (blur)="
            setToSessionStrage('uniDescription', unitForm.controls.unitDescription.value)
          "
        ></textarea>
        <mat-error *ngIf="unitForm.controls.unitDescription.hasError('required')">
          Pole opis koła jest wymagane </mat-error
        ><mat-error *ngIf="unitForm.controls.unitDescription.hasError('maxlength')">
          Maksymalna dopuszczalna ilość znaków to 4000 </mat-error
        ><mat-hint class="accent-color" *ngIf="unitForm.controls.unitDescription.valid">
          <mat-icon fontIcon="done_outline"></mat-icon>
        </mat-hint>
      </mat-form-field>
      <button class="btn-rect btn-black" type="submit" [disabled]="unitForm.invalid">
        Utwórz
      </button>
    </form>
  `,
  styleUrls: ['unit-form.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UnitFormComponent implements OnInit {
  @ViewChild('inputForminputMatField', { static: true })
  inputForminputMatField!: MatFormField;
  @ViewChild('textareaMatField', { static: true }) textareaMatField!: MatFormField;
  private builder = inject(NonNullableFormBuilder);
  private subscriptions = new Subscription();

  ngOnInit() {
    this.getFormValuesFromSessionStorage();
    this.applyAccentColorOnValid();
  }

  unitForm = this.builder.group({
    unitName: this.builder.control('', {
      validators: [Validators.required, Validators.maxLength(255)],
    }),
    unitDescription: this.builder.control('', {
      validators: [Validators.required, Validators.maxLength(4000)],
    }),
  });

  onSubmit(): void {
    this.unitForm.markAllAsTouched();
    ///todo in next task: validate if unitName exist, send form and userId to backend, navigate to confirmation page
    sessionStorage.clear();
  }

  setToSessionStrage(name: string, value: string) {
    if (sessionStorage[name] !== value && value.length > 0) {
      sessionStorage.setItem(name, value);
    }
  }

  private getFormValuesFromSessionStorage() {
    if (sessionStorage.length > 0) {
      const unitName = sessionStorage.getItem('unitName');
      const unitDescription = sessionStorage.getItem('unitDescription');
      if (unitName) {
        this.unitForm.controls.unitName.setValue(unitName);
      }
      if (unitDescription) {
        this.unitForm.controls.unitDescription.setValue(unitDescription);
      }
    }
  }

  private applyAccentColorOnValid() {
    if (this.unitForm.controls.unitName.valid) {
      this.inputForminputMatField.color = 'accent';
    }
    if (this.unitForm.controls.unitDescription.valid) {
      this.textareaMatField.color = 'accent';
    }

    const inputSub = this.unitForm.controls.unitName.statusChanges.subscribe(() => {
      if (this.unitForm.controls.unitName.valid) {
        this.inputForminputMatField.color = 'accent';
      } else {
        this.inputForminputMatField.color = 'primary';
      }
    });
    const textareaSub = this.unitForm.controls.unitDescription.statusChanges.subscribe(
      () => {
        if (this.unitForm.controls.unitDescription.valid) {
          this.textareaMatField.color = 'accent';
        } else {
          this.textareaMatField.color = 'primary';
        }
      }
    );
    this.subscriptions.add(inputSub);
    this.subscriptions.add(textareaSub);
  }

  ngOnDestroy() {
    this.subscriptions.unsubscribe();
  }
}
