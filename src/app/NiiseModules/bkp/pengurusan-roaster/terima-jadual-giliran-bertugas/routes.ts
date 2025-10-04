import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./terima-jadual-giliran-bertugas.component').then(m => m.TerimaJadualGiliranBertugasComponent),
    data: {
      title: ``
    }
  }
];

