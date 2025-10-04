import {Routes} from "@angular/router";

export const TerimaPermohonanRoutes: Routes = [
  {
    path: '',
    loadComponent: () => import('./terima-permohonan.component').then(m => m.TerimaPermohonanComponent),
    data: {
      title: `Maklumat Profil Pegawai`
    }
  }
];