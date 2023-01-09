import { ChangeDetectionStrategy, Component } from "@angular/core";

@Component({
  standalone: true,
  selector: "app-page-not-found",
  template: `
    <div class=" pnf-container d-flex flex-col justify-center items-center bg-white-90">
      <h1>Strona której szukasz nie istnieje</h1>
      <div><img src="../assets/panda-page-not-found.PNG" /></div>
      <p>Wróć do strony głównej</p>
      <div></div>
    </div>
  `,
  styles: [".pnf-container{width:500px;}"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PageNotFoundComponent {}
