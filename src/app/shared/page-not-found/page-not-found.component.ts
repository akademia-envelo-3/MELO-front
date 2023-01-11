import { ChangeDetectionStrategy, Component, inject } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  standalone: true,
  selector: "app-page-not-found",
  template: `
    <div class=" pnf-container">
      <h1 class=" pnf-container__header text-h2">Strona której szukasz nie istnieje</h1>
      <div class="pnf-container__img-container">
        <img class="rounded-3xl" src="../assets/panda-page-not-found.PNG" />
      </div>
      <div>
        <p class=" pnf-container__text text-body-big">Wróć do strony głównej</p>
        <button (click)="navigateToHomepage()"><-</button>
      </div>
    </div>
  `,
  styleUrls: ["./page-not-found.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class PageNotFoundComponent {
  router = inject(Router);

  navigateToHomepage() {
    this.router.navigate([""]);
  }
}
