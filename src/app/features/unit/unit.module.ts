import { NgModule } from '@angular/core';
import { NgIf, JsonPipe } from '@angular/common';
import { UnitFormComponent } from './unit-form/unit-form.component';
import { CircularButtonComponent } from '@shared/ui/circular-button/circular-button.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [UnitFormComponent],
  imports: [
    CircularButtonComponent,
    NgIf,
    JsonPipe,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    MatFormFieldModule,
    ReactiveFormsModule,
  ],
})
export class UnitModule {}
