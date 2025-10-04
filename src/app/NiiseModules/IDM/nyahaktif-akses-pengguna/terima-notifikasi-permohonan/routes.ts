import {Routes} from "@angular/router";

export const TerimaNotifikasiPermohonanRoutes: Routes = [
  {
    path: '',
    loadComponent: () => import('./maklumat-profil-pegawai/maklumat-profil-pegawai/maklumat-profil-pegawai.component').then(m => m.MaklumatProfilPegawaiComponent),
    data: {
      title: `Maklumat Profil Pegawai`
    }
  }
];