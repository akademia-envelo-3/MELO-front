### How to run MELO app

1. install dependencies `npm ci`
2. add `.env` file to root folder
3. start app `npm start`

Sample `.env` file

```
API_URL=http://rickandmortyapi.com/api
PRODUCTION=false
```

###Konwencja commitów

1. angielski
2. czas przeszły
3. zgodnie ze specyfikacją commitów na Conventional Commits
4. znaczniki + kod tasku + treść

feat: in progress of creating icon

<!-- Cos mi tu nie gra, konsultacja z grupa wymagana  -->

### Struktura plików w komponencie

1. Jeżeli część HTML lub SCSS mają ponad 20 linijek, tworzymy dla nich osobny plik

### Referencje routingu

Szczegółowe ustalenia czy dana ścieżka będzie dzieckiem zależy od struktury komponentów. Strona główna powinna przekierowywać na 'events'.

    { path: '',
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
              path: events',
              // lista wydarzeń
            },
            {
              path: 'events/:id',
              //szczegóły wydarzenia
            },
            {
              path: 'units',
              //lista koł
            },
            {
              path: 'units/:id',
              //szczegóły koła
            },
            {
              path: 'hashtags',
              //lista hashtagów
            },
            {
              path: 'hashtags/:id',
              //szczegóły hashtagów
            },
            {
              path: 'hashtags/stats',
              //statystyki hashtagów
            },
            {
              path: 'categories',
              //lista kategorii
            },
            {
              path: 'categories/:id',
              //szczegóły kategorii
            },
            {
              path: 'inbox',
              //inbox
            },
            {
              path: 'inbox/archive',
              //archiwum
            },
          ],
        },
      ],
    },

];
