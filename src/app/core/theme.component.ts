import { Component } from '@angular/core';
import { SearchbarComponent, SearchResult } from '../features/ui';
import { PowerIconComponent } from '@shared/ui';
import { SpinnerDotsComponent } from '@shared/index';
import { CircularButtonComponent } from '@shared/ui/circular-button/circular-button.component';

@Component({
  selector: 'app-theme',
  standalone: true,
  imports: [
    CircularButtonComponent,
    PowerIconComponent,
    SpinnerDotsComponent,
    SearchbarComponent,
  ],
  template: `
    <h1>Storybook-like route</h1>
    <div class="circular-buttons-container bg-gradient-neutral-3">
      <p class="text-h4">Spinner Dots</p>
      <app-spinner-dots size="md"></app-spinner-dots>
    </div>
    <div class="circular-buttons-container bg-gradient-neutral-3">
      <p class="text-h4">Circular Buttons</p>
      <div class="circular-buttons-container__btns">
        <div class="circular-buttons-container__btn">
          <p>Small size</p>
          <app-circular-button size="sm" textSize="sm"></app-circular-button>
        </div>
        <div class="circular-buttons-container__btn">
          <p>Medium size</p>
          <app-circular-button size="md"></app-circular-button>
        </div>
        <div class="circular-buttons-container__btn">
          <p>Large size</p>
          <app-circular-button size="lg"></app-circular-button>
        </div>
        <div class="circular-buttons-container__btn">
          <p>Extra large</p>
          <app-circular-button size="xl"></app-circular-button>
        </div>
        <div class="circular-buttons-container__btn">
          <p>Small done</p>
          <app-circular-button icon="done" size="sm"></app-circular-button>
        </div>
        <div class="circular-buttons-container__btn">
          <p>Medium done</p>
          <app-circular-button icon="done" size="md"></app-circular-button>
        </div>
        <div class="circular-buttons-container__btn">
          <p>Large done</p>
          <app-circular-button icon="done" size="lg"></app-circular-button>
        </div>
        <div class="circular-buttons-container__btn">
          <p>Extra large done</p>
          <app-circular-button icon="done" size="xl"></app-circular-button>
        </div>
        <div class="circular-buttons-container__btn">
          <p>Small close</p>
          <app-circular-button icon="close" size="sm"></app-circular-button>
        </div>
        <div class="circular-buttons-container__btn">
          <p>Medium close</p>
          <app-circular-button icon="close" size="md"></app-circular-button>
        </div>
        <div class="circular-buttons-container__btn">
          <p>Large close</p>
          <app-circular-button icon="close" size="lg"></app-circular-button>
        </div>
        <div class="circular-buttons-container__btn">
          <p>Extra large close</p>
          <app-circular-button icon="close" size="xl"></app-circular-button>
        </div>
        <div class="circular-buttons-container__btn">
          <p>Small back</p>
          <app-circular-button icon="arrow_back" size="sm"></app-circular-button>
        </div>
        <div class="circular-buttons-container__btn">
          <p>Medium back</p>
          <app-circular-button icon="arrow_back" size="md"></app-circular-button>
        </div>
        <div class="circular-buttons-container__btn">
          <p>Large close</p>
          <app-circular-button icon="arrow_back" size="lg"></app-circular-button>
        </div>
        <div class="circular-buttons-container__btn">
          <p>Extra large close</p>
          <app-circular-button icon="arrow_back" size="xl"></app-circular-button>
        </div>
        <div class="circular-buttons-container__btn">
          <p>Small forward</p>
          <app-circular-button icon="arrow_forward" size="sm"></app-circular-button>
        </div>
        <div class="circular-buttons-container__btn">
          <p>Medium forward</p>
          <app-circular-button icon="arrow_forward" size="md"></app-circular-button>
        </div>
        <div class="circular-buttons-container__btn">
          <p>Large forward</p>
          <app-circular-button icon="arrow_forward" size="lg"></app-circular-button>
        </div>
        <div class="circular-buttons-container__btn">
          <p>Extra large</p>
          <app-circular-button icon="arrow_forward" size="xl"></app-circular-button>
        </div>
        <div class="circular-buttons-container__btn">
          <p>Small text</p>
          <app-circular-button text="click" size="sm" textSize="sm"></app-circular-button>
        </div>
        <div class="circular-buttons-container__btn">
          <p>Medium text</p>
          <app-circular-button text="click" size="md" textSize="md"></app-circular-button>
        </div>
        <div class="circular-buttons-container__btn">
          <p>Large text</p>
          <app-circular-button text="click" size="lg" textSize="lg"></app-circular-button>
        </div>
        <div class="circular-buttons-container__btn">
          <p>Extra large text</p>
          <app-circular-button text="click" size="xl" textSize="xl"></app-circular-button>
        </div>
        <div class="circular-buttons-container__btn">
          <p>Extra extra large text</p>
          <app-circular-button text="click" size="xl" textSize="xl"></app-circular-button>
        </div>
      </div>
    </div>

    <div class="rectangular-buttons-container bg-gradient-neutral-3">
      <p class="text-h4">Rectangular Buttons</p>
      <div class="rectangular-buttons-container__btns">
        <div>
          <p>Default</p>
          <button class="btn-rect btn-default">Default</button>
        </div>
        <div>
          <p>Disabled</p>
          <button class="btn-rect btn-default" disabled>Default</button>
        </div>
        <div>
          <p>Default small</p>
          <button class="btn-rect btn-rect--sm btn-default">Small</button>
        </div>
        <div>
          <p>Black</p>
          <button class="btn-rect btn-black">Black</button>
        </div>
        <div>
          <p>Black disabled</p>
          <button class="btn-rect btn-black" disabled>Black</button>
        </div>
        <div>
          <p>Green</p>
          <button class="btn-rect btn-green">Green</button>
        </div>
        <div>
          <p>Green disabled</p>
          <button class="btn-rect btn-green" disabled>Green</button>
        </div>
      </div>
    </div>

    <div class="rectangular-buttons-container bg-gradient-neutral-3">
      <h2>Widok komponentu wyszukiwania dla wydarzeń</h2>
      <app-searchbar [searchResults]="searchResults"></app-searchbar>
      <h2>Widok komponentu wyszukiwania dla kół</h2>
      <app-searchbar
        [searchResults]="searchResults"
        [typeOfEvent]="false"
      ></app-searchbar>
    </div>

    <div class="rectangular-buttons-container bg-gradient-neutral-3">
      <p class="text-h4">Power Icons</p>
      <div class="power-icon__wrapper__inner">
        <app-power-icon
          [memberNumber]="40"
          [memberLimit]="50"
          size="xl"
          theme="primary"
        ></app-power-icon>
        <app-power-icon
          [memberNumber]="40"
          [memberLimit]="50"
          size="lg"
          theme="primary"
        ></app-power-icon>
        <app-power-icon
          [memberNumber]="40"
          [memberLimit]="50"
          size="md"
          theme="primary"
        ></app-power-icon>
        <app-power-icon
          [memberNumber]="40"
          [memberLimit]="50"
          size="sm"
          theme="primary"
        ></app-power-icon>
      </div>
      <div class="power-icon__wrapper__inner">
        <app-power-icon [memberNumber]="40" size="xl" theme="primary"></app-power-icon>
        <app-power-icon [memberNumber]="40" size="lg" theme="primary"></app-power-icon>
        <app-power-icon [memberNumber]="40" size="md" theme="primary"></app-power-icon>
        <app-power-icon [memberNumber]="40" size="sm" theme="primary"></app-power-icon>
      </div>
      <div class="power-icon__wrapper__inner">
        <app-power-icon [memberNumber]="400" size="xl" theme="primary"></app-power-icon>
        <app-power-icon [memberNumber]="400" size="lg" theme="primary"></app-power-icon>
        <app-power-icon [memberNumber]="400" size="md" theme="primary"></app-power-icon>
        <app-power-icon [memberNumber]="400" size="sm" theme="primary"></app-power-icon>
      </div>
      <div class="power-icon__wrapper__inner">
        <app-power-icon
          [memberNumber]="40"
          [memberLimit]="50"
          size="xl"
          theme="secondary"
        ></app-power-icon>
        <app-power-icon
          [memberNumber]="40"
          [memberLimit]="50"
          size="lg"
          theme="teriarty"
        ></app-power-icon>
        <app-power-icon
          [memberNumber]="40"
          [memberLimit]="50"
          size="md"
          theme="secondary"
        ></app-power-icon>
        <app-power-icon
          [memberNumber]="40"
          [memberLimit]="50"
          size="sm"
          theme="teriarty"
        ></app-power-icon>
      </div>
    </div>
  `,
  styleUrls: ['theme.component.scss'],
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
}
