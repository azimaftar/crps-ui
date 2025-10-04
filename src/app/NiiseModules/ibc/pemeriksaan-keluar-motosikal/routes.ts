import { Routes } from "@angular/router";


export const routes: Routes = [
  {
    path: '',
    children: [
     
      {
        path: 'imbasan-biometrik-wajah-dan-iris',
        loadComponent: () =>
          import('./imbasan-biometrik-wajah-dan-iris/imbasan-biometrik-wajah-dan-iris.component')
            .then((m) => m.ImbasanBiometrikWajahDanIrisComponent)
      },
      {
        path: 'imbasan-biometrik-wajah-dan-iris-seamless',
        loadComponent: () =>
          import('./imbasan-biometrik-wajah-dan-iris-seamless/imbasan-biometrik-wajah-dan-iris-seamless.component')
            .then((m) => m.ImbasanBiometrikWajahDanIrisSeamlessComponent)
      },
      {
        path: 'imbasan-cap-jari-kanan',
        loadComponent: () =>
          import('./imbasan-cap-jari-kanan/imbasan-cap-jari-kanan.component')
            .then((m) => m.ImbasanCapJariKananComponent)
      },
      {
        path: 'imbasan-cap-jari-kiri',
        loadComponent: () =>
          import('./imbasan-cap-jari-kiri/imbasan-cap-jari-kiri.component')
            .then((m) => m.ImbasanCapJariKiriComponent)
      },
      {
        path: 'imbasan-cap-jari-status-imbasan',
        loadComponent: () =>
          import('./imbasan-cap-jari-status-imbasan/imbasan-cap-jari-status-imbasan.component')
            .then((m) => m.ImbasanCapJariStatusImbasanComponent)
      },
      {
        path: 'imbasan-dokumen-perjalanan-passport',
        loadComponent: () =>
          import('./imbasan-dokumen-perjalanan-passport/imbasan-dokumen-perjalanan-passport.component')
            .then((m) => m.ImbasanDokumenPerjalananPassportComponent)
      },
    ]
  }
];
