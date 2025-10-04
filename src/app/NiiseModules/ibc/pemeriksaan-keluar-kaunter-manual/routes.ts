import { Routes } from "@angular/router";

export const routes: Routes = [
  {
    path: '',
    children: [
      
      {
        path: 'laman-utama',
        loadComponent: () =>
          import('./laman-utama/laman-utama.component')
            .then((m) => m.LamanUtamaComponent)
      },
      {
        path: 'pemeriksaan-keluar-kaunter-manual-pilih-dokumen',
        loadComponent: () =>
          import('./pemeriksaan-keluar-kaunter-manual-pilih-dokumen/pemeriksaan-keluar-kaunter-manual-pilih-dokumen.component')
            .then((m) => m.PemeriksaanKeluarKaunterManualPilihDokumenComponent)
      },
      {
        path: 'keluar-imbasan-dokumen-perjalanan-abtc',
        loadComponent: () =>
          import('./keluar-imbasan-dokumen-perjalanan-abtc/keluar-imbasan-dokumen-perjalanan-abtc.component')
            .then((m) => m.KeluarImbasanDokumenPerjalananAbtcComponent)
      },
      {
        path: 'keluar-imbasan-dokumen-perjalanan-kodqr',
        loadComponent: () =>
          import('./keluar-imbasan-dokumen-perjalanan-kodqr/keluar-imbasan-dokumen-perjalanan-kodqr.component')
            .then((m) => m.KeluarImbasanDokumenPerjalananKodqrComponent)
      },
      {
        path: 'keluar-imbasan-dokumen-perjalanan-lain2',
        loadComponent: () =>
          import('./keluar-imbasan-dokumen-perjalanan-lain2/keluar-imbasan-dokumen-perjalanan-lain2.component')
            .then((m) => m.KeluarImbasanDokumenPerjalananLain2Component)
      },
      {
        path: 'keluar-imbasan-dokumen-perjalanan-pasport',
        loadComponent: () =>
          import('./keluar-imbasan-dokumen-perjalanan-pasport/keluar-imbasan-dokumen-perjalanan-pasport.component')
            .then((m) => m.KeluarImbasanDokumenPerjalananPasportComponent)
      },
      {
        path: 'maklumat-profil-pengembara-semak',
        loadComponent: () =>
          import('./maklumat-profil-pengembara-semak/maklumat-profil-pengembara-semak.component')
            .then((m) => m.MaklumatProfilPengembaraSemakComponent)
      },
      {
        path: 'maklumat-profil-maklumat-profil-pengembara',
        loadComponent: () =>
          import('./maklumat-profil-maklumat-profil-pengembara/maklumat-profil-maklumat-profil-pengembara.component')
            .then((m) => m.MaklumatProfilMaklumatProfilPengembaraComponent)
      },
      {
        path: 'bahagian-data-biometrik',
        loadComponent: () =>
          import('./bahagian-data-biometrik/bahagian-data-biometrik.component')
            .then((m) => m.BahagianDataBiometrikComponent)
      },
      {
        path: 'bahagian-data-biometrik-empat-jari',
        loadComponent: () =>
          import('./bahagian-data-biometrik-empat-jari/bahagian-data-biometrik-empat-jari.component')
            .then((m) => m.BahagianDataBiometrikEmpatJariComponent)
      },
      {
        path: 'bahagian-data-biometrik-status-imbas',
        loadComponent: () =>
          import('./bahagian-data-biometrik-status-imbas/bahagian-data-biometrik-status-imbas.component')
            .then((m) => m.BahagianDataBiometrikStatusImbasComponent)
      },
      {
        path: 'bahagian-data-biometrik-ibu-jari-both',
        loadComponent: () =>
          import('./bahagian-data-biometrik-ibu-jari-both/bahagian-data-biometrik-ibu-jari-both.component')
            .then((m) => m.BahagianDataBiometrikIbuJariBothComponent)
      },
      {
        path: 'bahagian-data-biometrik-capjari-status',
        loadComponent: () =>
          import('./bahagian-data-biometrik-capjari-status/bahagian-data-biometrik-capjari-status.component')
            .then((m) => m.BahagianDataBiometrikCapjariStatusComponent)
      },

    ]
  }
];




