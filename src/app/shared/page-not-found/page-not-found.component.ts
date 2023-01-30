import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CircularButtonComponent } from '@shared/ui';

@Component({
  standalone: true,
  selector: 'app-page-not-found',
  imports: [CircularButtonComponent],
  template: `
    <div class="pnf-container bg-gradient-neutral-3">
      <h1 class="pnf-container__header text-h1">Strona której szukasz nie istnieje</h1>
      <div class="pnf-container__img-container">
        <img src="../assets/images/panda-page-not-found.PNG" alt="" />
      </div>
      <div class="pnf-container__redirect">
        <p class=" pnf-container__text text-body-big">Wróć do strony głównej</p>
        <app-circular-button
          icon="arrow_back"
          size="sm"
          routerLink=""
        ></app-circular-button>
      </div>
    </div>
  `,
  styleUrls: ['./page-not-found.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class PageNotFoundComponent {}
