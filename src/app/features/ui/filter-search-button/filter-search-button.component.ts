import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { NonNullableFormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';

interface Test extends Omit<HTMLInputElement, 'name'> {
  name: 'creationDate' | 'startDate' | 'timeToStart' | 'name';
}
@Component({
  selector: 'app-filter-search-button',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './filter-search-button.component.html',
  styleUrls: ['./filter-search-button.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FilterSearchButtonComponent {
  state = { creationDate: '', startDate: '', timeToStart: '', name: '' };
  private fb = inject(NonNullableFormBuilder);

  creationDates = [
    { name: 'creationDate', value: 'Dzisiaj', id: 'cd' },
    { name: 'creationDate', value: 'Ten tydzień', id: 'ct' },
    { name: 'creationDate', value: 'Ten miesiąc', id: 'cm' },
    { name: 'creationDate', value: 'Ten rok', id: 'cr' },
  ];
  startDates = [
    { name: 'startDate', value: 'Dzisiaj', id: 'sd' },
    { name: 'startDate', value: 'Ten tydzień', id: 'st' },
    { name: 'startDate', value: 'Ten miesiąc', id: 'sm' },
    { name: 'startDate', value: 'Ten rok', id: 'sr' },
  ];
  sortByDates = [
    { name: 'startDate', value: 'Rosnąco', id: 'sr' },
    { name: 'startDate', value: 'Malejąco', id: 'sm' },
  ];
  sortByNames = [
    { name: 'name', value: 'Rosnąco', id: 'nr' },
    { name: 'name', value: 'Malejąco', id: 'nm' },
  ];

  sortOptions = [{ name: 'creationDate', value: 'Dzisiaj', id: 'cd' }];
  filtrSortForm = this.fb.group({
    creationDate: [''],
    startDate: [''],
    timeToStartSort: [''],
    name: [''],
  });

  ngOnInit() {
    this.filtrSortForm.valueChanges.subscribe(console.log);
  }
  toggleRadio(input: HTMLInputElement) {
    // this.state = { ...this.state, [input.name]: input.value };
    console.log(this.state);

    return (input.checked = !input.checked);
  }
}
