import { Component } from '@angular/core';
import {
  PowerIconComponent,
  SpinnerDotsComponent,
  CircularButtonComponent,
  FormResultViewComponent,
  FormResultInfo,
} from '@shared/ui';
import { NgIf, NgClass } from '@angular/common';

@Component({
  selector: 'app-theme',
  imports: [
    CircularButtonComponent,
    PowerIconComponent,
    SpinnerDotsComponent,
    FormResultViewComponent,
    NgClass,
  ],
  standalone: true,
  template: `
    <h1>Storybook-like route</h1>
    <div class="circular-buttons-container bg-gradient-neutral-3">
      <div
        class="hamburger"
        [ngClass]="{ change: this.menuActive }"
        (click)="toggleMenuIcon()"
      >
        <div class="bar1"></div>
        <div class="bar2"></div>
        <div class="bar3"></div>
      </div>
    </div>
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
    </div>
  `,
  styleUrls: ['theme.component.scss'],
})
export default class ThemeComponent {
  formResultInfo: FormResultInfo = {
    messageHeader: 'Pomyślnie utworzono koło zainteresowań “Nazwa koła”.',
    messageCallToAction: 'Przejdź do strony utworzonego koła',
  };

  menuActive = false;
  toggleMenuIcon() {
    this.menuActive = !this.menuActive;
  }
}
