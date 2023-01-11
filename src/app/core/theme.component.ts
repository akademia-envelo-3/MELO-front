import { Component } from "@angular/core";
import { SearchbarComponent } from "../features/ui";

@Component({
  selector: "app-theme",
  standalone: true,
  imports: [SearchbarComponent],
  template: `
    <h1>Storybook-like route</h1>
    <app-searchbar></app-searchbar>
  `,
})
export default class ThemeComponent {}
