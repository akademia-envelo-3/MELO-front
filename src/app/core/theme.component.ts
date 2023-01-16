import { Component } from "@angular/core";
import { PowerIconComponent } from "../shared/ui/power-icon/power-icon.component";

@Component({
  selector: "app-theme",
  standalone: true,
  imports: [PowerIconComponent],
  template: `
    <h1>Storybook-like route</h1>
    <div
      style="display: flex; align-items: center; justify-content: space-around; border: 1px solid white; padding: 50px;"
    >
      <p>power-icon</p>

      <app-power-icon size="sm" theme="primary" [amountOfPeople]="21"></app-power-icon>
      <app-power-icon size="md" theme="secondary" [amountOfPeople]="21"></app-power-icon>
      <app-power-icon size="lg" theme="teriarty" [amountOfPeople]="21"></app-power-icon>
      <app-power-icon size="xl" theme="primary"></app-power-icon>
      <app-power-icon
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
    </div>
  `,
})
export default class ThemeComponent {}
