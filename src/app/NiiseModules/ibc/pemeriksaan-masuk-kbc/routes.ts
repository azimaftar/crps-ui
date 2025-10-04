import { Routes } from "@angular/router";

export const routes: Routes = [
  {
    path: '',
    children: [

      {
        path: 'pilihan-dokumen',
        loadComponent: () =>
          import('./pilihan-dokumen/pilihan-dokumen.component')
            .then((m) => m.PilihanDokumenComponent)
      },
      {
        path: 'imbasan-passport',
        loadComponent: () =>
          import('./imbasan-passport/imbasan-passport.component')
            .then((m) => m.ImbasanPassportComponent)
      },
      {
        path: 'imbasan-mykad',
        loadComponent: () =>
          import('./imbasan-mykad/imbasan-mykad.component')
            .then((m) => m.ImbasanMykadComponent)
      },
      {
        path: 'maklumat-dokumen',
        loadComponent: () =>
          import('./maklumat-dokumen/maklumat-dokumen.component')
            .then((m) => m.MaklumatDokumenComponent)
      },
      {
        path: 'maklumat-profil',
        loadComponent: () =>
          import('./maklumat-profil/maklumat-profil.component')
            .then((m) => m.MaklumatProfilComponent)
      },
      {
        path: 'maklumat-profil-pengembara',
        loadComponent: () =>
          import('./maklumat-profil-pengembara/maklumat-profil-pengembara.component')
            .then((m) => m.MaklumatProfilPengembaraComponent)
      },
      {
        path: 'biometrik-wajah-iris',
        loadComponent: () =>
          import('./biometrik-wajah-iris/biometrik-wajah-iris.component')
            .then((m) => m.BiometrikWajahIrisComponent)
      },
      {
        path: 'biometrik-wajah-iris-status',
        loadComponent: () =>
          import('./biometrik-wajah-iris-status/biometrik-wajah-iris-status.component')
            .then((m) => m.BiometrikWajahIrisStatusComponent)
      },
      {
        path: 'biometrik-capjari',
        loadComponent: () =>
          import('./biometrik-capjari/biometrik-capjari.component')
            .then((m) => m.BiometrikCapjariComponent)
      },
      {
        path: 'biometrik-ibujari',
        loadComponent: () =>
          import('./biometrik-ibujari/biometrik-ibujari.component')
            .then((m) => m.BiometrikIbujariComponent)
      },
      {
        path: 'biometrik-capjari-status',
        loadComponent: () =>
          import('./biometrik-capjari-status/biometrik-capjari-status.component')
            .then((m) => m.BiometrikCapjariStatusComponent)
      },
    ]
  }
];




