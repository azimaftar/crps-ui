import { Routes } from "@angular/router";

export const routes : Routes = [
    {
        path: '',
        loadComponent: () => 
            import('./kemas-kini-maklumat-pelupusan-keputusan-cgso.component').then(
                (m) => m.KemasKiniMaklumatPelupusanKeputusanCgsoComponent
            ),
        data: {
            title: `Kemas Kini Maklumat Pelupusan Keputusan CGSO`,
        },
    }
]