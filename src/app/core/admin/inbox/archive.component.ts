import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-archive',
  template: `
    <p>
      archive works!
    </p>
  `,
  styles: [
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ArchiveComponent {

}
