import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./dokumen-sokonganSL.component').then(m => m.DokumenSokonganComponent),
    data: {
      title: `Dokumen-SokonganSL`
    }
  }
];