import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./semakan-status-e-gate-motosikal.component').then(m => m.SemakanStatusEGateMotosikalComponent),
    data: {
      title: `Semakan Status eGate Motosikal`
    }
  }
];