import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('././tambah-data-takwim.component').then(m => m.TambahDataTakwimComponent),
    data: {
      title: `Tambah Data Takwim`
    }
  }
];
