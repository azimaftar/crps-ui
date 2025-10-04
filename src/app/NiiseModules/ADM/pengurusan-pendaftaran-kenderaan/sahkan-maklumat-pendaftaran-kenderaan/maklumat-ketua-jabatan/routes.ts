import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('.//maklumat-ketua-jabatan.component').then(m => m.MaklumatKetuaJabatanComponent),
    data: {
      title: `Maklumat Ketua Jabatan`
    }
  }
];