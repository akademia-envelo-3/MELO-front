import { Component } from '@angular/core';
import { PowerIconComponent } from '../shared/ui/power-icon/power-icon.component';
import { CircularButtonComponent } from '@shared/ui/circular-button/circular-button.component';

@Component({
  selector: 'app-theme',
  standalone: true,
  imports: [PowerIconComponent, CircularButtonComponent],
  template: `
    <h1>Storybook-like route</h1>
    <p>power-icon</p>
    <app-power-icon class="theme-primary" [amountOfPeople]="21"></app-power-icon>
    <app-power-icon class="theme-secondary" [limitOfPeople]="999"></app-power-icon>
    <app-power-icon
      class="theme-teriarty"
      [amountOfPeople]="999"
      [limitOfPeople]="999"
    ></app-power-icon>
    <app-power-icon
      class="theme-teriarty"
      width="140px"
      height="140px"
      fontSize="24px"
      iconFontSize="50px"
      [amountOfPeople]="999"
      [limitOfPeople]="999"
    ></app-power-icon>
    <div
      style="border: 1px solid white; padding: 20px; display: flex; justify-content: space-around"
    >
      <p style="text-align; color: white">Circular Buttons</p>
      <hr />
      <app-circular-button size="sm">SM</app-circular-button>
      <app-circular-button size="md">MD</app-circular-button>
      <app-circular-button size="lg">LG</app-circular-button>
      <app-circular-button size="xl">XL</app-circular-button>
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
    </div>
  `,
})
export default class ThemeComponent {}
