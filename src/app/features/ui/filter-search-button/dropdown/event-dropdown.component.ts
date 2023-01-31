import { ChangeDetectionStrategy, Component, EventEmitter, Output } from '@angular/core';

import { ClickOutsideDirective } from '@shared/directives/clickOutside.directive';
import { EventMenuState } from '..';

@Component({
  selector: 'app-event-dropdown-component',
  standalone: true,
  imports: [ClickOutsideDirective],
  templateUrl: './event-dropdown.component.html',
  styleUrls: ['../filter-search-button.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EventDropdownComponent {
  @Output() newMenuState = new EventEmitter<EventMenuState>();
  state = { creationDate: '', startDate: '', dateSort: '', nameSort: '' };

  protected toggleFilterRadio(input: HTMLInputElement) {
    this.state = { ...this.state, [input.name]: input.value };
    console.log(this.state);
    this.newMenuState.emit(this.state);
    return (input.checked = !input.checked);
  }
  protected toggleSortRadio(input: HTMLInputElement) {
    const adjustedKey = `${input.id.split('-')[0]}Sort`;
    console.log(this.state);

    this.state = { ...this.state, [adjustedKey]: input.value };
    this.newMenuState.emit(this.state);
  }
}
