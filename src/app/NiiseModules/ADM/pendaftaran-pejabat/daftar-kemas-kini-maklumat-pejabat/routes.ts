import { Routes } from "@angular/router";

export const routes: Routes = [
    {
        path: 'carian-maklumat-pejabat',
        loadComponent: () =>
            import('./carian-maklumat-pejabat/carian-maklumat-pejabat.component').then(
                (m) => m.CarianMaklumatPejabatComponent
            )
    },
    {
        path: 'maklumat-pejabat',
        loadComponent: () =>
            import('./maklumat-pejabat/maklumat-pejabat.component').then(
                (m) => m.MaklumatPejabatComponent
            )
    },
    {
        path: 'maklumat-kontrak-sewaan-pejabat',
        loadComponent: () =>
            import('./maklumat-kontrak-sewaan-pejabat/maklumat-kontrak-sewaan-pejabat.component').then(
                (m) => m.MaklumatKontrakSewaanPejabatComponent
            )
    },
    {
        path: 'maklumat-kontrak-penyelenggaraan',
        loadComponent: () =>
            import('./maklumat-kontrak-penyelenggaraan/maklumat-kontrak-penyelenggaraan.component').then(
                (m) => m.MaklumatKontrakPenyelenggaraanComponent
            )
    },
    {
        path: 'maklumat-kontrak-pembersihan',
        loadComponent: () =>
            import('./maklumat-kontrak-pembersihan/maklumat-kontrak-pembersihan.component').then(
                (m) => m.MaklumatKontrakPembersihanComponent
            )
    },
    {
        path: 'maklumat-kontrak-pembekalan-makanan',
        loadComponent: () =>
            import('./maklumat-kontrak-pembekalan-makanan/maklumat-kontrak-pembekalan-makanan.component').then(
                (m) => m.MaklumatKontrakPembekalanMakananComponent
            )
    }
]