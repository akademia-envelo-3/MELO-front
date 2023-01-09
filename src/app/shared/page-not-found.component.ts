import { ChangeDetectionStrategy, Component } from "@angular/core";

@Component({
  selector: "app-page-not-found",
  template: `
    <h1>Strona której szukasz nie istnieje</h1>
    <div><img src="MELO-front/src/assets/panda-page-not-found.PNG" /></div>
  `,
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PageNotFoundComponent {}
