import { Routes } from '@angular/router';


export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./maklumat-carian.component').then(m => m.MaklumatCarianComponent),
    data: {
      title: `Maklumat Carian Dokumen`
    },
    
  },
  {
    path: '',
    loadChildren: () => import('./kemaskini/routes').then(m => m.routes),
    
  },
];

