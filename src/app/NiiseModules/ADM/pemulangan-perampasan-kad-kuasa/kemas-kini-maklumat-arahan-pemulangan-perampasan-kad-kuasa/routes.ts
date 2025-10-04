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
        path: 'kemas-kini-maklumat-arahan',
        loadComponent: () =>
            import('./kemas-kini-maklumat-arahan/kemas-kini-maklumat-arahan.component').then(
                (m) => m.KemasKiniMaklumatArahanComponent
            )
    },
    {
        path: 'maklumat-laporan-siasatan',
        loadComponent: () =>
            import('./maklumat-laporan-siasatan/maklumat-laporan-siasatan.component').then(
                (m) => m.MaklumatLaporanSiasatanComponent
            )
    },
    
]