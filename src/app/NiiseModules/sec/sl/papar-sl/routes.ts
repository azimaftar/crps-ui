import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./papar-sl.component').then(m => m.PaparSlComponent),
    data: { title: 'Papar SL' }
  },
  {
    path: 'papar-sl-maklumat-tindakan',
    loadComponent: () =>
      import('./papar-sl-maklumat-tindakan/papar-sl-maklumat-tindakan.component')
        .then(m => m.PaparSlMaklumatTindakanComponent),
    data: { title: 'Maklumat Tindakan' }
  },
  {
    path: 'papar-sl-maklumat-tindakan/papar-sl-maklumat-terperinci',
    loadComponent: () =>
      import('./papar-sl-maklumat-tindakan/papar-sl-maklumat-terperinci/papar-sl-maklumat-terperinci.component')
        .then(m => m.PaparSlMaklumatTerperinciComponent),
    data: { title: 'Maklumat Terperinci' }
  }
];
