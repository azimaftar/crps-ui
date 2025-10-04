import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./dokumen.component').then(m => m.DokumenComponent),
    data: {
      title: `Pinda SL`
    }
  }
];

