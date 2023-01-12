import { Component } from "@angular/core";
import { RectangularBtnComponent } from "@shared/ui/buttons/";

@Component({
  selector: "app-theme",
  standalone: true,
  imports: [RectangularBtnComponent],
  template: `
    <h1>Storybook-like route</h1>
    <div class="rect-btns-container">
      <p class="text-body-big">Rectangle Buttons</p>
      <div class="rect-btns-container__btns">
        <div>
          <p>Default</p>
          <app-default-btn text="Default"></app-default-btn>
        </div>
        <div>
          <p>Disabled</p>
          <app-default-btn text="Disabled" [disabled]="true"></app-default-btn>
        </div>
        <div>
          <p>Black</p>
          <app-default-btn text="Black" class="btn-black"></app-default-btn>
        </div>
        <div>
          <p>Black disabled</p>
          <app-default-btn
            text="Black"
            class="btn-black"
            [disabled]="true"
          ></app-default-btn>
        </div>
        <div>
          <p>Green</p>
          <app-default-btn text="Default" class="btn-green"></app-default-btn>
        </div>
        <div>
          <p>Green disabled</p>
          <app-default-btn
            text="Default"
            class="btn-green"
            [disabled]="true"
          ></app-default-btn>
        </div>
      </div>
    </div>
  `,
  styleUrls: ["theme.component.scss"],
})
export default class ThemeComponent {}
