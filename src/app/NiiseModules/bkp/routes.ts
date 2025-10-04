import {Routes} from "@angular/router";

export const bkpRoutes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'e-library',
        loadChildren: () => import('./e-library/routes').then((m) => m.routes),
      },
      {
        path: 'e-reporting',
        loadChildren: () => import('./e-reporting/routes').then((m) => m.routes),
      },
      {
        path: 'pengurusan-roaster',
        loadChildren: () =>
          import('./pengurusan-roaster/routes').then((m) => m.pengurusanRoasterRoutes),
         data: {
          title: `Pengurusan roaster`,
        }
      },

      {
        path: 'e-library',
        loadChildren: () =>
          import('./pengurusan-roaster/routes').then((m) => m.pengurusanRoasterRoutes),
         data: {
          title: `Pengurusan roaster`,
        }
      },
      {
        path: 'pengurusan-roaster-geotime',
        loadChildren: () =>
          import('./pengurusan-roaster-geotime/routes').then((m) => m.routes),
      },

      {
        path: 'e-roster',
        loadChildren: () => import('./e-roster/routes').then((m) => m.routes),
      },

      {
        path: 'penggantian-tugas',
        loadChildren: () =>
          import('./penggantian-tugas/routes').then(m => m.routes)
      },
      {
        path: 'pengurusan-vaksin',
        loadChildren: () =>
          import('./pengurusan-vaksin/routes').then(m => m.routes)
      },

      {
        path: 'atkpi',
        loadChildren: () =>
          import('./atkpi/routes').then(m => m.routes)
      },
    ],
  },
];
