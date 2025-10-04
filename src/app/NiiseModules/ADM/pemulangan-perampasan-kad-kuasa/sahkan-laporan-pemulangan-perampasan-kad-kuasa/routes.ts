import { Routes } from "@angular/router";

export const routes: Routes =[
    {
        path: 'dashboard-senarai-arahan-pemulangan-kad-kuasa',
        loadComponent: () =>
            import('./dashboard-senarai-arahan-pemulangan-kad-kuasa/dashboard-senarai-arahan-pemulangan-kad-kuasa.component').then(
                (m) => m.DashboardSenaraiArahanPemulanganKadKuasaComponent
            )
    },
    {
        path: 'sahkan-laporan-pemulangan-perampasan-kad-kuasa',
        loadComponent: () =>
            import('./sahkan-laporan-pemulangan-perampasan-kad-kuasa/sahkan-laporan-pemulangan-perampasan-kad-kuasa.component').then(
                (m) => m.SahkanLaporanPemulanganPerampasanKadKuasaComponent
            )
    }
]