import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./kemaskini-kes-pemerhatian-kastam.component').then(m => m.KemaskiniKesPemerhatianKastamComponent),
    data: {
      title: `Kemaskini Kes Pemerhatian`
    }
  }
  
];