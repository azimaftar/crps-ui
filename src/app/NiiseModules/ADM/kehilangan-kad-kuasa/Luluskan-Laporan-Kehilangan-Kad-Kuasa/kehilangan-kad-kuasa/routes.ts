import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./kehilangan-kad-kuasa.component').then(m => m.KehilanganKadKuasaComponent),
    data: {
      title: `Permohonan Kad Kuasa`
    }
  }
];