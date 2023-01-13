import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

export type FormResultInfo = {
  messageHeader: string;
  messageCallToAction?: string;
};

const formResultInfoDefault: FormResultInfo = {
  messageHeader: '',
};

@Component({
  selector: 'app-form-result-view',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="frv-container bg-gradient-neutral-3">
      <p class="text-body-big">
        {{ formResultInfo.messageHeader }}
      </p>
      <ng-content select="img"></ng-content>
      <p class="text-body-big" *ngIf="formResultInfo.messageCallToAction">
        {{ formResultInfo.messageCallToAction }}
      </p>
      <ng-content select="button"></ng-content>
    </div>
  `,
  styleUrls: ['./form-result-view-component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FormResultViewComponent {
  @Input() formResultInfo: FormResultInfo = formResultInfoDefault;
}
