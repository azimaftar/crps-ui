import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./tetapan-e-digital-stamping.component').then(
        (m) => m.TetapanEDigitalStampingComponent
      ),
    data: {
      title: `Tetapan e-Digital Stamping`,
    },
  },
  {
    path: 'kandungan-asas-mrz',
    loadChildren: () =>
      import('./kandungan-asas-mrz/routes').then((m) => m.routes),
  },
  {
    path: 'kandungan-data-tambahan-dan-status',
    loadChildren: () =>
      import('./kandungan-data-tambahan-dan-status/routes').then((m) => m.routes),
  },
  {
    path: 'mereka-templat-emel-e-digital-stamping',
    loadChildren: () =>
      import('.//mereka-templat-emel-e-digital-stamping/routes').then((m) => m.routes),
  },
];
