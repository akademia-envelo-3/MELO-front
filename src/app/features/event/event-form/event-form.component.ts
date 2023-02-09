import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { FormGroup, NonNullableFormBuilder, Validators } from '@angular/forms';
import { map, Observable } from 'rxjs';

@Component({
  selector: 'app-event-form',
  templateUrl: 'event-form.component.html',
  styleUrls: ['event-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EventFormComponent {
  private builder = inject(NonNullableFormBuilder);
  newEventForm = this.builder.group({
    eventType: this.builder.group({
      eventAccessType: this.builder.control('Publiczne', Validators.required),
      eventScopeType: this.builder.control('Wewnętrzne', Validators.required),
      eventLimitType: this.builder.control('Nielimitowane', Validators.required),
      eventRepeatType: this.builder.control('Nielimitowane', Validators.required),
    }),
    eventDateTimeAndLocation: this.builder.group({
      eventDateTimeFrom: this.builder.control('', Validators.required),
      eventDateTimeTo: this.builder.control('', Validators.required),
      eventLocation: this.builder.control('', Validators.required),
    }),
  });

  get eventTypeForm() {
    return this.newEventForm.get('eventType') as FormGroup;
  }

  get eventDateTimeAndLocationForm() {
    return this.newEventForm.get('eventDateTimeAndLocation') as FormGroup;
  }
}
