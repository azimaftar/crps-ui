import { Routes} from "@angular/router";

export const routes: Routes = [
    {
        path: '',
        children:[
            {
                path: 'buat-carian-templat',
                loadChildren: () =>
                    import('./buat-carian-templat/routes').then((m) => m.routes),
            }
        ]
    }
]