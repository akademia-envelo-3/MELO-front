import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'app-notifications-quantity',
  template: `
    <div class="circle">
      <ng-content class="number"></ng-content>
    </div>
  `,
  styles: [
    '.circle{ width: 30px; height: 30px; border-radius: 50%;border: 1px solid #5E4139; background-color: #211E1D; display: flex; justify-content: center; align-items: center;font-size: 16px; color: #EAD63D; font-family: eczar, sans-serif}',
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NotificationsQuantityComponent {}
