import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./luluskan-permohonan-kad-kuasa.component').then(m => m.LuluskanPermohonanKadKuasaComponent),
    data: {
      title: `Luluskan Permohonan Kad Kuasa`
    }
  }
];