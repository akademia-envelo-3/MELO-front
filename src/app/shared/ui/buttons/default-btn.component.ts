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
  template: `
    <button
      class="btn-default btn-rect bg-gradient-gold-1"
      [disabled]="config.disabled"
      [type]="config.type"
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
                        {{ config.text }}
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
