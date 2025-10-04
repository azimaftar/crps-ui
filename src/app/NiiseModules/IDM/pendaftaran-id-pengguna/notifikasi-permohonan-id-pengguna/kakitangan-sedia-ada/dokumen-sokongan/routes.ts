import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./dokumen-sokongan.component').then(m => m.IDMDokumenSokonganComponent),
    data: {
      title: `Dokumen-Sokongan`
    }
  }
];

