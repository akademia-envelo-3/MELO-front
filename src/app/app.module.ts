import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { StoreModule } from "@ngrx/store";
import { EffectsModule } from "@ngrx/effects";
import { AppComponent } from "./app.component";
import { API_URL, IS_PRODUCTION } from "@core/env.token";
import { environment } from "src/environment";
import { RouterModule } from "@angular/router";
import { noProductionGuard } from "@shared/no-production.guard";
import { UnitFormComponent } from "./features/unit/unit-form/unit-form.component";
import { MatFormFieldModule } from "@angular/material/form-field";
// import { MatInputModule } from "@angular/material/input";
import { MatButtonModule } from "@angular/material/button";
import { ReactiveFormsModule } from "@angular/forms";

@NgModule({
  declarations: [AppComponent, UnitFormComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    MatFormFieldModule,
    // MatInputModule,
    StoreModule.forRoot({}),
    EffectsModule.forRoot([]),
    BrowserAnimationsModule,
    RouterModule.forRoot([
      {
        path: "",
        children: [
          {
            path: "",
            loadChildren: () => import("./features/home/home.module"),
          },
          {
            path: "auth",
            loadChildren: () => import("./features/auth/auth.module"),
          },
          {
            path: "theme",
            canMatch: [noProductionGuard],
            loadComponent: () => import("./core/theme.component"),
          },
          {
            //ścieżka tymczasowa, na razie jest sam fomularz
            path: "utworz-kolo",
            component: UnitFormComponent,
          },
          {
            path: "**",
            redirectTo: "",
          },
        ],
      },
    ]),
    MatButtonModule,
    ReactiveFormsModule,
  ],
  providers: [
    {
      provide: API_URL,
      useValue: environment.API_URL,
    },
    {
      provide: IS_PRODUCTION,
      useValue: environment.production,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
