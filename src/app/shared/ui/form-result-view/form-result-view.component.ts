import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { NgIf } from '@angular/common';
import {
  CircularButtonComponent,
  IconOptionsRef,
} from '../circular-button/circular-button.component';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';

type ResultState = 'success' | 'error';

export type FormResultInfo = {
  messageHeader: string;
  messageCallToAction?: string;
  resultState: ResultState;
};

const formResultInfoDefault: FormResultInfo = {
  messageHeader: '',
  resultState: 'success',
};

@Component({
  selector: 'app-form-result-view[formResultInfo]',
  standalone: true,
  imports: [
    NgIf,
    CircularButtonComponent,
    MatIconModule,
    MatButtonModule,
    MatDialogModule,
  ],
  template: `
    <div mat-dialog-content class="bg-gradient-neutral-3">
      <div class="form-result-view-container">
        <div mat-dialog-actions>
          <button
            mat-button
            mat-dialog-close
            class="form-result-view-container_close-btn"
          >
            <mat-icon fontIcon="close"></mat-icon>
          </button>
        </div>
        <p class="text-body-big">
          {{ formResultInfo.messageHeader }}
        </p>
        <img image [src]="src" alt="" />
        <p class="text-body-big" *ngIf="formResultInfo.messageCallToAction">
          {{ formResultInfo.messageCallToAction }}
        </p>
        <app-circular-button icon="arrow_back" size="sm"></app-circular-button>
      </div>
    </div>
  `,
  styleUrls: ['./form-result-view-component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FormResultViewComponent {
  @Input() formResultInfo: FormResultInfo = formResultInfoDefault;
  src = '';
  iconRef: IconOptionsRef = 'arrow_back';

  ngOnInit() {
    this.setImgandIcon(this.formResultInfo.resultState);
  }

  private setImgandIcon(result: ResultState) {
    result === 'success'
      ? ((this.src = '../../../assets/form-result-icons/confirm-icon.svg'),
        (this.iconRef = 'arrow_forward'))
      : ((this.src = '../../../assets/form-result-icons/error-icon.svg'),
        (this.iconRef = 'arrow_back'));
  }
}
