import { Location } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EventApiService, EventDetailsStateService } from '..';

@Component({
  selector: 'app-event-details',
  templateUrl: './event-details.component.html',
  styleUrls: ['./event-details.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EventDetailsComponent {
  private eventApiService = inject(EventApiService);
  private eventDetailsService = inject(EventDetailsStateService);
  private route = inject(ActivatedRoute);
  private location = inject(Location);

  vm$ = this.eventApiService.fetchEventDetails(this.route.snapshot.params['id']);

  eventDetailsState$ = this.eventDetailsService.eventDetailsState$;

  redirectToPrevPage() {
    this.location.back();
  }
}
