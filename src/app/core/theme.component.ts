import { Component } from '@angular/core';
import { CircularButtonComponent } from '@shared/ui/circular-button/circular-button.component';
import { FilterSearchButtonComponent } from '../features/ui/filter-search-button/filter-search-button.component';

@Component({
  selector: 'app-theme',
  standalone: true,

  imports: [CircularButtonComponent, FilterSearchButtonComponent],
  template: `
    <h1>Storybook-like route</h1>

    <div
      style="border: 1px solid white; padding: 20px; display: flex; justify-content: space-around"
    >
      <p style="text-align; color: white">Circular Buttons</p>
      <hr />
      <app-circular-button size="sm" textSize="sm"></app-circular-button>
      <app-circular-button size="md"></app-circular-button>
      <app-circular-button size="lg"></app-circular-button>
      <app-circular-button size="xl"></app-circular-button>
      <app-circular-button icon="done" size="sm"></app-circular-button>
      <app-circular-button icon="done" size="md"></app-circular-button>
      <app-circular-button icon="done" size="lg"></app-circular-button>
      <app-circular-button icon="done" size="xl"></app-circular-button>
      <app-circular-button icon="close" size="sm"></app-circular-button>
      <app-circular-button icon="close" size="md"></app-circular-button>
      <app-circular-button icon="close" size="lg"></app-circular-button>
      <app-circular-button icon="close" size="xl"></app-circular-button>
      <app-circular-button icon="arrow_back" size="sm"></app-circular-button>
      <app-circular-button icon="arrow_back" size="md"></app-circular-button>
      <app-circular-button icon="arrow_back" size="lg"></app-circular-button>
      <app-circular-button icon="arrow_back" size="xl"></app-circular-button>
      <app-circular-button icon="arrow_forward" size="sm"></app-circular-button>
      <app-circular-button icon="arrow_forward" size="md"></app-circular-button>
      <app-circular-button icon="arrow_forward" size="lg"></app-circular-button>
      <app-circular-button icon="arrow_forward" size="xl"></app-circular-button>
      <app-circular-button text="click" size="sm" textSize="sm"></app-circular-button>
      <app-circular-button text="click" size="md" textSize="md"></app-circular-button>
      <app-circular-button text="click" size="lg" textSize="lg"></app-circular-button>
      <app-circular-button text="click" size="xl" textSize="xl"></app-circular-button>
      <app-circular-button text="click" size="xl" textSize="xxl"></app-circular-button>
    </div>

    <div class="rectangular-buttons-container bg-gradient-neutral-3">
      <p class="text-body-big">Rectangular Buttons</p>
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
    <app-filter-search-button></app-filter-search-button>
  `,
  styleUrls: ['theme.component.scss'],
})
export default class ThemeComponent {}
