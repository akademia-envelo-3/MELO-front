import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `<app-navbar [notifications]="99"></app-navbar
    ><router-outlet></router-outlet>`,
  providers: [],
})
export class AppComponent {}
