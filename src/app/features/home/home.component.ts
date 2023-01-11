import { ChangeDetectionStrategy, Component } from "@angular/core";
import { RouterOutlet } from "@angular/router";
import { MatInputModule } from "@angular/material/input";

@Component({
  selector: "app-home",
  standalone: true,
  imports: [RouterOutlet, MatInputModule],
  template: ` <router-outlet></router-outlet> `,
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeComponent {}
