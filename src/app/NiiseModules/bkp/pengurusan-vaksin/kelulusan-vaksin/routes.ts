import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./kelulusan-vaksin.component')
        .then(m => m.KelulusanVaksinComponent),
    data: {
      title: `Kelulusan Permohonan Vaksin`
    }
  },
  { 
  path: 'maklumat-permohonan-vaksin/:name', 
  loadComponent: () => import('../kelulusan-vaksin/maklumat-permohonan-vaksin/maklumat-permohonan-vaksin.component')
    .then(m => m.MaklumatPermohonanVaksinComponent) 
  }
];