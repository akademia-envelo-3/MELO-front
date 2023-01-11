import { ChangeDetectionStrategy, Component } from "@angular/core";

@Component({
  selector: "app-power-icon",
  standalone: true,
  templateUrl: "power-button.html",
  styleUrls: ["./power-button.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PowerIconComponent {
  amountOfPeople = 100;
  limitOfPeople = 100;
}
