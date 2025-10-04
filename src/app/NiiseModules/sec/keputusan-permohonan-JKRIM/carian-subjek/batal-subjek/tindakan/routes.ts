import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./tindakan.component').then(m => m.TindakanComponent),
    data: {
      title: `Batal SL`
    }
  }
];

