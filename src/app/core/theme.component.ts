import { Component } from '@angular/core';
import {
  PowerIconComponent,
  SpinnerDotsComponent,
  CircularButtonComponent,
  FormResultViewComponent,
  FormResultInfo,
} from '@shared/ui';
import { FilterSearchButtonComponent } from '@features/ui';
@Component({
  selector: 'app-theme',
  imports: [
    CircularButtonComponent,
    PowerIconComponent,
    SpinnerDotsComponent,
    FormResultViewComponent,
    CircularButtonComponent,
    FilterSearchButtonComponent,
  ],
  standalone: true,
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

    <div class="circular-buttons-container bg-gradient-neutral-3">
      <h2>Widok komunikatu po wysłaniu formularza</h2>
      <app-form-result-view [formResultInfo]="formResultInfo">
        <img image src="../../../assets/form-result-icons/confirm-icon.svg" alt="" />
        <app-circular-button button icon="arrow_back" size="sm"></app-circular-button>
      </app-form-result-view>
    </div>

    <div class="power-icon__wrapper bg-gradient-neutral-3">
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

    <div class="circular-buttons-container bg-gradient-neutral-3">
      <h2>Widok komunikatu po wysłaniu formularza</h2>
      <app-form-result-view [formResultInfo]="formResultInfo">
        <img image src="../../../assets/form-result-icons/confirm-icon.svg" alt="" />
        <app-circular-button button icon="arrow_back" size="sm"></app-circular-button>
      </app-form-result-view>
    </div>

    <div class="power-icon__wrapper bg-gradient-neutral-3">
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

    <div class="filtr-search-btn---wrapper bg-gradient-neutral-3">
      <app-filter-search-button [menuType]="'units'"></app-filter-search-button>
      <app-filter-search-button [menuType]="'events'"></app-filter-search-button>
    </div>
  `,
  styleUrls: ['theme.component.scss'],
})
export default class ThemeComponent {
  formResultInfo: FormResultInfo = {
    messageHeader: 'Pomyślnie utworzono koło zainteresowań “Nazwa koła”.',
    messageCallToAction: 'Przejdź do strony utworzonego koła',
  };
}
