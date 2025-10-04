import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./kemaskini-kes-pemerhatian-lhdn.component').then(m => m.KemaskiniKesPemerhatianLhdnComponent),
    data: {
      title: `Kemaskini Kes Pemerhatian`
    }
  }
  
];