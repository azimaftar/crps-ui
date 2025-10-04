import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./maklumat-penetapan-peranan-agensi.component').then(
        (m) => m.MaklumatPenetapanPerananAgensiComponent
      ),
    data: {
      title: `Maklumat Penetapan Peranan Agensi`,
    },
  },
];
