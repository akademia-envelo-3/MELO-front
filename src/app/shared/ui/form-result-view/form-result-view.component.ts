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
  routerLink: string;
};

const formResultInfoDefault: FormResultInfo = {
  messageHeader: '',
  resultState: 'success',
  routerLink: '',
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
    <div mat-dialog-content id="dialog-container">
      <div class="form-result-view-container">
        <div mat-dialog-actions>
          <button
            mat-button
            mat-dialog-close
            class="form-result-view-container__close-btn"
          >
            <mat-icon fontIcon="close"></mat-icon>
          </button>
        </div>
        <p class="text-body">
          {{ formResultInfo.messageHeader }}
        </p>
        <img image [src]="src" alt="" />
        <p class="text-body" *ngIf="formResultInfo.messageCallToAction">
          {{ formResultInfo.messageCallToAction }}
        </p>
        <app-circular-button
          mat-dialog-close
          [icon]="iconRef"
          size="sm"
          [routerLink]="formResultInfo.routerLink"
        ></app-circular-button>
      </div>
    </div>
  `,
  styleUrls: ['./form-result-view-component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FormResultViewComponent {
  @Input() formResultInfo: FormResultInfo = formResultInfoDefault;
  @Input() routerLink?: string;
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
