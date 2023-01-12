import { Component } from '@angular/core';

@Component({
  selector: 'app-theme',
  standalone: true,
  imports: [],
  template: `
    <h1>Storybook-like route</h1>
    <div class="rect-btns-container">
      <p class="text-body-big">Rectangle Buttons</p>
      <div class="rect-btns-container__btns">
        <div>
          <p>Default</p>
          <button class="btn-rect btn-default">Default</button>
        </div>
        <div>
          <p>Disabled</p>
          <button class="btn-rect btn-default" disabled>Default</button>
        </div>
        <div>
          <p>Black</p>
          <button class="btn-rect btn-black">Black</button>
        </div>
        <div>
          <p>Black disabled</p>
          <button class="btn-rect btn-black" disabled>Black</button>
        </div>
        <div>
          <p>Green</p>
          <button class="btn-rect btn-green">Green</button>
        </div>
        <div>
          <p>Green disabled</p>
          <button class="btn-rect btn-green" disabled>Green</button>
        </div>
      </div>
    </div>
  `,
  styleUrls: ['theme.component.scss'],
})
export default class ThemeComponent {}
