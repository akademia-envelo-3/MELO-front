import { Component } from "@angular/core";
import { PowerIconComponent } from "../shared/ui/power-icon/power-icon.component";

@Component({
  selector: "app-theme",
  standalone: true,
  imports: [PowerIconComponent],
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
  `,
})
export default class ThemeComponent {}
