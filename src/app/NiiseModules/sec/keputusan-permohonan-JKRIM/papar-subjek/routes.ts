import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./papar-subjek.component').then(m => m.PaparSlComponent),
    data: {
      title: `Papar Subjek`
    }
  }
];

