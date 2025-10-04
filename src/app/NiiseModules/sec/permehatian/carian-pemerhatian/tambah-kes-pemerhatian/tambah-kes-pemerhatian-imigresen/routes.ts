import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./tambah-kes-pemerhatian-imigresen.component').then(m => m.TambahKesPemerhatianImigresenComponent),
    data: {
      title: `Tambah Kes Pemerhatian`
    }
  }
  
];

