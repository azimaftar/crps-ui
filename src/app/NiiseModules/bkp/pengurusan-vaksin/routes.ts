import { Routes } from '@angular/router';
// import path from 'path';
export const routes = [
  {
    path: 'daftar-kemaskini-vaksin',
    loadChildren: () =>
      import('./daftar-kemaskini-vaksin/routes').then((m) => m.routes),
  },
  {
    path: 'daftar-tarikh-publish',
    loadChildren: () =>
      import('./daftar-tarikh-publish/routes').then((m) => m.routes),
  },
  {
    path: 'setuju-tolak-vaksin',
    loadChildren: () =>
      import('./setuju-tolak-vaksin/routes').then((m) => m.routes),
  },
  {
    path: 'kelulusan-vaksin',
    loadChildren: () =>
      import('./kelulusan-vaksin/routes').then((m) => m.routes),
  },
  {
    path: 'tarikh-suntik-vaksin',
    loadChildren: () =>
      import('./tarikh-suntik-vaksin/routes').then((m) => m.routes),
  },
];
