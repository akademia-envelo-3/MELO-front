import { ChangeDetectionStrategy, Component, inject, OnInit } from '@angular/core';
import { FormControl, NonNullableFormBuilder, Validators } from '@angular/forms';
import { ThemePalette } from '@angular/material/core';
// [ngStyle]="unitForm.controls.unitName.valid ? color : 'accent'"
@Component({
  selector: 'app-unit-form',
  template: `
    <form [formGroup]="unitForm" (ngSubmit)="onSubmit()" class="bg-gradient-neutral-3">
      <mat-form-field appearance="outline">
        <mat-label>Nazwa koła</mat-label>
        <input
          matInput
          type="text"
          formControlName="unitName"
          (blur)="setToSessionStrage('unitName', unitForm.controls.unitName.value)"
          (ngClass)="(unitForm.controls.unitName.valid ? 'successStyle' : '')"
        />
        <mat-error *ngIf="unitForm.controls.unitName.hasError('required')">
          Pole nazwa koła jest wymagane </mat-error
        ><mat-error *ngIf="unitForm.controls.unitName.hasError('maxlength')">
          Maksymalna dopuszczalna ilość znaków to 255 </mat-error
        ><mat-hint style="color:green" *ngIf="unitForm.controls.unitName.valid">
          Wprowadzono poprawną wartość
        </mat-hint>
      </mat-form-field>
      <mat-form-field appearance="outline" class="textarea-form-field">
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
        ><mat-hint style="color:green" *ngIf="unitForm.controls.unitDescription.valid">
          Wprowadzono poprawną wartość
        </mat-hint>
      </mat-form-field>

      <button class="btn-rect btn-black" type="submit">Utwórz</button>
    </form>
  `,
  styles: [
    `
      form {
        margin-top: 4rem;
        color: black;
        display: flex;
        flex-direction: column;
        border-radius: 25px;
        padding: 2rem;
        align-items: center;
        width: clamp(280px, 85vw, 520px);
      }
      :host {
        display: block;
        padding-top: 4rem;
        display: flex;
        align-items: center;
        flex-direction: column;
      }
      .mat-mdc-text-field-wrapper {
        margin-bottom: 1.75rem;
      }
      .textarea-form-field {
        min-height: clamp(260px, 80vw, 480px);
      }
      textarea {
        min-height: clamp(220px, 80vw - 20px, 460px);
      }
      button {
        margin-top: 1rem;
      }

      .successStyle {
        caret-color: green;
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UnitFormComponent implements OnInit {
  private builder = inject(NonNullableFormBuilder);
  // colorControl = new FormControl('accent' as ThemePalette);

  ngOnInit() {
    this.getFormValuesFromSessionStorage();
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
}
