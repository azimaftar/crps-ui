import { Routes } from '@angular/router';
//import { DaftarKemaskiniVaksinComponent } from './daftar-kemaskini-vaksin.component';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
    import('./daftar-kemaskini-vaksin.component').then(m => m.DaftarKemaskiniVaksinComponent),
    data: {
      title: `Mendaftar / Mengemaskini Maklumat Vaksin`
    }
  },
  
  {
    path: 'daftar-vaksin',
    loadChildren: () =>
        import('./daftar-vaksin/routes').then((m) => m.routes),
  },

  {
    path: 'carian-vaksin',
    loadChildren: () =>
        import('./carian-vaksin/routes').then((m) => m.routes),
  },
];