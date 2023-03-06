import { HttpClient } from '@angular/common/http';
import { inject, Injectable, InjectionToken } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { SnackBarService } from '@shared/services/snack-bar.service';
import { FormResultInfo, FormResultViewComponent } from '@shared/ui';
import { catchError, throwError } from 'rxjs';
import { v4 as createUuidv4 } from 'uuid';

interface Unit {
  name: string;
  description: string;
  id: number;
}

@Injectable({
  providedIn: 'root',
})
export class UnitFormService {
  private http = inject(HttpClient);
  private routerUrl = inject(Router).url;
  private dialog = inject(MatDialog);
  private snackBarService = inject(SnackBarService);
  private newUnitID = createUuidv4(); /// z racji braku prawdziwego połączenia z backendem

  sendNewUnitData(name: string, description: string) {
    this.http
      .post<Unit>('/units', {
        name,
        description,
      })
      .pipe(
        catchError(error => {
          this.showAfterFormView(this.formResultInfoError);
          return throwError(() => new Error(error));
        })
      )
      .subscribe({
        next: () => {
          this.showAfterFormView(this.formResultInfoSuccess);
        },
      });
  }

  checkIfNameTaken(unitName: string) {
    return this.http.get<Unit[]>(`/units?name=${unitName}`);
  }

  showAfterFormView(resultInfo: FormResultInfo) {
    const dialogRef = this.dialog.open(FormResultViewComponent);
    const instance = dialogRef.componentInstance;
    instance.formResultInfo = resultInfo;
  }

  formResultInfoSuccess: FormResultInfo = {
    messageHeader: `Pomyślnie utworzono koło zainteresowań.`,
    messageCallToAction: 'Przejdź do strony utworzonego koła',
    resultState: 'success',
    routerLink: '/units/' + this.newUnitID,
  };
  formResultInfoError: FormResultInfo = {
    messageHeader: 'Wysłanie formularza nie powiodło się, spróbuj ponownie',
    messageCallToAction: 'Wróć do formularza',
    resultState: 'error',
    routerLink: this.routerUrl,
  };

  showErrorSnackBar(message: string) {
    this.snackBarService.openSnackBar(message);
  }
}
