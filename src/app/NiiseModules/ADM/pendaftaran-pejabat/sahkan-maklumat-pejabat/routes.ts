import { Routes } from "@angular/router";

export const routes: Routes = [
    {
        path: 'pengesahan-maklumat-pejabat',
        loadComponent: () =>
            import('./pengesahan-maklumat-pejabat/pengesahan-maklumat-pejabat.component').then(
                (m) => m.PengesahanMaklumatPejabatComponent
            )
    }
]