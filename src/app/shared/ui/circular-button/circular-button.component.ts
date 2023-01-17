import { NgIf, NgClass } from '@angular/common';
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
type textSizeOption = 'sm' | 'md' | 'lg' | 'xl' | 'xxl';

@Component({
  selector: 'app-circular-button',
  standalone: true,
  imports: [MatIconModule, NgClass, NgIf],
  templateUrl: 'circular-button.html',
  styleUrls: ['./circular-button.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CircularButtonComponent {
  @Input() icon?: IconOptions;
  @Input() size: sizeOption = 'md';
  @Input() text?: string = 'Dołącz';
  @Input() textSize?: textSizeOption = 'md';

  @Output() clickButton = new EventEmitter<void>();

  get sizeClass() {
    return 'size-' + this.size;
  }
  get textSizeClass() {
    return 'textSize-' + this.textSize;
  }
}
