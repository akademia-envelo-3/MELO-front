import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { PageNotFoundComponent } from "@shared/page-not-found.component";
import { HomeComponent } from "./home.component";

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: "",
        component: HomeComponent,
        children: [],
      },
    ]),
  ],
})
export default class HomeModule {}
