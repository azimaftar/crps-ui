import { Routes } from "@angular/router";

export const routes: Routes = [
  {
    path: '',
    children: [
      
      {
        path: 'pemeriksaan-keluar-dari-kompleks-ibc',
        loadComponent: () =>
       import('./pemeriksaan-keluar-dari-kompleks-ibc/pemeriksaan-keluar-dari-kompleks-ibc.component')
            .then((m) => m.PemeriksaanKeluarDariKompleksIbcComponent)
      },
      {
        path: 'keluar-imbasan-kompleks-dokumen-perjalanan-pasport',
        loadComponent: () =>
       import('./keluar-imbasan-kompleks-dokumen-perjalanan-pasport/keluar-imbasan-kompleks-dokumen-perjalanan-pasport.component')
            .then((m) => m.KeluarImbasanKompleksDokumenPerjalananPasportComponent)
      },
      {
        path: 'keluar-imbasan-kompleks-dokumen-mykad',
        loadComponent: () =>
       import('./keluar-imbasan-kompleks-dokumen-mykad/keluar-imbasan-kompleks-dokumen-mykad.component')
            .then((m) => m.KeluarImbasanKompleksDokumenMykadComponent)
      },
      {
        path: 'maklumat-profil-pengembara-kompleks',
        loadComponent: () =>
       import('./maklumat-profil-pengembara-kompleks/maklumat-profil-pengembara-kompleks.component')
            .then((m) => m.MaklumatProfilPengembaraKompleksComponent)
      },
      {
        path: 'maklumat-profil-semak-kompleks',
        loadComponent: () =>
       import('./maklumat-profil-semak-kompleks/maklumat-profil-semak-kompleks.component')
            .then((m) => m.MaklumatProfilSemakKompleksComponent)
      },
      {
        path: 'maklumat-profil-kompleks',
        loadComponent: () =>
       import('./maklumat-profil-kompleks/maklumat-profil-kompleks.component')
            .then((m) => m.MaklumatProfilKompleksComponent)
      }, 
      {
        path: 'wajah-dan-iris-kompleks',
        loadComponent: () =>
       import('./wajah-dan-iris-kompleks/wajah-dan-iris-kompleks.component')
            .then((m) => m.WajahDanIrisKompleksComponent)
      },
      {
        path: 'maklumat-cap-jari-kompleks',
        loadComponent: () =>
       import('./maklumat-cap-jari-kompleks/maklumat-cap-jari-kompleks.component')
            .then((m) => m.MaklumatCapJariKompleksComponent)
      }, 
      {
        path: 'maklumat-cap-jari-both-kompleks',
        loadComponent: () =>
       import('./maklumat-cap-jari-both-kompleks/maklumat-cap-jari-both-kompleks.component')
            .then((m) => m.MaklumatCapJariBothKompleksComponent)
      },
      {
        path: 'maklumat-cap-jari-four-post-kompleks',
        loadComponent: () =>
       import('./maklumat-cap-jari-four-post-kompleks/maklumat-cap-jari-four-post-kompleks.component')
            .then((m) => m.MaklumatCapJariFourPostKompleksComponent)
      },
      {
        path: 'keluar-imbasan-kompleks-dokumen-lainlain',
        loadComponent: () =>
       import('./keluar-imbasan-kompleks-dokumen-lainlain/keluar-imbasan-kompleks-dokumen-lainlain.component')
            .then((m) => m.KeluarImbasanKompleksDokumenLainlainComponent)
      },  
    ]
  }
];

