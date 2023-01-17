import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { NonNullableFormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-unit-form',
  template: `
    <form [formGroup]="unitForm" (ngSubmit)="onSubmit()" class="bg-gradient-neutral-3">
      <mat-form-field appearance="outline">
        <mat-label>Nazwa koła</mat-label>
        <input matInput type="text" formControlName="unitName" />
        <mat-error *ngIf="unitForm.controls['unitName'].hasError('required')">
          Pole nazwa koła jest wymagane </mat-error
        ><mat-error *ngIf="unitForm.controls['unitName'].hasError('maxlength')">
          Maksymalna dopuszczalna ilość znaków to 255
        </mat-error>
      </mat-form-field>
      <mat-form-field appearance="outline" class="textarea-form-field">
        <mat-label class="indLabel">Opis</mat-label>
        <textarea
          matInput
          formControlName="unitDescription"
          cdkTextareaAutosize
          cdkAutosizeMinRows="5"
        ></textarea>
        <mat-error *ngIf="unitForm.controls['unitDescription'].hasError('required')">
          Pole opis koła jest wymagane </mat-error
        ><mat-error *ngIf="unitForm.controls['unitDescription'].hasError('maxlength')">
          Maksymalna dopuszczalna ilość znaków to 4000
        </mat-error>
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
        max-width: 500px;
        border-radius: 25px;
        padding: 2rem;
        align-items: center;
      }
      :host {
        display: block;
        padding-top: 4rem;
      }
      .mat-mdc-form-field {
        margin-bottom: 2rem;
      }
      .textarea-form-field {
        height: 400px;
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
    console.log('submitted!');
  }
}
