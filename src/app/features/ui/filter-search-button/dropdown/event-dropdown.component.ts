import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { CdkMenuModule } from '@angular/cdk/menu';
import { ClickOutsideDirective } from '@shared/directives/clickOutside.directive';
@Component({
  selector: 'app-event-dropdown-component',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, CdkMenuModule, ClickOutsideDirective],
  templateUrl: './event-dropdown.component.html',
  styleUrls: ['../filter-search-button.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EventDropdownComponent {
  state = { creationDate: '', startDate: '', dateSort: '', nameSort: '' };

  protected toggleFiltrRadio(input: HTMLInputElement) {
    this.state = { ...this.state, [input.name]: input.value };
    console.log(this.state);

    return (input.checked = !input.checked);
  }
  protected toggleSortRadio(input: HTMLInputElement) {
    const adjustedKey = `${input.id.split('-')[0]}Sort`;
    console.log(this.state);

    this.state = { ...this.state, [adjustedKey]: input.value };
  }
}
