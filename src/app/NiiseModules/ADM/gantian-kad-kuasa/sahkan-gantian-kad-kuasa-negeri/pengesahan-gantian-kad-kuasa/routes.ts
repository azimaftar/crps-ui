import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./pengesahan-gantian-kad-kuasa.component').then(m => m.PengesahanGantianKadKuasaComponent),
    data: {
      title: `Pengesahan Gantian Kad Kuasa Negeri`
    }
  }
];