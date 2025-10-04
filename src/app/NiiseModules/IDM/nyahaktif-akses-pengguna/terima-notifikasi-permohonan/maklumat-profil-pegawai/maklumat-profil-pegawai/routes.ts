import {Routes} from "@angular/router";

export const MaklumatProfilePegawaiRoutes: Routes = [
  {
    path: '',
    loadComponent: () => import('./maklumat-profil-pegawai.component').then(m => m.MaklumatProfilPegawaiComponent),
    data: {
      title: `Maklumat-Profil-Pegawai`
    }
  }
];
