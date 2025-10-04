import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./pinda-kes-pemerhatian.component').then(m => m.PindaKesPemerhatianComponent),
    data: {
      title: `Pinda Kes Pemerhatian`
    }
  }
  
];
