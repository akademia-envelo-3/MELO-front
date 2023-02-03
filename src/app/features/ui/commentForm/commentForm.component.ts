import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-comment',
  template: `
    <p>
      comment works!
    </p>
  `,
  styles: [
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CommentComponent {

}
