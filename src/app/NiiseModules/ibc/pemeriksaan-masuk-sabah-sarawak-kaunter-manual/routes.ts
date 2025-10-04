import { Routes } from "@angular/router";

export const routes: Routes = [
  {
    path: '',
    children: [
      // UC-IBC-02.4.1
      // Pemeriksaan-Masuk-Sabah-Sarawak-Kaunter-Manual
      {
        path: 'sabah-sarawak-manual-profil',
        loadComponent: () =>
          import('./sabah-sarawak-manual-profil/sabah-sarawak-manual-profil.component')
            .then(m => m.SabahSarawakManualProfilComponent)
      },
            {
        path: 'sabah-sarawak-manual-jenis-dokumen-mykad',
        loadComponent: () =>
       import('./sabah-sarawak-manual-jenis-dokumen-mykad/sabah-sarawak-manual-jenis-dokumen-mykad.component')
            .then((m) => m.SabahSarawakManualJenisDokumenMykadComponent)
      },
            {
        path: 'sabah-sarawak-manual-jenis-dokumen-passport',
        loadComponent: () =>
       import('./sabah-sarawak-manual-jenis-dokumen-passport/sabah-sarawak-manual-jenis-dokumen-passport.component')
            .then((m) => m.SabahSarawakManualJenisDokumenPassportComponent)
      },
            {
        path: 'sabah-sarawak-manual-jenis-dokumen-kodqr',
        loadComponent: () =>
       import('./sabah-sarawak-manual-jenis-dokumen-kodqr/sabah-sarawak-manual-jenis-dokumen-kodqr.component')
            .then((m) => m.SabahSarawakManualJenisDokumenKodqrComponent)
      },
            {
        path: 'sabah-sarawak-manual-jenis-dokumen-lainlain',
        loadComponent: () =>
       import('./sabah-sarawak-manual-jenis-dokumen-lainlain/sabah-sarawak-manual-jenis-dokumen-lainlain.component')
            .then((m) => m.SabahSarawakManualJenisDokumenLainlainComponent)
      },
            {
        path: 'maklumat-profil-sabah-sarawak',
        loadComponent: () =>
       import('./maklumat-profil-sabah-sarawak/maklumat-profil-sabah-sarawak.component')
            .then((m) => m.MaklumatProfilSabahSarawakComponent)
      },
           {
        path: 'maklumat-profil-semak-sabah-sarawak',
        loadComponent: () =>
       import('./maklumat-profil-semak-sabah-sarawak/maklumat-profil-semak-sabah-sarawak.component')
            .then((m) => m.MaklumatProfilSemakSabahSarawakComponent)
      },
            {
        path: 'maklumat-profil-pengembara-sabah-sarawak',
        loadComponent: () =>
       import('./maklumat-profil-pengembara-sabah-sarawak/maklumat-profil-pengembara-sabah-sarawak.component')
            .then((m) => m.MaklumatProfilPengembaraSabahSarawakComponent)
      },
            {
        path: 'maklumat-visa-sabah-sarawak',
        loadComponent: () =>
       import('./maklumat-visa-sabah-sarawak/maklumat-visa-sabah-sarawak.component')
            .then((m) => m.MaklumatVisaSabahSarawakComponent)
      },
            {
        path: 'maklumat-pas-sabah-sarawak',
        loadComponent: () =>
       import('./maklumat-pas-sabah-sarawak/maklumat-pas-sabah-sarawak.component')
            .then((m) => m.MaklumatPasSabahSarawakComponent)
      },
           {
        path: 'face-iris-sabah-sarawak',
        loadComponent: () =>
       import('./face-iris-sabah-sarawak/face-iris-sabah-sarawak.component')
            .then((m) => m.FaceIrisSabahSarawakComponent)
      },
           {
        path: 'cap-jari-sabah-sarawak',
        loadComponent: () =>
       import('./cap-jari-sabah-sarawak/cap-jari-sabah-sarawak.component')
            .then((m) => m.CapJariSabahSarawakComponent)
      },
           {
        path: 'cap-jari-both-sabah-sarawak',
        loadComponent: () =>
       import('./cap-jari-both-sabah-sarawak/cap-jari-both-sabah-sarawak.component')
            .then((m) => m.CapJariBothSabahSarawakComponent)
      },
           {
        path: 'cap-jari-four-post-sabah-sarawak',
        loadComponent: () =>
       import('./cap-jari-four-post-sabah-sarawak/cap-jari-four-post-sabah-sarawak.component')
            .then((m) => m.CapJariFourPostSabahSarawakComponent)
      },
    ]
  }
];
