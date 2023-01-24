import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { CdkMenuModule } from '@angular/cdk/menu';
import { ClickOutsideDirective } from '@shared/directives/clickOutside.directive';
import { EventDropdownComponent } from './dropdown/event-dropdown.component';
import { UnitDropdownComponent } from './dropdown/unit-dropdown.component';

export type MenuType = 'events' | 'units';
@Component({
  selector: 'app-filter-search-button[menuType]',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    CdkMenuModule,
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
  state = { creationDate: '', startDate: '', dateSort: '', nameSort: '' };

  hideDropdown() {
    this.isOpen = false;
  }
  toggleDropdown() {
    this.isOpen = !this.isOpen;
  }
}
