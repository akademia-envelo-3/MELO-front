import { Component } from "@angular/core";
import { UiModule } from "../features/ui";

@Component({
  selector: "app-theme",
  imports: [UiModule],
  standalone: true,
  template: `
    <h1>Storybook-like route</h1>
    <app-searchbar></app-searchbar>
  `,
})
export default class ThemeComponent {}
