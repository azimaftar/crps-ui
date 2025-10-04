import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./sign-on-to-join-ship.component').then(m => m.SignOnToJoinShipComponent),
    data: {
      title: `Sign on to Join Ship`
    }
  }
];
