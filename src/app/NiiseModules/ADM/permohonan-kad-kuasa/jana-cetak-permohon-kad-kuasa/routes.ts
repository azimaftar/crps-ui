import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./jana-cetak-permohon-kad-kuasa.component').then(m => m.JanaCetakPermohonKadKuasaComponent),
    data: {
      title: `Jana Dan Cetak Senarai Pemohon Kad Kuasa`
    }
  }
];