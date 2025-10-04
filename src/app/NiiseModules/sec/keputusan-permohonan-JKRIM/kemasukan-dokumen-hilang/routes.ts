import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./kemasukan-dokumen-hilang.component').then(m => m.KemasukanDokumenHilangComponent),
    data: {
      title: `Kemasukan Dokumen Hilang`
    }
  },
  {
    path: 'maklumat-kehilangan-dokumen',
    loadChildren: () => import('./maklumat-kehilangan-dokumen/routes').then(m => m.routes),
    data: {
      title: `Kemasukan Dokumen Hilang`
    }
  }
];