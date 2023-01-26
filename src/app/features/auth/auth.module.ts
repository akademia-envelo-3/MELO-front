import { NgIf } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { RouterModule } from '@angular/router';
import { AuthComponent } from './auth/auth.component';

@NgModule({
  declarations: [AuthComponent],
  imports: [
    ReactiveFormsModule,
    MatInputModule,
    MatIconModule,
    MatCheckboxModule,
    NgIf,
    RouterModule.forChild([
      {
        path: '',
        component: AuthComponent,
      },
    ]),
  ],
})
export default class AuthModule {}
