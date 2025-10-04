import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./view-dokumen.component').then(m => m.ViewDokumenComponent),
    data: {
      title: `View Dokumen`
    }
  }
];

