import { Routes } from "@angular/router";

export const routes: Routes =[
    {
        path: 'sahkan-laporan-kehilangan',
        loadComponent: () =>
            import('./sahkan-laporan-kehilangan/sahkan-laporan-kehilangan.component').then(
                (m) => m.SahkanLaporanKehilanganComponent
            )
    }
]