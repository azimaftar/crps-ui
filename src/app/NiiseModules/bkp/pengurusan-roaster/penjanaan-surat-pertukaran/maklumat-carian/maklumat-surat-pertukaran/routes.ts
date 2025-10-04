import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./maklumat-surat-pertukaran.component').then(m => m.MaklumatSuratPertukaranComponent),
    data: {
      title: `Penjanaan Surat Pertukaran`
    }
  }
];

