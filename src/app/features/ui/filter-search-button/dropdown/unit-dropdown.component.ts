import { ChangeDetectionStrategy, Component, EventEmitter, Output } from '@angular/core';

import { ClickOutsideDirective } from '@shared/directives/clickOutside.directive';
import { UnitMenuState } from '../filter-seatch-button.interface';

@Component({
  selector: 'app-unit-dropdown-component',
  standalone: true,
  imports: [ClickOutsideDirective],
  templateUrl: './unit-dropdown.component.html',
  styleUrls: ['../filter-search-button.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UnitDropdownComponent {
  @Output() newMenuState = new EventEmitter<UnitMenuState>();
  state = { dateSort: '', nameSort: '' };

  protected toggleSortRadio(input: HTMLInputElement) {
    const adjustedKey = `${input.id.split('-')[0]}Sort`;

    this.state = { ...this.state, [adjustedKey]: input.value };
    this.newMenuState.emit(this.state);
  }
}
