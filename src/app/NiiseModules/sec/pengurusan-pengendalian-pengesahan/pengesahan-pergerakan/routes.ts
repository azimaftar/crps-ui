import { Routes } from '@angular/router';

export const routes: Routes = [
    {
    path: 'permohonan-baru',
    loadChildren: () =>
        import('./permohonan-baru/routes').then((m) => m.routes),
    },
    {
        path: 'permohonan-baru/dokumen-sokongan',
        loadChildren: () =>
            import('./permohonan-baru/dokumen-sokongan/routes').then((m) => m.routes),
    },
];

