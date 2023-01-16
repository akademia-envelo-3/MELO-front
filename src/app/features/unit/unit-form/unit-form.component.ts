import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { NonNullableFormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-unit-form',
  template: `<mat-form-field>
      <mat-label>Nazwa koła</mat-label>
      <input type="text" />
    </mat-form-field>

    <form [formGroup]="unitForm" (ngSubmit)="onSubmit()">
      <mat-form-field appearance="outline">
        <mat-label>Nazwa koła</mat-label>
        <input matInput type="text" formControlName="unitName" />
        <mat-error *ngIf="unitForm.controls['unitName'].hasError('required')">
          Pole nazwa koła jest wymagane </mat-error
        ><mat-error *ngIf="unitForm.controls['unitName'].hasError('maxlength')">
          Maksymalna dopuszczalna ilość znaków to 255
        </mat-error>
      </mat-form-field>
      <mat-form-field appearance="outline">
        <mat-label>Opis</mat-label>
        <textarea matInput formControlName="unitDescription"></textarea>
        <mat-error *ngIf="unitForm.controls['unitDescription'].hasError('required')">
          Pole opis koła jest wymagane </mat-error
        ><mat-error *ngIf="unitForm.controls['unitDescription'].hasError('maxlength')">
          Maksymalna dopuszczalna ilość znaków to 4000
        </mat-error>
      </mat-form-field>
      <mat-form-field><button type="submit">Submit</button></mat-form-field>
    </form> `,
  styles: [
    `
      form {
        margin-top: 4rem;
        color: black;
        display: flex;
        flex-direction: column;
      }
      :host {
        display: block;
        padding-top: 4rem;
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UnitFormComponent {
  private builder = inject(NonNullableFormBuilder);

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
    alert('Thanks!');
  }
}
