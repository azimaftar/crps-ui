import { Routes } from "@angular/router";

export const routes: Routes = [
  {
    path: '',
    children: [
      //WFR-IBC-02.9-1
      {
        path: 'imbasan-dokumen-perjalanan-pasport',
        title: 'Pemeriksaan Masuk (eGate) - Imbasan Dokumen Perjalanan [Pasport]',
        loadComponent: () =>
          import('./imbasan-dokumen-perjalan-pasport/imbasan-dokumen-perjalan-pasport.component')
            .then((m) => m.ImbasanDokumenPerjalanPasportComponent)
      },
      //WFR-IBC-02.9-4
      {
        path: 'bahagian-data-biometrik-wajah-dan-iris',
        title: 'Pemeriksaan Masuk (eGate) - Bahagian Data Biometrik [Wajah & Iris]',
        loadComponent: () =>
          import('./bahagian-data-biometrik-wajah-dan-iris/bahagian-data-biometrik-wajah-dan-iris.component')
            .then((m) => m.BahagianDataBiometrikWajahDanIrisComponent)
      },
      //WFR-IBC-02.9-8
      {
        path: 'bahagian-data-biometrik-imbasan-cap-jari-kanan',
        title: 'Pemeriksaan Masuk (eGate) - Bahagian Data Biometrik [Cap Jari]',
        loadComponent: () =>
          import('./imbasan-cap-jari-kanan/imbasan-cap-jari-kanan.component')
            .then((m) => m.ImbasanCapJariKananComponent)
      },
      //WFR-IBC-02.9-8
      {
        path: 'bahagian-data-biometrik-imbasan-cap-jari-kiri',
        title: 'Pemeriksaan Masuk (eGate) - Bahagian Data Biometrik [Cap Jari]',
        loadComponent: () =>
          import('./imbasan-cap-jari-kiri/imbasan-cap-jari-kiri.component')
            .then((m) => m.ImbasanCapJariKiriComponent)
      },
      //bahagian-data-biometrik-cap-jari
      {
        path: 'bahagian-data-biometrik-cap-jari-status-imbasan',
        title: 'Pemeriksaan Masuk (eGate) - Bahagian Data Biometrik [Cap Jari]',
        loadComponent: () =>
          import('./imbasan-cap-jari-status-imbasan/imbasan-cap-jari-status-imbasan.component')
            .then((m) => m.ImbasanCapJariStatusImbasanComponent)
      },
    ]
  }
];




