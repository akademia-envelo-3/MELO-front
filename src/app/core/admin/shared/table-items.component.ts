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
  templateUrl: `table-items.component.html`,
  styles: [
    `
      .items-container {
        display: flex;
        flex-direction: column;
        align-items: center;
        max-width: 80%;
        margin-inline: auto;
      }

      .table {
        border-radius: 10px;
        margin: 30px 10px;
      }
      tr:nth-of-type(odd):not(.mat-mdc-header-row) {
        background: blue;
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TableItemsComponent {
  @Input() itemsData!: CdkTableDataSourceInput<Category | Hashtag>;
  displayedColumns: string[] = ['no', 'name', 'isVisible', 'edit'];
}
