/* eslint-disable @typescript-eslint/no-empty-function */
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { NgIf } from '@angular/common';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-radio-button[groupName][id][label]',
  standalone: true,
  imports: [NgIf],
  template: ` <button (click)="toggle()" class="radio-rect">
    <input
      [name]="groupName"
      type="radio"
      [value]="label"
      [ariaLabel]="ariaLabel"
      [id]="id"
      [checked]="isChecked"
    />
    <label [for]="id">{{ label }}</label>
  </button>`,
  styles: [
    `
      .radio-rect {
        font-family: 'Eczar', sans-serif;
        font-weight: 600;
        color: colors.$neutral-900;
        border-radius: 25px;
        font-size: 18px;
        width: 170px;
        padding: 5px 0;
        height: 40px;
        border: none;
        outline: none;
        @extend .bg-gradient-neutral-2;
        position: relative;
        box-shadow: 0 0 0 0.0625rem #46423e, 0 0 0 0.125rem #484441,
          0 0 0 0.1875rem #655f5b, 0 0 0 0.25rem #3b3937, 0 0 0 0.3125rem #3e3e3c,
          0 0 0 0.375rem #2a2323;
      }

      .radio-rect > input {
        all: unset;
      }

      .radio-rect > label {
        position: absolute;
        border-radius: 25px;
        cursor: pointer;
        line-height: 40px;
        inset: 0;
      }

      .radio-rect:has(input:checked) {
        background: linear-gradient(
          283.96deg,
          #a86c2d 3.84%,
          rgba(254, 235, 87, 0.88) 49.33%,
          #bf7b30 96.92%
        );
      }
    `,
  ],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      multi: true,
      useExisting: RadioButtonComponent,
    },
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RadioButtonComponent implements ControlValueAccessor {
  @Input() groupName!: string;
  @Input() id!: string;
  @Input() label!: string;
  @Input() isChecked = false;
  @Input() ariaLabel = '';
  touched = false;

  onChange = (label: string) => {};
  onTouched = () => {};

  markAsTouched() {
    if (!this.touched) {
      this.onTouched();
      this.touched = true;
    }
  }

  writeValue(isChecked: boolean) {
    this.isChecked = isChecked;
  }

  toggle() {
    this.markAsTouched();
    this.onChange(this.label);
  }

  registerOnChange(onChange: () => void) {
    this.onChange = onChange;
  }

  registerOnTouched(onTouched: () => void) {
    this.onTouched = onTouched;
  }
}
