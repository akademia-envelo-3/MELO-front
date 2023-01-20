import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { NonNullableFormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
@Component({
  selector: 'app-filter-search-button',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './filter-search-button.component.html',
  styleUrls: ['./filter-search-button.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FilterSearchButtonComponent {
  private fb = inject(NonNullableFormBuilder);

  filtrSortForm = this.fb.group({
    creationDate: ['', Validators.required],
    startDate: ['', Validators.required],
    timeToStartSort: ['', Validators.required],
    creationDateSort: ['', Validators.required],
  });

  toggle(radioProp: HTMLInputElement) {
    // console.log(radioProp);
    // return (radioProp.checked = !radioProp.checked);
  }
}
