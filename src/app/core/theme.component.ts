import { Component, inject } from '@angular/core';
import { SearchbarComponent, SearchResult } from '../features/ui';
import {
  PowerIconComponent,
  SpinnerDotsComponent,
  CircularButtonComponent,
  FormResultViewComponent,
  FormResultInfo,
} from '@shared/ui';
import { NgClass } from '@angular/common';
import UnitModule from '../features/unit/unit.module';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { Router } from '@angular/router';

@Component({
  selector: 'app-theme',
  imports: [
    CircularButtonComponent,
    PowerIconComponent,
    SpinnerDotsComponent,
    FormResultViewComponent,
    NgClass,
    UnitModule,
    SearchbarComponent,
    MatDialogModule,
  ],
  standalone: true,
  templateUrl: 'theme.component.html',
  styleUrls: ['theme.component.scss'],
})
export default class ThemeComponent {
  private dialog = inject(MatDialog);
  private routerUrl = inject(Router).url;
  private eventID = 1; // just to show redirect
  showAfterFormView(resultInfo: FormResultInfo) {
    const dialogRef = this.dialog.open(FormResultViewComponent);
    const instance = dialogRef.componentInstance;
    instance.formResultInfo = resultInfo;
  }
  searchResults: SearchResult[] = [
    {
      searchResultTitle: 'Znalezione wydarzenie',
      searchResultPhrase: 'Znaleziona fraza',
      searchResultImg:
        'https://cdn.pixabay.com/photo/2023/01/04/15/01/flower-7696955_1280.jpg',
    },
    {
      searchResultTitle: 'Znalezione wydarzenie 2',
      searchResultPhrase: 'Znaleziona fraza 2',
      searchResultImg: '',
    },
    {
      searchResultTitle: 'Znalezione wydarzenie 3',
      searchResultPhrase: 'Znaleziona fraza 3',
      searchResultImg:
        'https://cdn.pixabay.com/photo/2023/01/04/15/01/flower-7696955_1280.jpg',
    },
    {
      searchResultTitle: 'Znalezione wydarzenie 4',
      searchResultPhrase: 'Znaleziona fraza 4',
      searchResultImg: '',
    },
    {
      searchResultTitle: 'Znalezione wydarzenie 5',
      searchResultPhrase: 'Znaleziona fraza 5',
      searchResultImg:
        'https://cdn.pixabay.com/photo/2023/01/04/15/01/flower-7696955_1280.jpg',
    },
    {
      searchResultTitle: 'Znalezione wydarzenie 6',
      searchResultPhrase: 'Znaleziona fraza 6',
      searchResultImg: '',
    },
    {
      searchResultTitle: 'Znalezione wydarzenie 7',
      searchResultPhrase: 'Znaleziona fraza 7',
      searchResultImg:
        'https://cdn.pixabay.com/photo/2023/01/04/15/01/flower-7696955_1280.jpg',
    },
    {
      searchResultTitle: 'Znalezione wydarzenie 8',
      searchResultPhrase: 'Znaleziona fraza 8',
      searchResultImg: '',
    },
  ];
  formResultInfoSuccess: FormResultInfo = {
    messageHeader: 'Pomyślnie utworzono koło zainteresowań “Nazwa koła”.',
    messageCallToAction: 'Przejdź do strony utworzonego koła',
    resultState: 'success',
    routerLink: '/events/' + this.eventID,
  };
  formResultInfoError: FormResultInfo = {
    messageHeader: 'Wysłanie formularza nie powiodło się, spróbuj ponownie',
    messageCallToAction: 'Wróć do formularza',
    resultState: 'error',
    routerLink: this.routerUrl,
  };

  menuActive = false;
  toggleMenuIcon() {
    this.menuActive = !this.menuActive;
  }
}
