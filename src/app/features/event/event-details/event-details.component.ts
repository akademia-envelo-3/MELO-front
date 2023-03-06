import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EventDetailsDTO, EventApiService } from '..';

@Component({
  selector: 'app-event-details',
  templateUrl: './event-details.component.html',
  styleUrls: ['./event-details.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EventDetailsComponent {
  // event: EventDetailsDTO = EVENT_MOCK;
  private eventApiService = inject(EventApiService);
  private route = inject(ActivatedRoute);

  vm$ = this.eventApiService.fetchEventDetails(this.route.snapshot.params['id']);
}

// const EVENT_MOCK: EventDetailsDTO =  {
//   name:
// }
