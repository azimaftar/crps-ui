import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./batal-penggantungan-kad-kuasa.component').then(m => m.BatalPenggantunganKadKuasaComponent),
    data: {
      title: `Batal Penggantungan Kad Kuasa`
    }
  }
];