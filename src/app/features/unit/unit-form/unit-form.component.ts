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
import { StorageService } from '@shared/services/';
import { Subscription } from 'rxjs';
import { UnitFormService } from './unit-form.service';
import { unitNameTakenValidator } from './unit-name-taken.validator';

@Component({
  selector: 'app-unit-form',
  templateUrl: 'unit-form.component.html',
  styleUrls: ['unit-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UnitFormComponent implements OnInit, OnDestroy {
  @ViewChild('inputMatFormField', { static: true })
  inputMatFormField!: MatFormField;
  @ViewChild('textMatFormField', { static: true }) textMatFormField!: MatFormField;

  private builder = inject(NonNullableFormBuilder);
  private storageService = inject(StorageService);
  private unitFormService = inject(UnitFormService);
  private subscriptions = new Subscription();
  unitForm = this.createUnitForm();

  ngOnInit() {
    this.applyAccentColorOnValid();
    this.setFormValuesFromStorage();
  }

  get unitNameCtrl() {
    return this.unitForm.controls.unitName;
  }
  get unitDescriptionCtrl() {
    return this.unitForm.controls.unitDescription;
  }

  onSetToStorage(itemKey: string, itemValue: string) {
    this.storageService.setToStorage(itemKey, itemValue);
  }

  onSubmit(): void {
    this.unitForm.markAllAsTouched();
    if (this.unitForm.valid) {
      sessionStorage.clear();
      this.unitFormService.sendNewUnitData(
        this.unitForm.value.unitName!,
        this.unitForm.value.unitDescription!
      );
    } else {
      this.unitFormService.showErrorSnackBar('Nieprawidłowo wypełniony formualarz');
    }
  }

  private createUnitForm() {
    return this.builder.group({
      unitName: this.builder.control('', {
        validators: [Validators.required, Validators.maxLength(255)],
        asyncValidators: [unitNameTakenValidator(this.unitFormService)],
        updateOn: 'blur',
      }),
      unitDescription: this.builder.control('', {
        validators: [Validators.required, Validators.maxLength(4000)],
      }),
    });
  }

  private setFormValuesFromStorage() {
    const unitNameValue = this.storageService.getValueFromStorage('unitName');
    const unitDescriptionValue =
      this.storageService.getValueFromStorage('unitDescription');

    if (unitNameValue) {
      this.unitNameCtrl.setValue(unitNameValue);
    }
    if (unitDescriptionValue) {
      this.unitDescriptionCtrl.setValue(unitDescriptionValue);
    }
  }

  private applyAccentColorOnValid() {
    this.unitNameCtrl.valid ? (this.inputMatFormField.color = 'accent') : 'primary';
    this.unitDescriptionCtrl.valid ? (this.textMatFormField.color = 'accent') : 'primary';

    const inputSub = this.changeColorOnStatusChange(
      this.unitNameCtrl,
      this.inputMatFormField
    );
    const textareaSub = this.changeColorOnStatusChange(
      this.unitDescriptionCtrl,
      this.textMatFormField
    );

    this.subscriptions.add(inputSub);
    this.subscriptions.add(textareaSub);
  }

  private changeColorOnStatusChange(
    controlName: FormControl<string>,
    matFieldName: MatFormField
  ) {
    return controlName.statusChanges.subscribe(() => {
      controlName.valid
        ? (matFieldName.color = 'accent')
        : (matFieldName.color = 'primary');
    });
  }

  ngOnDestroy() {
    this.subscriptions.unsubscribe();
  }
}
