import { NgModule } from '@angular/core';
import { CommonModule, NgClass, NgFor, NgIf, UpperCasePipe } from '@angular/common';
import { CircularButtonComponent } from '@shared/ui/circular-button/circular-button.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { UnitPowerIconComponent, UnitCardComponent, UnitFormComponent } from '.';

@NgModule({
  declarations: [UnitFormComponent, UnitPowerIconComponent, UnitCardComponent],
  imports: [
    CircularButtonComponent,
    UpperCasePipe,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    MatFormFieldModule,
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
