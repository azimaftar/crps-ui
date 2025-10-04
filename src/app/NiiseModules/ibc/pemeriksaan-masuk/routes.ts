import { Routes } from "@angular/router";

export const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'maklumat-profil-pengembara',
        loadComponent: () =>
          import('./maklumat-profil-pengembara/maklumat-profil-pengembara.component')
            .then((m) => m.MaklumatProfilPengembaraComponent)
      },
      {
        path: 'maklumat-profil',
        loadComponent: () =>
          import('./maklumat-profil/maklumat-profil.component')
            .then((m) => m.MaklumatProfilComponent)
      },
      {
        path: 'maklumat-visa',
        loadComponent: () =>
          import('./maklumat-visa/maklumat-visa.component')
            .then((m) => m.MaklumatVisaComponent)
      },
      {
        path: 'maklumat-pas',
        loadComponent: () =>
          import('./maklumat-pas/maklumat-pas.component')
            .then((m) => m.MaklumatPasComponent)
      },
      {
        path: 'maklumat-pengguna-kerap',
        loadComponent: () =>
          import('./maklumat-pengguna-kerap-ftf/maklumat-pengguna-kerap-ftf.component')
            .then((m) => m.MaklumatPenggunaKerapFtfComponent)
      },
      {
        path: 'pemeriksaan-masuk-2',
        loadComponent: () =>
          import('./pemeriksaan-masuk-2/pemeriksaan-masuk-2.component')
            .then((m) => m.PemeriksaanMasuk2Component)
      },
      {
        path: 'pemeriksaan-masuk-3',
        loadComponent: () =>
          import('./pemeriksaan-masuk-3/pemeriksaan-masuk-3.component')
            .then((m) => m.PemeriksaanMasuk3Component)
      },
      {
        path: 'pemeriksaan-masuk-4',
        loadComponent: () =>
          import('./pemeriksaan-masuk-4/pemeriksaan-masuk-4.component')
            .then((m) => m.PemeriksaanMasuk4Component)
      },
      {
        path: 'pemeriksaan-masuk-5',
        loadComponent: () =>
          import('./pemeriksaan-masuk-5/pemeriksaan-masuk-5.component')
            .then((m) => m.PemeriksaanMasuk5Component)
      },
      {
        path: 'biometrik-wajah',
        loadComponent: () =>
          import('./biometrik-wajah/biometrik-wajah.component')
            .then((m) => m.BiometrikWajahComponent)
      },
      {
        path: 'biometrik-capjari',
        loadComponent: () =>
          import('./biometrik-capjari/biometrik-capjari.component')
            .then((m) => m.BiometrikCapjariComponent)
      },
      {
        path: 'biometrik-capjari-both',
        loadComponent: () =>
          import('./biometrik-capjari-both/biometrik-capjari-both.component')
            .then((m) => m.BiometrikCapjariBothComponent)
      },
      {
        path: 'biometrik-capjari-status',
        loadComponent: () =>
          import('./biometrik-capjari-status/biometrik-capjari-status.component')
            .then((m) => m.BiometrikCapjariStatusComponent)
      },
      {
        path: 'emel-notifikasi',
        loadComponent: () =>
          import('./emel-notifikasi/emel-notifikasi.component')
            .then((m) => m.EmelNotifikasiComponent)
      },
      {
        path: 'sign-on-to-join-ship',
        loadComponent: () =>
          import('./sign-on-to-join-ship/sign-on-to-join-ship.component')
            .then((m) => m.SignOnToJoinShipComponent)
      },
      {
        path: 'p-m-u',
        loadComponent: () =>
          import('./p-m-u/p-m-u.component')
            .then((m) => m.PMUComponent)
      },
      {
        path: 'tapisan-keselamatan',
        loadComponent: () =>
          import('./tapisan-keselamatan/tapisan-keselamatan.component')
            .then((m) => m.TapisanKeselamatanComponent)
      },
      {
        path: 'pemeriksaan-masuk',
        loadComponent: () =>
          import('./pemeriksaan-masuk/pemeriksaan-masuk.component')
            .then((m) => m.PemeriksaanMasukComponent)
      },
      {
        path: 'pemeriksaan-masuk-visa',
        loadComponent: () =>
          import('./pemeriksaan-masuk-visa/pemeriksaan-masuk-visa.component')
            .then((m) => m.PemeriksaanMasukVisaComponent)
      },
      {
        path: 'pemeriksaan-masuk-pas',
        loadComponent: () =>
          import('./pemeriksaan-masuk-pas/pemeriksaan-masuk-pas.component')
            .then((m) => m.PemeriksaanMasukPasComponent)
      },
      {
        path: 'pemeriksaan-masuk-ftf',
        loadComponent: () =>
          import('./pemeriksaan-masuk-ftf/pemeriksaan-masuk-ftf.component')
            .then((m) => m.PemeriksaanMasukFtfComponent)
      },
      {
        path: 'pemeriksaan-masuk-joinship',
        loadComponent: () =>
          import('./pemeriksaan-masuk-joinship/pemeriksaan-masuk-joinship.component')
            .then((m) => m.PemeriksaanMasukJoinshipComponent)
      },
      {
        path: 'laman-utama',
        loadComponent: () =>
          import('./laman-utama/laman-utama.component')
            .then((m) => m.LamanUtamaComponent)
      },
    ]
  }
];




