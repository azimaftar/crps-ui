import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./pendaftaran-id-warganegara.component').then(m => m.PendaftaranIDWarganegaraComponent),
    data: {
      title: `Pendaftaran ID Warganegara`
    }
  }
];

