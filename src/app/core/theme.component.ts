import { Component } from "@angular/core";
import {
  DefaultBtnComponent,
  DefaultBtnConfig,
} from "@shared/ui/buttons/default-btn.component";

@Component({
  selector: "app-theme",
  standalone: true,
  imports: [DefaultBtnComponent],
  template: `
    <h1>Storybook-like route</h1>
    <app-default-btn [config]="config"></app-default-btn>
  `,
})
export default class ThemeComponent {
  config: DefaultBtnConfig = {
    text: "Więcej",
    type: "button",
    disabled: true,
  };
}
