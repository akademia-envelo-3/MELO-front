import { ChangeDetectionStrategy, Component, EventEmitter, Output } from '@angular/core';

import { ClickOutsideDirective } from '@shared/directives/clickOutside.directive';
import { MenuState } from '..';

@Component({
  selector: 'app-event-dropdown-component',
  standalone: true,
  imports: [ClickOutsideDirective],
  templateUrl: './event-dropdown.component.html',
  styleUrls: ['../filter-search-button.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EventDropdownComponent {
  state = { creationDate: '', startDate: '', dateSort: '', nameSort: '' };
  @Output() newMenuState = new EventEmitter<MenuState>();

  protected toggleFilterRadio(input: HTMLInputElement) {
    this.state = { ...this.state, [input.name]: input.value };
    this.newMenuState.emit(this.state);
    return (input.checked = !input.checked);
  }
  protected toggleSortRadio(input: HTMLInputElement) {
    const adjustedKey = `${input.id.split('-')[0]}Sort`;

    this.state = { ...this.state, [adjustedKey]: input.value };
    this.newMenuState.emit(this.state);
  }

  protected setRadioValue(input: HTMLInputElement, value: ''): string {
    return input.checked ? value : '';
  }
}
