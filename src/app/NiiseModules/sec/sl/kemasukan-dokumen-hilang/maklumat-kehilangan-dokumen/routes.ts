import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./maklumat-kehilangan-dokumen.component').then(m => m.MaklumatKehilanganDokumenComponent),
    data: {
      title: `Kemasukan Dokumen Hilang`
    }
  }
];