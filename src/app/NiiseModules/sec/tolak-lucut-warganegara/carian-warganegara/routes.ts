import { Routes } from '@angular/router';

export const routes: Routes = [
  {
     path: '',
      loadComponent: () => import('./carian-warganegara.component').then(m => m.CarianWarganegaraComponent),
      data: {
      title: `Carian Warganegara`
    },
    
  },
  
];
