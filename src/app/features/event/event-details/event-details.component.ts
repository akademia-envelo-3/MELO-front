import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EventApiService } from '..';

@Component({
  selector: 'app-event-details',
  templateUrl: './event-details.component.html',
  styleUrls: ['./event-details.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EventDetailsComponent {
  private eventApiService = inject(EventApiService);
  private route = inject(ActivatedRoute);

  vm$ = this.eventApiService.fetchEventDetails(this.route.snapshot.params['id']);
}
