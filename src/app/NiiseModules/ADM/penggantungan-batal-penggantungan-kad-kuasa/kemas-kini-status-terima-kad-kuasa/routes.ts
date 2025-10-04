import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./kemas-kini-status-terima-kad-kuasa.component').then(m => m.KemasKiniStatusTerimaKadKuasaComponent),
    data: {
      title: `Kemas Kini Status Terima Kad Kuasa`
    }
  }
];