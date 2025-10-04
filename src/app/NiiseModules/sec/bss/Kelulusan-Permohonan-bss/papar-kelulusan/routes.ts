import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./papar-kelulusan.component').then(m => m.PaparKelulusanComponent),
    data: {
      title: `Semakan Permohonan`
    }
  }
  
];

