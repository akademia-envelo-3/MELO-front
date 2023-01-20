import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-filter-search-button',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './filter-search-button.component.html',
  styleUrls: ['./filter-search-button.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FilterSearchButtonComponent {}
