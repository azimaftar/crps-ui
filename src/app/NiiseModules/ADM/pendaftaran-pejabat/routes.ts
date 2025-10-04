import { Routes } from "@angular/router";

export const routes: Routes = [
    {
        path: 'daftar-kemas-kini-maklumat-pejabat',
        loadChildren: () =>
            import('./daftar-kemas-kini-maklumat-pejabat/routes').then(
                (m) => m.routes
            )
    },
    {
        path: 'pendaftaran-dan-pengambilan-biometrik',
        loadChildren: () =>
            import('./pendaftaran-dan-pengambilan-biometrik/routes').then(
                (m) => m.routes
            )
    },
    {
        path: 'sahkan-maklumat-pejabat',
        loadChildren: () =>
            import('./sahkan-maklumat-pejabat/routes').then(
                (m) => m.routes
            )
    }
]