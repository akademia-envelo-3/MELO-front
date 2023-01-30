import { ChangeDetectionStrategy, Component, EventEmitter, Output } from '@angular/core';

import { ClickOutsideDirective } from '@shared/directives/clickOutside.directive';
import { MenuState } from '../filter-search-button.component';

@Component({
  selector: 'app-unit-dropdown-component',
  standalone: true,
  imports: [ClickOutsideDirective],
  templateUrl: './unit-dropdown.component.html',
  styleUrls: ['../filter-search-button.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UnitDropdownComponent {
  @Output() newMenuState = new EventEmitter<MenuState>();
  state = { creationDate: '', startDate: '', dateSort: '', nameSort: '' };

  protected toggleFiltrRadio(input: HTMLInputElement) {
    this.state = { ...this.state, [input.name]: input.value };
    this.newMenuState.emit(this.state);

    return (input.checked = !input.checked);
  }
  protected toggleSortRadio(input: HTMLInputElement) {
    const adjustedKey = `${input.id.split('-')[0]}Sort`;

    this.state = { ...this.state, [adjustedKey]: input.value };
    this.newMenuState.emit(this.state);
  }
}
