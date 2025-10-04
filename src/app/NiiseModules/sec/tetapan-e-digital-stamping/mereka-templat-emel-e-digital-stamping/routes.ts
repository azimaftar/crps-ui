import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./mereka-templat-emel-e-digital-stamping.component').then(m => m.MerekaTemplatEmelEDigitalStampingComponent),
    data: {
      title: `Mereka Template e-Digital Stamping`
    }
  }
];

