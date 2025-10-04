import { Routes } from "@angular/router";

export const routes: Routes = [
    {
        path: 'semakan-pengambilan-biometrik',
        loadComponent: () =>
            import('./semakan-pengambilan-biometrik/semakan-pengambilan-biometrik.component').then(
                (m) => m.SemakanPengambilanBiometrikComponent
            )
    }
]