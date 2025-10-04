import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./maklumat-pelupusan-kad-kuasa.component').then(
        (m) => m.MaklumatPelupusanKadKuasaComponent
      ),
    data: {
      title: `Maklumat Pelupusan Kad Kuasa`,
    },
  },
];
