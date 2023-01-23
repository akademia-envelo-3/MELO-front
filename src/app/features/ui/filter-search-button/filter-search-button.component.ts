import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-filter-search-button',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './filter-search-button.component.html',
  styleUrls: ['./filter-search-button.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FilterSearchButtonComponent {
  state = { creationDate: '', startDate: '', dateSort: '', nameSort: '' };

  protected toggleFiltrRadio(input: HTMLInputElement) {
    this.state = { ...this.state, [input.name]: input.value };
    return (input.checked = !input.checked);
  }
  protected toggleSortRadio(input: HTMLInputElement) {
    const adjustedKey = `${input.id.split('-')[0]}Sort`;
    this.state = { ...this.state, [adjustedKey]: input.value };
  }
}
