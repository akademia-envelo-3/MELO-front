import { NgModule } from '@angular/core';
import { NgClass, NgIf } from '@angular/common';
import { UnitFormComponent } from './unit-form/unit-form.component';
import { CircularButtonComponent } from '@shared/ui/circular-button/circular-button.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { UnitPowerIconComponent } from './card/power-icon/unit-power-icon';

@NgModule({
  declarations: [UnitFormComponent, UnitPowerIconComponent],
  imports: [
    CircularButtonComponent,
    NgIf,
    NgClass,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    RouterModule.forChild([
      {
        path: 'new-unit',
        component: UnitFormComponent,
      },
    ]),
  ],
  exports: [UnitPowerIconComponent],
})
export default class UnitModule {}
