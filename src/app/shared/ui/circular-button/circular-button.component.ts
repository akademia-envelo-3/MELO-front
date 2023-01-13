import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

type IconOptions = 'done' | 'close' | 'arrow_back' | 'arrow_forward';
type sizeOption = 'sm' | 'md' | 'lg' | 'xl';

@Component({
  selector: 'app-circular-button',
  standalone: true,
  imports: [MatIconModule, CommonModule],
  templateUrl: 'circular-button.html',
  styleUrls: ['./circular-button.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CircularButtonComponent {
  @Input() icon?: IconOptions;
  @Input() size?: sizeOption;

  @Output() clickButton = new EventEmitter<void>();

  get sizeClass() {
    return 'size-' + this.size;
  }
}
