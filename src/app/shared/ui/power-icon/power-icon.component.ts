import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import { MatIconModule } from "@angular/material/icon";
import { CommonModule } from "@angular/common";

@Component({
  selector: "app-power-icon",
  standalone: true,
  imports: [MatIconModule, CommonModule],
  templateUrl: "power-button.html",
  styleUrls: ["./power-button.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PowerIconComponent {
  @Input() amountOfPeople = 0;
  @Input() limitOfPeople: number | undefined;
  @Input() width = "70px";
  @Input() height = "70px";
  @Input() fontSize = "12px";
  @Input() iconFontSize = "24px";
}

// Do użycia 3 róznie wyglądające power-icons za pomoca class:
// -- class="theme-primary"
// -- class="theme-secondary
// -- class="theme-teriarty
