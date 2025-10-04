import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./masukkan-sejarah-pekerjaan.component').then(m => m.MasukkanSejarahPekerjaanComponent),
    data: {
      title: `Maklumat Perkhidmatan Dan Perjawatan`
    }
  }
];