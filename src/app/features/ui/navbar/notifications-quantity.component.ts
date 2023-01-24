import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'app-notifications-quantity',
  template: `
    <div class="circle">
      <ng-content class="number"></ng-content>
    </div>
  `,
  styleUrls: ['./notifications-quantity.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NotificationsQuantityComponent {}
