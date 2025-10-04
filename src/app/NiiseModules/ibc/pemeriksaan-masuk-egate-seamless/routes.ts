import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    children: [
        //UC-IBC-2.1.9
                {
            path: 'bahagian-data-biometrik-wajah',
            loadComponent: () =>
            import('./bahagian-data-biometrik-wajah/bahagian-data-biometrik-wajah.component')
                .then((m) => m.BahagianDataBiometrikWajahComponent),
            data: {
                    title: 'Bahagian Data Biometrik Wajah'
                }
            
        },
        {
            path: 'bahagian-data-biometrik-capjari-kirikanan',
            loadComponent: () =>
            import('./bahagian-data-biometrik-capjari-kirikanan/bahagian-data-biometrik-capjari-kirikanan.component')
                .then((m) => m.BahagianDataBiometrikCapjariKirikananComponent),
            data: {
                    title: 'Bahagian Data Biometrik Capjari Kiri Kanan'
                }   
        },
        {
            path: 'bahagian-data-biometrik-capjari-kanan',
            loadComponent: () =>
            import('./bahagian-data-biometrik-capjari-kanan/bahagian-data-biometrik-capjari-kanan.component')
                .then((m) => m.BahagianDataBiometrikCapjariKananComponent),
            data: {
                    title: 'Bahagian Data Biometrik Capjari Kanan'  
                }
        },
        {
            path: 'bahagian-data-biometrik-capjari-kiri',
            loadComponent: () =>
            import('./bahagian-data-biometrik-capjari-kiri/bahagian-data-biometrik-capjari-kiri.component')
                .then((m) => m.BahagianDataBiometrikCapjariKiriComponent),
            data: {
                    title: 'Bahagian Data Biometrik Capjari Kiri'   
                }
        },
        {
            path: 'pemeriksaan-masuk-egate-seamless',
            loadComponent: () =>
            import('./pemeriksaan-masuk-egate-seamless.component')
                .then((m) => m.PemeriksaanMasukEgateSeamlessComponent),
            data: {
                    title: 'Pemeriksaan Masuk eGate Seamless'
                }
        },
    ]
  }
];