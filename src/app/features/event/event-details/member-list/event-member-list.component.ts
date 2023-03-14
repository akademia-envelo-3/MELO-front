import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Employee } from '../..';

@Component({
  selector: 'app-event-members[members][organizerId]',
  templateUrl: './event-member-list.component.html',
  styleUrls: ['./event-member-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EventMemberListComponent {
  @Input() members!: Employee[];
  @Input() organizerId!: string;
}
