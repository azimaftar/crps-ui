import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./kelulusan-kes-pemerhatian.component').then(m => m.KelulusanKesPemerhatianComponent),
    data: {
      title: `Kelulusan Kes Pemerhatian`
    }
  }
  
];




