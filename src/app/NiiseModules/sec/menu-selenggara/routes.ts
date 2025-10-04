import { Routes } from '@angular/router';

export const routes: Routes = [
  {
 
        path: 'menu',
        loadChildren: () =>
          import('./menu/routes').then((m) => m.routes),
      },
      // {
 
      //   path: 'kod-agensi',
      //   loadChildren: () =>
      //     import('./menu/kod-agensi/routes').then((m) => m.routes),
      // },
      {
 
        path: 'kod-tco',
        loadChildren: () =>
          import('./menu/kod-tco/routes').then((m) => m.routes),
      },
      {
 
        path: 'kod-nap',
        loadChildren: () =>
          import('./menu/kod-nap/routes').then((m) => m.routes),
      },
      {
 
        path: 'kod-tindakan',
        loadChildren: () =>
          import('./menu/kod-tindakan/routes').then((m) => m.routes),
      },
];
