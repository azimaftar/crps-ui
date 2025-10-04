import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./pendaftaran-permohonan-bss.component').then(m => m.PendaftaranPermohonanBssComponent),
    data: {
      title: `Permohonan Baru`
    }
    
  },
  {
    path: 'pendaftaran-biometrik-bss',
    loadChildren: () =>
      import('./pendaftaran-biometrik-bss/routes').then((m) => m.routes),
  },
  
  
  
];

