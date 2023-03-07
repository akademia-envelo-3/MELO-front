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
    config = {
      duration: 3000,
      action: 'Zamknij',
      horizontalPosition: this.horizontalPosition,
      verticalPosition: this.verticalPosition,
      panelClass: ['red-snackbar'],
    }
  ) {
    this.snackBar.open(message, config.action, {
      duration: config.duration,
      horizontalPosition: config.horizontalPosition,
      verticalPosition: config.verticalPosition,
      panelClass: config.panelClass,
    });
  }
}
