import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./kelulusan.component').then(m => m.KelulusanComponent),
    data: {
      title: `Kelulusan`
    }
  }
];



