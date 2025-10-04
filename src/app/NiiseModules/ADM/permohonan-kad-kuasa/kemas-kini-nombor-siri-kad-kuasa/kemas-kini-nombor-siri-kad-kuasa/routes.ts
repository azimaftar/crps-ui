import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./kemas-kini-nombor-siri-kad-kuasa.component').then(m => m.KemasKiniNomborSiriKadKuasaComponent),
    data: {
      title: `Kemas Kini Nombor Siri Kad Kuasa`
    }
  }
];