import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./senarai-pelupusan-kad-kuasa.component').then(
        (m) => m.SenaraiPelupusanKadKuasaComponent
      ),
    data: {
      title: `Senarai Pelupusan Kad Kuasa`,
    },
  },
];
