import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./batal-kes-pemerhatian.component').then(m => m.BatalKesPemerhatianComponent),
    data: {
      title: `Batal Kes Pemerhatian`
    }
  }
  
];
