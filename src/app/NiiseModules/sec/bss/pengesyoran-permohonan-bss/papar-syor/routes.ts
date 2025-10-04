import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./papar-syor.component').then(m => m.PaparsyorComponent),
    data: {
      title: `Semakan Permohonan`
    }
  }
  
];

