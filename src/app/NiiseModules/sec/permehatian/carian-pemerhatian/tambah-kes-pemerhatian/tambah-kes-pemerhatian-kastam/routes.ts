import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./tambah-kes-pemerhatian-kastam.component').then(m => m.TambahKesPemerhatianKastamComponent),
    data: {
      title: `Tambah Kes Pemerhatian`
    }
  }
  
];

