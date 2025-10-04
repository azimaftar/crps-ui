import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./pass-ot.component').then(m => m.PassOtComponent),
    data: {
      title: `Kelulusan Ot`
    }
    
  },
  {
    path: 'kelulusan-permohonan-ot',
    loadChildren: () =>
        import('./kelulusan-permohonan-ot/routes').then((m) => m.routes),
  }
  
];

