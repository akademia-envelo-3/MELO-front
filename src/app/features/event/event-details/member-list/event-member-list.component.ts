import { Location } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Employee } from '../..';

@Component({
  selector: 'app-event-members[members][organizerId]',
  templateUrl: './event-member-list.component.html',
  styleUrls: ['./event-member-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EventMemberList {
  @Input() members!: Employee[];
  @Input() organizerId!: string;
}
