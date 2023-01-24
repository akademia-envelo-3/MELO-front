import { NgClass, NgIf } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';

import { ClickOutsideDirective } from '@shared/directives/clickOutside.directive';
import { EventDropdownComponent } from './dropdown/event-dropdown.component';
import { UnitDropdownComponent } from './dropdown/unit-dropdown.component';

export type MenuState = {
  creationDate: string;
  startDate: string;
  dateSort: string;
  nameSort: string;
};
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
  isOpen = false;
  @Input() menuType!: MenuType;
  @Output() emmitPickedOptions = new EventEmitter<MenuState>();

  getPickedOptions(menuState: MenuState) {
    console.log(menuState);
    this.emmitPickedOptions.emit(menuState);
  }
  hideDropdown() {
    this.isOpen = false;
  }
  toggleDropdown() {
    this.isOpen = !this.isOpen;
  }
}
