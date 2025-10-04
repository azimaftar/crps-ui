import { Routes } from '@angular/router';

export const ibcRoutes: Routes = [
    {
        path: '',
        children: [
            //UC-IBC-1.3.3
            {
                path: 'semakan-dan-pengesahan',
                loadChildren: () =>
                    import('./semakan-dan-pengesahan/routes').then(m => m.routes)
            },
            //UC-IBC-1.3.1
            {
                path: 'isi-maklumat-pengembara',
                loadChildren: () =>
                    import('./isi-maklumat-pengembara/routes').then(m => m.routes)
            },
            //UC-IBC-02.8.1
            {
                path: 'kaunter-manual-kenderaan',
                loadChildren: () =>
                    import('./kaunter-manual-kenderaan/routes').then(m => m.routes)
            },
            //UC-IBC-02.1.1
            {
                path: 'pemeriksaan-masuk',
                loadChildren: () =>
                    import('./pemeriksaan-masuk/routes').then(m => m.routes)
            },
            //UC-IBC-02.3.1
            {
                path: 'pemeriksaan-masuk-kbc',
                loadChildren: () =>
                    import('./pemeriksaan-masuk-kbc/routes').then(m => m.routes)
            },
            //UC-IBC-02.4.1
             {
                path: 'pemeriksaan-masuk-sabah-sarawak-kaunter-manual',
                loadChildren: () =>
                    import('./pemeriksaan-masuk-sabah-sarawak-kaunter-manual/routes').then(m => m.routes)
            },
            //UC-IBC-02.9.1
            {
                path: 'pemeriksaan-masuk-hibrid',
                // title: 'Pemeriksaan Masuk (eGate)',
                loadChildren: () =>
                    import('./pemeriksaan-masuk-hibrid/routes').then(m => m.routes)
            },
            //UC-IBC-02.2
            {
                path: 'pemeriksaan-masuk-motosikal',
                loadChildren: () =>
                    import('./pemeriksaan-masuk-motosikal/routes').then(m => m.routes)
            },
            //UC-IBC-03.2
            {
                path: 'pemeriksaan-keluar-motosikal',
                loadChildren: () =>
                    import('./pemeriksaan-keluar-motosikal/routes').then(m => m.routes)
            },
            //UC-IBC-02.1.7 & UC-IBC-02.1.8
            {
                path: 'pemeriksaan-masuk-egate',
                loadChildren: () =>
                    import('./pemeriksaan-masuk-egate/routes').then(m => m.routes)

            },
            //UC-IBC-02.1.9
            {
                path: 'pemeriksaan-masuk-egate-seamless',
                loadChildren: () =>
                    import('./pemeriksaan-masuk-egate-seamless/routes').then(m => m.routes)
            },
             //UC-IBC-02.6.1
            {
                path: 'pengurusan-ntl',
                loadChildren: () =>
                    import('./pengurusan-ntl/routes').then(m => m.routes)
            },
            //UC-IBC-02.1.6
            {
                path: 'semakan-dan-tindakan-penyelia',
                loadChildren: () =>
                    import('./semakan-dan-tindakan-penyelia/routes').then(m => m.routes)
            },
            {
                path: 'padanan-data-apps',
                loadComponent: () => import('./padanan-data-apps/padanan-data-apps.component').then(m => m.PadananDataAppsComponent)
            },
            //UC-IBC-03.1.1
            {
                path: 'pemeriksaan-keluar-kaunter-manual',
                loadChildren: () =>
                    import('./pemeriksaan-keluar-kaunter-manual/routes').then(m => m.routes)
            },
            //UC-IBC-03.8.1
            {
                path: 'pemeriksaan-keluar-arahan-pengeluaran-com',
                loadChildren: () =>
                    import('./pemeriksaan-keluar-arahan-pengeluaran-com/routes').then(m => m.routes)
            },         
            //UC-IBC-4.2.1
            {
                path: 'pengurusan-perkapalan',
                loadChildren: () =>
                    import('./pengurusan-perkapalan/routes').then(m => m.routes)
            },
            {
              path: 'dashboard',
              loadComponent: () => import('../../NiiseModules/ibc/dashboard-ibc/dashboard-ibc.component').then(
                (m) => m.DashboardIbcComponent
              )
            },
            //UC-IBC-03.3.1
            {
                path: 'pemeriksaan-keluar-dari-kompleks-bebas-cukai',
                loadChildren: () =>
                    import('./pemeriksaan-keluar-dari-kompleks-bebas-cukai/routes').then(m => m.routes)
            },
            //UC-IBC-03.10.1
            {
                path: 'pemeriksaan-keluar-kaunter-manual-kenderaan',
                loadChildren: () =>
                    import('./pemeriksaan-keluar-kaunter-manual-kenderaan/routes').then(m => m.routes)
            },
            {
              path: 'reusable-tab',
              loadComponent: () => import('../ibc/shared/reusable-tab/reusable-tab.component').then(
                (m) => m.ReusableTabComponent
              )
            },
            {
              path: 'modal-ibc',
              loadComponent: () => import('../ibc/shared/modal-ibc/modal-ibc.component').then(
                (m) => m.ModalIbcComponent
              )
            }
        ]
    }
];
