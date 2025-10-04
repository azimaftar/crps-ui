import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./documen-sokongan.component').then(m => m.DocumenSokonganComponent),
    data: {
      title: `Dokumen Sokongan`
    }
  }
];