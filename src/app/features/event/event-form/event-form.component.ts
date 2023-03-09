import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { NonNullableFormBuilder, Validators } from '@angular/forms';
import { STEPPER_GLOBAL_OPTIONS } from '@angular/cdk/stepper';

const EVENT_TYPES = {
  PUBLIC: 'Publiczne',
  PRIVATE: 'Prywatny',
  INTERNAL: 'Wewnętrzny',
  EXTERNAL: 'Zewnętrzny',
  LIMITED: 'Limitowany',
  UNLIMITED: 'Nielimitowany',
  PERIODIC: 'Cykliczny',
  'ONE-TIME': 'Jednorazowy',
};

@Component({
  selector: 'app-event-form',
  templateUrl: 'event-form.component.html',
  styleUrls: ['event-form.component.scss'],
  providers: [
    {
      provide: STEPPER_GLOBAL_OPTIONS,
      useValue: { showError: true },
    },
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EventFormComponent {
  private builder = inject(NonNullableFormBuilder);
  eventTypes = EVENT_TYPES;

  /// form is not complete, just a basic version to apply in stepper
  newEventForm = this.builder.group({
    eventType: this.builder.group({
      eventAccessType: this.builder.control(EVENT_TYPES.PUBLIC, Validators.required),
      eventScopeType: this.builder.control(EVENT_TYPES.INTERNAL, Validators.required),
      eventLimitType: this.builder.control(EVENT_TYPES.UNLIMITED, Validators.required),
      eventRepeatType: this.builder.control(EVENT_TYPES['ONE-TIME'], Validators.required),
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

  constructor() {
    this.newEventForm.valueChanges.subscribe(console.log);
  }
  get eventType() {
    return this.newEventForm.controls.eventType;
  }

  get eventTypeControls() {
    return this.newEventForm.controls.eventType.controls;
  }

  get eventDetails() {
    return this.newEventForm.controls.eventDetails;
  }
  get eventAdditionalInfo() {
    return this.newEventForm.controls.eventAdditionalInfo;
  }
}
