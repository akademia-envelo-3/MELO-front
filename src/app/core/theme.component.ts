import { Component, inject } from '@angular/core';
import {
  SpinnerDotsComponent,
  CircularButtonComponent,
  FormResultViewComponent,
  FormResultInfo,
} from '@shared/ui';
import EventModule from '@features/event/event.module';
import { NgClass } from '@angular/common';
import {
  SearchbarComponent,
  SearchResult,
  FilterSearchButtonComponent,
} from '@features/ui';
import { EventCardDTO } from '@features/event';
import UnitModule from '../features/unit/unit.module';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { UnitCardDTO } from '@features/unit';
import { FiltrSortButtonOutput } from '@features/ui/filter-search-button';

@Component({
  selector: 'app-theme',
  imports: [
    CircularButtonComponent,
    EventModule,
    SpinnerDotsComponent,
    FormResultViewComponent,
    NgClass,
    UnitModule,
    SearchbarComponent,
    MatDialogModule,
    FilterSearchButtonComponent,
  ],
  templateUrl: 'theme.component.html',
  styleUrls: ['theme.component.scss'],
  standalone: true,
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
  eventSortFiltr(arg: FiltrSortButtonOutput<'units'>) {
    arg.nameSort;
    arg.dateSort;
  }

  unitSortFiltr(arg: FiltrSortButtonOutput<'events'>) {
    arg.nameSort;
    arg.creationDate;
    arg.startDate;
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
  cardExample: EventCardDTO = {
    eventId: 1,
    name: 'Event Title',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do',
    startTime: new Date(),
    invitedMembersNumber: 10,
    mainPhoto: 'assets/mock/beers.png',
    theme: 'purple',
    memberLimit: 50,
  };
  cardExample2: EventCardDTO = {
    eventId: 1,
    name: 'Event Title',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do',
    startTime: new Date(),
    invitedMembersNumber: 0,
    mainPhoto: 'assets/mock/beers.png',
    theme: 'white',
    memberLimit: undefined,
  };
  cardExample3: EventCardDTO = {
    eventId: 1,
    name: 'Event Title',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do',
    startTime: new Date(),
    invitedMembersNumber: 10,
    mainPhoto: 'assets/mock/beers.png',

    theme: 'blue',
    memberLimit: 99,
  };
  cardExample4: EventCardDTO = {
    eventId: 1,
    name: 'Event Title',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do',
    startTime: new Date(),
    invitedMembersNumber: 10,
    mainPhoto: 'assets/mock/beers.png',
    theme: 'brown',
    memberLimit: undefined,
  };

  unitCard: UnitCardDTO = {
    unitId: 1,
    name: 'Event Title asdsad sad sadas d asd asdsa  dasd ddasd sads a',
    memberNumber: 900,
    description:
      'Lorem asd asd dassa ipsum asds asds dass ads dass asd ad as dasd dasds dass asds asds dass dasd dass sas ass asds dasd ssadsa asds ass asds asd ads adsds asds  asds asds ass  sa ada ass ass ass dasd dass as dsa ss asds sas s asds sad sads asdsa as sas as  eqweqw dolor sit amet, asdas sdads  sasds sads sads consectetur sdqdasd asdas dsa adss asdsad sadsadasd sadas dsadasd sadsad sadsa adipiscing elit, sed do wqewqewq wqewq 132241 dfdfdsfdsfds qwewq qwewqe qwewqe wqewq eqwe qwee qwewqe qweq wqeqweq qweqw eqweqw wqe wqrwqer qfqcwqew ewqe wq',
    // 'Lorem ipsum dolor sit amet',
    mainPhoto: 'assets/mock/unit-main.webp',
  };
}
