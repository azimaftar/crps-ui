import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./tambah-kes-pemerhatian-lhdn.component').then(m => m.TambahKesPemerhatianLHDNComponent),
    data: {
      title: `Tambah Kes Pemerhatian`
    }
  }
  
];

