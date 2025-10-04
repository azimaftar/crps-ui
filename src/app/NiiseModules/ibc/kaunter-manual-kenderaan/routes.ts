import { Routes } from "@angular/router";

export const routes: Routes = [
  {
    path: '',
    children: [
      
      {
        path: 'pemeriksaan-masuk-dokumen',
        loadComponent: () =>
          import('./pemeriksaan-masuk-dokumen/pemeriksaan-masuk-dokumen.component')
            .then((m) => m.PemeriksaanMasukDokumenComponent)
      },
      {
        path: 'imbasan-dokumen-passport',
        loadComponent: () =>
          import('./imbasan-dokumen-passport/imbasan-dokumen-passport.component')
            .then((m) => m.ImbasanDokumenPassportComponent)
      },
      {
        path: 'imbasan-dokumen-lainlain',
        loadComponent: () =>
          import('./imbasan-dokumen-lainlain/imbasan-dokumen-lainlain.component')
            .then((m) => m.ImbasanDokumenLainlainComponent)
      },
      {
        path: 'imbasan-dokumen-abtc',
        loadComponent: () =>
          import('./imbasan-dokumen-abtc/imbasan-dokumen-abtc.component')
            .then((m) => m.ImbasanDokumenAbtcComponent)
      },
      {
        path: 'imbasan-dokumen-kodqr',
        loadComponent: () =>
          import('./imbasan-dokumen-kodqr/imbasan-dokumen-kodqr.component')
            .then((m) => m.ImbasanDokumenKodqrComponent)
      },
      {
        path: 'maklumat-profil-pengembara-ibc',
        loadComponent: () =>
          import('./maklumat-profil-pengembara-ibc/maklumat-profil-pengembara-ibc.component')
            .then((m) => m.MaklumatProfilPengembaraIbcComponent)
      },
      {
        path: 'maklumat-profil-ibc',
        loadComponent: () =>
          import('./maklumat-profil-ibc/maklumat-profil-ibc.component')
            .then((m) => m.MaklumatProfilIbcComponent)
      },
      {
        path: 'maklumat-visa-ibc',
        loadComponent: () =>
          import('./maklumat-visa-ibc/maklumat-visa-ibc.component')
            .then((m) => m.MaklumatVisaIbcComponent)
      },
      {
        path: 'maklumat-pas-ibc',
        loadComponent: () =>
          import('./maklumat-pas-ibc/maklumat-pas-ibc.component')
            .then((m) => m.MaklumatPasIbcComponent)
      },
       {
        path: 'sign-on-to-join-ship-ibc',
        loadComponent: () =>
          import('./sign-on-to-join-ship-ibc/sign-on-to-join-ship-ibc.component')
            .then((m) => m.SignOnToJoinShipIbcComponent)
      },
      {
        path: 'capturing-face-and-iris-ibc',
        loadComponent: () =>
          import('./capturing-face-and-iris-ibc/capturing-face-and-iris-ibc.component')
            .then((m) => m.CapturingFaceAndIrisIbcComponent)
      },
            {
        path: 'cap-jari-ibc',
        loadComponent: () =>
          import('./cap-jari-ibc/cap-jari-ibc.component')
            .then((m) => m.CapJariIbcComponent)
      },

            {
        path: 'cap-jari-both-ibc',
        loadComponent: () =>
          import('./cap-jari-both-ibc/cap-jari-both-ibc.component')
            .then((m) => m.CapJariBothIbcComponent)
      },
            {
        path: 'cap-jari-four-post-ibc',
        loadComponent: () =>
          import('./cap-jari-four-post-ibc/cap-jari-four-post-ibc.component')
            .then((m) => m.CapJariFourPostIbcComponent)
      },

      
            {
        path: 'maklumat-profil-semak-ibc',
        loadComponent: () =>
          import('./maklumat-profil-semak-ibc/maklumat-profil-semak-ibc.component')
            .then((m) => m.MaklumatProfilSemakIbcComponent)
      },

       

    ]
  }
];




