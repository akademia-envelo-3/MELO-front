import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { FormGroup, NonNullableFormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-event-form',
  templateUrl: 'event-form.component.html',
  styleUrls: ['event-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EventFormComponent {
  private builder = inject(NonNullableFormBuilder);

  /// form is not complete, just a basic version to apply in stepper
  newEventForm = this.builder.group({
    eventType: this.builder.group({
      eventAccessType: this.builder.control('Publiczne', Validators.required),
      eventScopeType: this.builder.control('Wewnętrzne', Validators.required),
      eventLimitType: this.builder.control('Nielimitowane', Validators.required),
      eventRepeatType: this.builder.control('Nielimitowane', Validators.required),
    }),
    eventDetails: this.builder.group({
      eventName: this.builder.control('', Validators.required),
      eventDescription: this.builder.control('', Validators.required),
      eventDateTimeFrom: this.builder.control('', Validators.required),
      eventDateTimeTo: this.builder.control('', Validators.required),
      eventLocation: this.builder.control('', Validators.required),
    }),
    eventAdditionalInfo: this.builder.group({
      eventCategory: this.builder.control(''),
      eventHashtags: this.builder.control(''),
      eventPhoto: this.builder.control(''),
      eventCardBg: this.builder.control(''),
    }),
  });

  get eventTypeForm() {
    return this.newEventForm.get('eventType') as FormGroup;
  }

  get eventDetails() {
    return this.newEventForm.get('eventDetails') as FormGroup;
  }
  get eventAdditionalInfo() {
    return this.newEventForm.get('eventAdditionalInfo') as FormGroup;
  }

  onSubmit() {
    console.log(this.newEventForm.value);
  }
}
