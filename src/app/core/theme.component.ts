import { Component } from '@angular/core';
import { PowerIconComponent } from '@shared/ui';

@Component({
  selector: 'app-theme',
  standalone: true,
  imports: [PowerIconComponent],
  template: `
    <h1>Storybook-like route</h1>
    <!-- <div class="rectangular-buttons-container bg-gradient-neutral-3">
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
    </div> -->

    <p>power-icon</p>
    <app-power-icon [limitOfPeople]="30" size="xl" theme="teriarty"></app-power-icon>
    <!-- <app-power-icon size="md" theme="secondary" [amountOfPeople]="21"></app-power-icon> -->
    <!-- <app-power-icon size="lg" theme="teriarty" [amountOfPeople]="21"></app-power-icon>
      <app-power-icon size="xl" theme="primary"></app-power-icon> -->
    <!-- <app-power-icon
        size="sm"
        theme="primary"
        [amountOfPeople]="21"
        [limitOfPeople]="999"
      ></app-power-icon>
      <app-power-icon
        size="md"
        theme="secondary"
        [amountOfPeople]="21"
        [limitOfPeople]="999"
      ></app-power-icon>
      <app-power-icon
        size="lg"
        theme="teriarty"
        [amountOfPeople]="21"
        [limitOfPeople]="999"
      ></app-power-icon>
      <app-power-icon
        size="xl"
        theme="primary"
        [amountOfPeople]="21"
        [limitOfPeople]="999"
      ></app-power-icon>
      <app-power-icon
        size="sm"
        theme="primary"
        [amountOfPeople]="999"
        [limitOfPeople]="999"
      ></app-power-icon>
      <app-power-icon
        size="md"
        theme="secondary"
        [amountOfPeople]="999"
        [limitOfPeople]="999"
      ></app-power-icon>
      <app-power-icon
        size="lg"
        theme="teriarty"
        [amountOfPeople]="999"
        [limitOfPeople]="999"
      ></app-power-icon>
      <app-power-icon
        size="xl"
        theme="primary"
        [amountOfPeople]="999"
        [limitOfPeople]="999"
      ></app-power-icon>
    </div> -->
  `,
  styleUrls: ['theme.component.scss'],
})
export default class ThemeComponent {}
