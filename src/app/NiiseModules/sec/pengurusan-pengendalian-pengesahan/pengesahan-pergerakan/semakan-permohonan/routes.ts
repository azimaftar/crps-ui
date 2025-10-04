import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./semakan-permohonan.component').then((m) => m.SemakanPermohonanComponent),
    data: {
        title: "Semakan Permohonan"
    }
  }
];