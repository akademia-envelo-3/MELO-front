import { inject, Injectable } from '@angular/core';
import {
  MatSnackBar,
  MatSnackBarHorizontalPosition,
  MatSnackBarVerticalPosition,
} from '@angular/material/snack-bar';

type SnackBarOptions = {
  duration: number;
  horizontalPosition: MatSnackBarHorizontalPosition;
  verticalPosition: MatSnackBarVerticalPosition;
  panelClass: PanelClass;
};

type CloseAction = 'Zamknij' | 'X';
type PanelClass = 'red-snackbar'[] | 'green-snackbar'[];

const defaultSnackBarOptions: SnackBarOptions = {
  duration: 3000,
  horizontalPosition: 'center',
  verticalPosition: 'top',
  panelClass: ['red-snackbar'],
};
const defaultSnackBarAction: CloseAction = 'Zamknij';

@Injectable({
  providedIn: 'root',
})
export class SnackBarService {
  private snackBar = inject(MatSnackBar);

  open(message: string, config?: Partial<SnackBarOptions>, action?: CloseAction) {
    this.snackBar.open(message, action ? action : defaultSnackBarAction, {
      ...defaultSnackBarOptions,
      ...config,
    });
  }
}
