import { Routes } from '@angular/router';

export const routes: Routes = [ 
  {
    path: 'pengurusan-surat-kemudahan-berlepas',
    loadChildren: () => import('./pengurusan-surat-kemudahan-berlepas/routes').then((m) => m.routes),
  },
  {
    path: 'permohonan-surat-kemudahan-berlepas',
    loadChildren: () => import('./permohonan-surat-kemudahan-berlepas/routes').then((m) => m.routes),
  },  
  {
    path: 'permohonan-pas-perkahwinan-warga-asing',
    loadChildren: () => import('./permohonan-pas-perkahwinan-warga-asing/routes').then((m) => m.routes),
  },
];
