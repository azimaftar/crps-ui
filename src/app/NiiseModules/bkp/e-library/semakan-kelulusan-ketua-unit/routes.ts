import { Routes } from '@angular/router';


export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./semakan-kelulusan-ketua-unit.component').then(m => m.SemakanKelulusanKetuaUnitComponent),
    data: {
      title: `Semakan dan Kelulusan Ketua Unit`
    },
    
  },
  {
    path: 'kelulusan-status',
    loadChildren: () => import('./kelulusan-status/routes').then(m => m.routes),
    
  },
];

