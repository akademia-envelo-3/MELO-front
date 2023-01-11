import { Component } from "@angular/core";
import { PowerIconComponent } from "../shared/ui/power-icon/power-icon.component";

@Component({
  selector: "app-theme",
  standalone: true,
  imports: [PowerIconComponent],
  template: `
    <h1>Storybook-like route</h1>
    <p>power-icon</p>
    <app-power-icon class="theme-primary"></app-power-icon>
    <app-power-icon class="theme-secondary"></app-power-icon>
    <app-power-icon class="theme-teriarty"></app-power-icon>
  `,
})
export default class ThemeComponent {}
