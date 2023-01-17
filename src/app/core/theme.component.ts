import { Component } from '@angular/core';
import { CircularButtonComponent } from '@shared/ui/circular-button/circular-button.component';

@Component({
  selector: 'app-theme',
  standalone: true,
  imports: [CircularButtonComponent],
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
  `,
})
export default class ThemeComponent {}
