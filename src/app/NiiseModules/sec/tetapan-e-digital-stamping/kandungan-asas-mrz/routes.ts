import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./kandungan-asas-mrz.component').then(m => m.KandunganAsasMRZComponent),
    data: {
      title: `Tetapan e-Digital Stamping`
    }
  }
];

