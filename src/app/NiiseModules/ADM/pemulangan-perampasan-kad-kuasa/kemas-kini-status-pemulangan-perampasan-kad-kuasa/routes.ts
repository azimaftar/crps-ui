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
        path: 'kemas-kini-status-pemulangan-perampasan-kad-kuasa',
        loadComponent: () =>
            import('./kemas-kini-status-pemulangan-perampasan-kad-kuasa/kemas-kini-status-pemulangan-perampasan-kad-kuasa.component').then(
                (m) => m.KemasKiniStatusPemulanganPerampasanKadKuasaComponent
            )
    }
]