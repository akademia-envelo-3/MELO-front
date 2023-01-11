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
    <div class="rect-btns-container">
      <p class="text-body-big">Rectangle Buttons</p>
      <div class="rect-btns-container__btns">
        <div>
          <p>Default</p>
          <app-default-btn [config]="config1"></app-default-btn>
        </div>
        <div>
          <p>Disabled</p>
          <app-default-btn [config]="config2"></app-default-btn>
        </div>
      </div>
    </div>
  `,
  styleUrls: ["theme.component.scss"],
})
export default class ThemeComponent {
  config1: DefaultBtnConfig = {
    text: "Default",
  };
  config2: DefaultBtnConfig = {
    text: "Disabled",
    disabled: true,
  };
}
