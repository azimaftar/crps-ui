import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./dokumen-sokongan.component').then(m => m.DokumenSokonganComponent),
    data: {
      title: `Dokumen-Sokongan`
    }
  }
];

