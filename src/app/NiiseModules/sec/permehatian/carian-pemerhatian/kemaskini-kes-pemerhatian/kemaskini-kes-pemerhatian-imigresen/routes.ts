import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./kemaskini-kes-pemerhatian-imigresen.component').then(m => m.KemaskiniKesPemerhatianImigresenComponent),
    data: {
      title: `Kemaskini Kes Pemerhatian`
    }
  }
  
];