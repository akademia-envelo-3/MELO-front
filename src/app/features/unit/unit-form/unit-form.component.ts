import {
  ChangeDetectionStrategy,
  Component,
  inject,
  OnDestroy,
  OnInit,
  ViewChild,
} from '@angular/core';
import { FormControl, NonNullableFormBuilder, Validators } from '@angular/forms';
import { MatFormField } from '@angular/material/form-field';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-unit-form',
  templateUrl: 'unit-form.html',
  styleUrls: ['unit-form.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UnitFormComponent implements OnInit, OnDestroy {
  @ViewChild('inputMatFormField', { static: true })
  inputMatFormField!: MatFormField;
  @ViewChild('textMatFormField', { static: true }) textMatFormField!: MatFormField;

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
    const unitNameCtrl = this.unitForm.controls.unitName;
    const unitDescriptionCtrl = this.unitForm.controls.unitDescription;

    unitNameCtrl.valid ? (this.inputMatFormField.color = 'accent') : 'primary';
    unitDescriptionCtrl.valid ? (this.textMatFormField.color = 'accent') : 'primary';

    const inputSub = this.changeColorOnStatusChange(unitNameCtrl, this.inputMatFormField);
    const textareaSub = this.changeColorOnStatusChange(
      unitDescriptionCtrl,
      this.textMatFormField
    );

    this.subscriptions.add(inputSub);
    this.subscriptions.add(textareaSub);
  }

  private changeColorOnStatusChange(
    controlName: FormControl<string>,
    matFieldName: MatFormField
  ) {
    controlName.statusChanges.subscribe(() => {
      controlName.valid
        ? (matFieldName.color = 'accent')
        : (matFieldName.color = 'primary');
    });
  }

  ngOnDestroy() {
    this.subscriptions.unsubscribe();
  }
}
