import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { EventApiService } from '..';

@Component({
  selector: 'app-event-list',
  templateUrl: './event-list.component.html',
  styleUrls: ['./event-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EventListComponent {
  private eventAPiService = inject(EventApiService);

  get cardSize() {
    if (window.innerWidth > 400) {
      return 'md';
    }
    return 'sm';
  }

  vm$ = this.eventAPiService.fetchEventList();
}
