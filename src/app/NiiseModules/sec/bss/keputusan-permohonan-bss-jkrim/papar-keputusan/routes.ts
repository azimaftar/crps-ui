import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./papar-keputusan.component').then(m => m.PaparKeputusanComponent),
    data: {
      title: `Semakan Keputusan`
    }
  }
  
];

