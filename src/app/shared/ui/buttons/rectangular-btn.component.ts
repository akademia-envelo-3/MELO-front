import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
} from "@angular/core";

@Component({
  standalone: true,
  selector: "app-default-btn",
  template: `
    <button
      class="btn-rect"
      [class]="class"
      [disabled]="disabled"
      [type]="type"
      (click)="onClick()"
    >
      <span class="border-1 btn-border">
        <span class="border-2 btn-border"
          ><span class="border-3 btn-border"
            ><span class="border-4 btn-border">
              <span class="border-5 btn-border"
                ><span class="border-6 btn-border"
                  ><span class="border-7 btn-border"
                    ><span class="border-8 btn-border"
                      ><span class="border-9 btn-border">
                        {{ text }}
                      </span></span
                    ></span
                  ></span
                ></span
              ></span
            ></span
          ></span
        >
      </span>
    </button>
  `,
  styleUrls: ["buttons.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RectangularBtnComponent {
  @Input() text = "";
  @Input() class?: string;
  @Input() type?: "button" | "submit" | "reset";
  @Input() routerLink?: string;
  @Input() disabled = false;

  @Output() newItemEvent = new EventEmitter();

  onClick() {
    this.newItemEvent.emit();
  }
}
