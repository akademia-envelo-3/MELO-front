import { APP_INITIALIZER, NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { AppComponent } from './app.component';
import { API_URL, IS_PRODUCTION } from '@core/env.token';
import { environment } from 'src/environment';
import { RouterModule } from '@angular/router';
import { noProductionGuard } from '@shared/no-production.guard';
import { CustomHttpInterceptor, initFactory } from './core';
import { UserState } from '@core/user/store/user';
import { AuthService } from '@features/auth';

export type AppState = {
  user: UserState;
};
import { MatSnackBar } from '@angular/material/snack-bar';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    StoreModule.forRoot({}),
    EffectsModule.forRoot([]),
    BrowserAnimationsModule,
    RouterModule.forRoot([
      {
        path: '',
        children: [
          { path: '', redirectTo: 'events', pathMatch: 'full' },
          {
            path: '',
            loadChildren: () => import('./features/home/home.module'),
          },
          {
            path: 'theme',
            canMatch: [noProductionGuard],
            loadComponent: () => import('./core/theme.component'),
          },
          {
            path: 'admin',
            loadChildren: () => import('./core/user/admin/admin.module'),
          },
          {
            path: '**',
            loadComponent: () =>
              import('./shared/page-not-found/page-not-found.component'),
          },
        ],
      },
      { path: 'login', loadChildren: () => import('./features/auth/auth.module') },
    ]),
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
    {
      provide: HTTP_INTERCEPTORS,
      useClass: CustomHttpInterceptor,
      multi: true,
    },
    {
      provide: APP_INITIALIZER,
      useFactory: initFactory,
      deps: [AuthService],
      multi: true,
    },
    MatSnackBar,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
