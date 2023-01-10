import { ChangeDetectionStrategy, Component } from "@angular/core";

@Component({
  standalone: true,
  selector: "app-page-not-found",
  template: `
    <div
      class=" pnf-container d-flex flex-col justify-center items-center bg-white-90 rounded-3xl"
    >
      <h1 class="text-h2">Strona której szukasz nie istnieje</h1>
      <div class="pnf-container__img-container">
        <img class="rounded-3xl" src="../assets/panda-page-not-found.PNG" />
      </div>
      <div>
        <p class="text-body-big">Wróć do strony głównej</p>
        <button><-</button>
      </div>
    </div>
  `,
  styleUrls: ["./page-not-found.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PageNotFoundComponent {}
