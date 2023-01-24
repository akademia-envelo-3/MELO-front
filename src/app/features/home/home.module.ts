import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home.component';

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: '',
        component: HomeComponent,
        children: [],
      },
    ]),
  ],
})
export default class HomeModule {
  routingReference = [
    {
      path: '',
      children: [
        {
          path: '',
          redirectTo: 'events',
          pathMatch: 'full',
        },
        {
          path: 'events',
          //lista wydarzeń
        },
        {
          path: 'events/:id',
          //szczegóły wydarzenia
        },
        {
          path: 'events/new-event',
          //formularz nowego wydarzenia
        },

        {
          path: 'units',
          //lista kół
        },
        {
          path: 'units/:id',
          //szczegóły koła
        },
        {
          path: 'units/new-unit',
          //formularz nowego wydarzenia
        },
        {
          path: 'admin',
          children: [
            {
              path: '/events',
              // lista wydarzeń
            },
            {
              path: '/events/:id',
              //szczegóły wydarzenia
            },
            {
              path: '/units',
              //lista koł
            },
            {
              path: '/units/:id',
              //szczegóły koła
            },
            {
              path: '/hashtags',
              //lista hashtagów
            },
            {
              path: '/hashtags/:id',
              //szczegóły hashtagów
            },
            {
              path: '/hashtags/stats',
              //statystyki hashtagów
            },
            {
              path: '/categories',
              //lista kategorii
            },
            {
              path: '/categories/:id',
              //szczegóły kategorii
            },
            {
              path: '/inbox',
              //inbox
            },
            {
              path: '/inbox/archive',
              //archiwum
            },
          ],
        },
      ],
    },
  ];
}
