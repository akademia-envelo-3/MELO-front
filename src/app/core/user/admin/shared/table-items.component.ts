import { CdkTableDataSourceInput } from '@angular/cdk/table';
import { NgClass } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { Category } from '../categories/Category.interface';
import { Hashtag } from '../hashtags/hashtag.interface';

@Component({
  selector: 'app-table-items[itemsData]',
  standalone: true,
  imports: [NgClass, MatTableModule, MatIconModule],
  templateUrl: 'table-items.component.html',
  styleUrls: ['table-items.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TableItemsComponent {
  @Input() itemsData!: CdkTableDataSourceInput<Category | Hashtag>;
  displayedColumns: string[] = ['no', 'name', 'isVisible', 'edit'];
}
