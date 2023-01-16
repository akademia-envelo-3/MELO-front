import { Component } from '@angular/core';
import { FormResultViewComponent, FormResultInfo } from '@shared/ui';

@Component({
  selector: 'app-theme',
  imports: [FormResultViewComponent],
  standalone: true,
  template: `
    <h1>Storybook-like route</h1>
    <div class="rectangular-buttons-container bg-gradient-neutral-3">
      <p class="text-body-big">Rectangular Buttons</p>
      <div class="rectangular-buttons-container__btns">
        <div>
          <p>Default</p>
          <button class="btn-rect btn-default">Default</button>
        </div>
        <div>
          <p>Disabled</p>
          <button class="btn-rect btn-default" disabled>Default</button>
        </div>
        <div>
          <p>Default small</p>
          <button class="btn-rect btn-rect--sm btn-default">Small</button>
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

    <h2>Widok komunikatu po wysłaniu formularza</h2>
    <app-form-result-view [formResultInfo]="formResultInfo">
      <img src="../../../assets/form-result-icons/confirm-icon.svg" alt="" />
      <button>-></button>
    </app-form-result-view>
  `,
  styleUrls: ['theme.component.scss'],
})
export default class ThemeComponent {
  formResultInfo: FormResultInfo = {
    messageHeader: 'Pomyślnie utworzono koło zainteresowań “Nazwa koła”.',
    messageCallToAction: 'Przejdź do strony utworzonego koła',
  };
}
