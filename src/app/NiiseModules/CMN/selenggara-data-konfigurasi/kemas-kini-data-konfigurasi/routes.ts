// import { Routes } from '@angular/router';

// export const routes: Routes = [
//   {
//     path: '',
//     loadComponent: () =>
//       import('./kemas-kini-data-konfigurasi.component').then((m) => m.KemasKiniDataKonfigurasiComponent),
//     data: {
//       title: `Kemas Kini Data Konfigurasi`,
//     },
//   },
// ];

import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '', // <-- IMPORTANT
    loadComponent: () =>
      import('./kemas-kini-data-konfigurasi.component').then((m) => m.KemasKiniDataKonfigurasiComponent),
    data: {
      title: `Kemas Kini Data Konfigurasi`,
    },
  },
];
