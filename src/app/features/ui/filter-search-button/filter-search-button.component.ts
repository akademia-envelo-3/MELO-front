import { NgClass, NgIf } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';

import { ClickOutsideDirective } from '@shared/directives/clickOutside.directive';
import {
  EventDropdownComponent,
  UnitDropdownComponent,
  EventMenuState,
  FiltrSortButtonOutput,
  UnitMenuState,
} from '.';

export type MenuType = 'events' | 'units';
@Component({
  selector: 'app-filter-search-button[menuType]',
  standalone: true,
  imports: [
    NgIf,
    NgClass,
    ClickOutsideDirective,
    EventDropdownComponent,
    UnitDropdownComponent,
  ],
  templateUrl: './filter-search-button.component.html',
  styleUrls: ['./filter-search-button.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FilterSearchButtonComponent {
  @Output() emmitPickedOptions = new EventEmitter<FiltrSortButtonOutput<MenuType>>();
  @Input() menuType!: MenuType;
  isOpen = true;

  updateMenuState(menuState: UnitMenuState | EventMenuState) {
    this.emmitPickedOptions.emit(menuState);
  }

  hideDropdown() {
    this.isOpen = false;
  }

  toggleDropdown() {
    this.isOpen = !this.isOpen;
  }
}
