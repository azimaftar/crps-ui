import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        loadComponent: () =>
            import('./buat-carian-templat.component').then((m) => m.BuatCarianTemplatComponent),
        data: {
            tittle: `Buat Carian Templat`
        },
    },
];