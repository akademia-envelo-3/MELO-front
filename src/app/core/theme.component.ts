import { Component } from '@angular/core';
import { SearchbarComponent, SearchResult } from '../features/ui';

@Component({
  selector: 'app-theme',
  standalone: true,
  imports: [SearchbarComponent],
  template: `
    <h1>Storybook-like route</h1>
    <app-searchbar [searchResults]="searchResults"></app-searchbar>
    <app-searchbar [searchResults]="searchResults" [typeOfEvent]="false"></app-searchbar>
  `,
})
export default class ThemeComponent {
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
  ];
}
