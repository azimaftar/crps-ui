// sec/permohonan-pas-perkahwinan-warga-asing/maklumat-pasangan/routes.ts
import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./maklumat-pasangan.component')
        .then(m => m.MaklumatPasanganComponent),
    data: { title: 'Maklumat Pasangan' }
  }
];
