import { NgModule } from '@angular/core';
import { CommonModule, UpperCasePipe } from '@angular/common';
import { CircularButtonComponent } from '@shared/ui/circular-button/circular-button.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { UnitPowerIconComponent, UnitCardComponent, UnitFormComponent } from '.';
import { MatDialogModule } from '@angular/material/dialog';
import { SpinnerDotsComponent } from '@shared/ui';

@NgModule({
  declarations: [UnitFormComponent, UnitPowerIconComponent, UnitCardComponent],
  imports: [
    CircularButtonComponent,
    UpperCasePipe,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    MatFormFieldModule,
    MatDialogModule,
    SpinnerDotsComponent,
    ReactiveFormsModule,
    CommonModule,
    RouterModule.forChild([
      {
        path: 'new-unit',
        component: UnitFormComponent,
      },
    ]),
  ],
  exports: [UnitPowerIconComponent, UnitCardComponent],
})
export default class UnitModule {}
