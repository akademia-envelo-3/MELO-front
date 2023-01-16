import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import { MatIconModule } from "@angular/material/icon";
import { NgIf, NgClass } from "@angular/common";

type SizeOptions = "sm" | "md" | "lg" | "xl";
type ThemeOptions = "primary" | "secondary" | "teriarty";
@Component({
  selector: "app-power-icon",
  standalone: true,
  imports: [MatIconModule, NgIf, NgClass],
  templateUrl: "power-icon.html",
  styleUrls: ["./power-icon.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PowerIconComponent {
  @Input() amountOfPeople = 0;
  @Input() limitOfPeople?: number;
  @Input() size: SizeOptions = "md";
  @Input() theme: ThemeOptions = "primary";

  get sizeClass() {
    return "size-" + this.size;
  }

  get themeClass() {
    return "theme-" + this.theme;
  }
}
