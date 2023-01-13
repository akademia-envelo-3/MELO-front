import { FormResultInfo } from './../shared/ui';
import { Component } from '@angular/core';
import { FormResultViewComponent } from '@shared/ui';

@Component({
  selector: 'app-theme',
  imports: [FormResultViewComponent],
  standalone: true,
  template: `
    <h1>Storybook-like route</h1>
    <app-form-result-view [formResultInfo]="formResultInfo">
      <img src="../../../assets/form-result-icons/confirm-icon.svg" alt="" />
      <button>-></button>
    </app-form-result-view>
  `,
})
export default class ThemeComponent {
  formResultInfo: FormResultInfo = {
    messageHeader: 'Pomyślnie utworzono koło zainteresowań “Nazwa koła”.',
    messageCallToAction: 'Przejdź do strony utworzonego koła',
  };
}
