import { Routes } from '@angular/router';

export const routes: Routes = [
  {
     path: '',
      loadComponent: () => import('./maklumat-sabjek.component').then(m => m.MaklumatSabjekComponent),
      data: {
      title: `Maklumat Sabjek`
    },
    
  },
  
];