import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-inbox',
  template: `
    <p>
      inbox works!
    </p>
  `,
  styles: [
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class InboxComponent {

}
