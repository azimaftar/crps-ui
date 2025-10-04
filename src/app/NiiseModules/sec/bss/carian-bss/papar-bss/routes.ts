import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./papar-bss.component').then(m => m.PaparBssComponent),
    data: {
      title: `Semakan Permohonan`
    }
  }
  
];

