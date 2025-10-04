import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./kemas-kini-status-penggantungan-kad-kuasa.component').then(m => m.KemasKiniStatusPenggantunganKadKuasaComponent),
    data: {
      title: `Kemas Kini Status Penggantungan Kad Kuasa`
    }
  }
];