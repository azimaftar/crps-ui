import { Routes } from '@angular/router';
import { PermohonanBaruComponent } from './permohonan-baru.component';
import { MaklumatPasanganComponent } from './maklumat-pasangan/maklumat-pasangan.component';
import { DokumenSokonganComponent } from './maklumat-pasangan/dokumen-sokongan/dokumen-sokongan.component';

// export const routes: Routes = [

    // { path: '', component: PermohonanBaruComponent },
    // { path: 'maklumat-pasangan', component: MaklumatPasanganComponent },
    // { path: 'maklumat-pasangan/dokumen-sokongan', component: DokumenSokonganComponent },
   

  // {
  //   path: '', loadComponent: () => import('./permohonan-baru.component').then(m => m.PermohonanBaruComponent),
  //   data: {title: 'Permohonan Baru Pas Perkahwinan Bagi Warga Asing'}
  // },
  // {
  //   path: 'maklumat-pasangan',
  //   loadChildren: () => import('./maklumat-pasangan/routes')
  //     .then(m => m.routes)
  // },
  // {
  //   path: 'maklumat-pasangan/dokumen-sokongan',
  //   loadChildren: () => import('./maklumat-pasangan/dokumen-sokongan/routes')
  //     .then(m => m.routes)
  // }


// export const routes: Routes = [
//   {
//     path: '',
//     loadComponent: () =>
//       import('./permohonan-baru.component').then(
//         (m) => m.PermohonanBaruComponent
//       ),
//     data: {
//       title: 'Permohonan Baru Pas Perkahwinan Bagi Warga Asing',
//     },
//   },
//   {
//     path: 'maklumat-pasangan',
//     loadComponent: () =>
//       import('./maklumat-pasangan/maklumat-pasangan.component').then(
//         (m) => m.MaklumatPasanganComponent
//       ),
//     children: [
//       {
//         path: 'dokumen-sokongan',
//         loadComponent: () =>
//           import(
//             './maklumat-pasangan/dokumen-sokongan/dokumen-sokongan.component'
//           ).then((m) => m.DokumenSokonganComponent),
//       },
//     ],
//   },
// ];

export const routes: Routes = [
  { path: '', component: PermohonanBaruComponent},
  { path: 'maklumat-pasangan', component: MaklumatPasanganComponent },
  { path: 'maklumat-pasangan/dokumen-sokongan', component: DokumenSokonganComponent},
];

