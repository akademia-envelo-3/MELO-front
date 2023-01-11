import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
} from "@angular/core";

export interface DefaultBtnConfig {
  text: string;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  routerLink?: string;
  emittedData?: any;
}

@Component({
  standalone: true,
  selector: "app-default-btn[config]",
  template: ` <ng-container *ngIf="config.routerLink"></ng-container
    ><button [disabled]="config.disabled" [type]="config.type" (click)="onClick()">
      {{ config.text }}
    </button>`,
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DefaultBtnComponent {
  @Input() config: DefaultBtnConfig = {
    text: "",
    disabled: false,
  };
  @Output() newItemEvent = new EventEmitter();

  onClick() {
    this.newItemEvent.emit();
  }
}
