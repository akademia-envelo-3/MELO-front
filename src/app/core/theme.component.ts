import { Component } from '@angular/core';
import { PowerIconComponent } from '@shared/ui';

@Component({
  selector: 'app-theme',
  standalone: true,
  imports: [PowerIconComponent],
  template: `
    <h1>Storybook-like route</h1>
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

    <div class="power-icon__wrapper bg-gradient-neutral-3">
      <p>Power Icons</p>

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
export default class ThemeComponent {}
