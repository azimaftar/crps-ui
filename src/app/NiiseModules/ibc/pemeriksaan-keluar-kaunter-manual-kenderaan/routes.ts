import { Routes } from "@angular/router";

export const routes: Routes = [
  {
    path: '',
    children: [
      // UC-IBC-03.10.1
      // keluar-kaunter-manual-kenderaan-profil
      {
        path: 'keluar-kaunter-manual-kenderaan-profil',
        loadComponent: () =>
          import('./keluar-kaunter-manual-kenderaan-profil/keluar-kaunter-manual-kenderaan-profil.component')
            .then(m => m.KeluarKaunterManualKenderaanProfilComponent)
      },
      {
        path: 'imbasan-dokumen-passport',
        loadComponent: () =>
          import('./imbasan-dokumen-passport/imbasan-dokumen-passport.component')
            .then(m => m.ImbasanDokumenPassportComponent)
      },
      {
        path: 'imbasan-dokumen-abtc',
        loadComponent: () =>
          import('./imbasan-dokumen-abtc/imbasan-dokumen-abtc.component')
            .then(m => m.ImbasanDokumenAbtcComponent)
      },
      {
        path: 'imbasan-dokumen-kodqr',
        loadComponent: () =>
          import('./imbasan-dokumen-kodqr/imbasan-dokumen-kodqr.component')
            .then(m => m.ImbasanDokumenKodqrComponent)
      },
        {
        path: 'maklumat-profil-pengembara-main',
        loadComponent: () =>
          import('./maklumat-profil-pengembara-main/maklumat-profil-pengembara-main.component')
            .then(m => m.MaklumatProfilPengembaraMainComponent)
      },
       {
        path: 'maklumat-profil-semak-main',
        loadComponent: () =>
          import('./maklumat-profil-semak-main/maklumat-profil-semak-main.component')
            .then(m => m.MaklumatProfilSemakMainComponent)
      },
      {
        path: 'maklumat-profil-main',
        loadComponent: () =>
          import('./maklumat-profil-main/maklumat-profil-main.component')
            .then(m => m.MaklumatProfilMainComponent)
      },
       {
        path: 'maklumat-visa-main',
        loadComponent: () =>
          import('./maklumat-visa-main/maklumat-visa-main.component')
            .then(m => m.MaklumatVisaMainComponent)
      },
      {
        path: 'maklumat-pas-main',
        loadComponent: () =>
          import('./maklumat-pas-main/maklumat-pas-main.component')
            .then(m => m.MaklumatPasMainComponent)
      },
      {
        path: 'sign-on-to-join-ship-main',
        loadComponent: () =>
          import('./sign-on-to-join-ship-main/sign-on-to-join-ship-main.component')
            .then(m => m.SignOnToJoinShipMainComponent)
      },
      {
        path: 'capturing-face-and-iris-main',
        loadComponent: () =>
          import('./capturing-face-and-iris-main/capturing-face-and-iris-main.component')
            .then(m => m.CapturingFaceAndIrisMainComponent)
      },
      {
        path: 'cap-jari-main',
        loadComponent: () =>
          import('./cap-jari-main/cap-jari-main.component')
            .then(m => m.CapJariMainComponent)
      },
      {
        path: 'cap-jari-both-main',
        loadComponent: () =>
          import('./cap-jari-both-main/cap-jari-both-main.component')
            .then(m => m.CapJariBothMainComponent)
      },
      {
        path: 'cap-jari-four-post-main',
        loadComponent: () =>
          import('./cap-jari-four-post-main/cap-jari-four-post-main.component')
            .then(m => m.CapJariFourPostMainComponent)
      },
    ]
  }
];
