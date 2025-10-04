import { Routes } from "@angular/router";

export const routes: Routes = [
  {
    path: '',
    children: [
      
      {
        path: 'senarai-semakan-dan-tindakan-penyelia',
        loadComponent: () =>
          import('./senarai-semakan-dan-tindakan-penyelia/senarai-semakan-dan-tindakan-penyelia.component')
            .then((m) => m.SenaraiSemakanDanTindakanPenyeliaComponent)
      },
      {
        path: 'maklumat-profil-pengembara-penyelia',
        loadComponent: () =>
          import('./maklumat-profil-pengembara-penyelia/maklumat-profil-pengembara-penyelia.component')
            .then((m) => m.MaklumatProfilPengembaraPenyeliaComponent)
      },
      {
        path: 'imbasan-dokumen-perjalanan',
        loadComponent: () =>
          import('./imbasan-dokumen-perjalanan/imbasan-dokumen-perjalanan.component')
            .then((m) => m.ImbasanDokumenPerjalananComponent)
      },
      {
        path: 'cetak-pas-maklumat',
        loadComponent: () =>
          import('./cetak-pas-maklumat/cetak-pas-maklumat.component')
            .then((m) => m.CetakPasMaklumatComponent)
      },
      {
        path: 'maklumat-profil-pegawai/:noDokumen',
        loadComponent: () =>
          import('./maklumat-profil-pegawai/maklumat-profil-pegawai.component')
            .then((m) => m.MaklumatProfilPegawaiComponent)
      },
      {
        path: 'maklumat-profil-pegawai',
        loadComponent: () =>
          import('./maklumat-profil-pegawai/maklumat-profil-pegawai.component')
            .then((m) => m.MaklumatProfilPegawaiComponent)
      },
      {
        path: 'maklumat-visa/:uid',
        loadComponent: () =>
          import('./maklumat-visa/maklumat-visa.component')
            .then((m) => m.MaklumatVisaComponent)
      },
      {
        path: 'maklumat-visa',
        loadComponent: () =>
          import('./maklumat-visa/maklumat-visa.component')
            .then((m) => m.MaklumatVisaComponent)
      },
      {
        path: 'maklumat-pengguna-kerap',
        loadComponent: () =>
          import('./maklumat-pengguna-kerap/maklumat-pengguna-kerap.component')
            .then((m) => m.MaklumatPenggunaKerapComponent)
      },
      {
        path: 'semakan-maklumat-pas',
        loadComponent: () =>
          import('./semakan-maklumat-pas/semakan-maklumat-pas.component')
            .then((m) => m.SemakanMaklumatPasComponent)
      },
      {
        path: 'carian-profil-pengembara',
        loadComponent: () =>
          import('./carian-profil-pengembara/carian-profil-pengembara.component')
            .then((m) => m.CarianProfilPengembaraComponent)
      },
      {
        path: 'padanan-pergerakan-data',
        loadComponent: () =>
          import('./padanan-pergerakan-data/padanan-pergerakan-data.component')
            .then((m) => m.PadananPergerakanDataComponent)
      },
      {
        path: 'imbasan-perjalanan',
        loadComponent: () =>
          import('./imbasan-perjalanan/imbasan-perjalanan.component')
            .then((m) => m.ImbasanPerjalananComponent)
      }

    ]
  }
];




