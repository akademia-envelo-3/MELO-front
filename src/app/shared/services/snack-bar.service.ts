import { inject, Injectable } from '@angular/core';
import {
  MatSnackBar,
  MatSnackBarHorizontalPosition,
  MatSnackBarVerticalPosition,
} from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root',
})
export class SnackBarService {
  private snackBar = inject(MatSnackBar);
  private horizontalPosition: MatSnackBarHorizontalPosition = 'center';
  private verticalPosition: MatSnackBarVerticalPosition = 'top';

  openSnackBar(
    message: string,
    duration = 3000,
    action = 'Zamknij',
    horizontalPosition = this.horizontalPosition,
    verticalPosition = this.verticalPosition,
    panelClass = ['red-snackbar']
  ) {
    this.snackBar.open(message, action, {
      duration,
      horizontalPosition,
      verticalPosition,
      panelClass,
    });
  }
}
