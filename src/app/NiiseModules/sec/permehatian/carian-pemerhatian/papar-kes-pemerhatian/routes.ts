import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./papar-kes-pemerhatian.component').then(m => m.PaparKesPemerhatianComponent),
    data: {
      title: `Papar Kes Pemerhatian`
    }
  }
  
];

