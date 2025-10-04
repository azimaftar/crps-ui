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
        path: 'maklumat-pegawai',
        loadComponent: () =>
            import('./maklumat-pegawai/maklumat-pegawai.component').then(
                (m) => m.MaklumatPegawaiComponent
            )
    },
    {
        path: 'paparan-dan-cetakan-surat-arahan-pemulangan-kad-kuasa',
        loadComponent: () =>
            import('./paparan-dan-cetakan-surat-arahan-pemulangan-kad-kuasa/paparan-dan-cetakan-surat-arahan-pemulangan-kad-kuasa.component').then(
                (m) => m.PaparanDanCetakanSuratArahanPemulanganKadKuasaComponent
            )
    }
]