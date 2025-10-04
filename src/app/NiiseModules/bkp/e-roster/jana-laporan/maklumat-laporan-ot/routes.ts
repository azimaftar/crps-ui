import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('../maklumat-laporan-ot/maklumat-laporan-ot.component').then(m => m.MaklumatLaporanOTComponent),
    data: {
      title: `Laporan`
    }
  }
];

