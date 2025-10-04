import { Routes } from '@angular/router';
import { MaklumatPegawaiPemohonComponent } from './maklumat-pegawai-pemohon/maklumat-pegawai-pemohon.component';

export const routes: Routes = [
  {
    path: 'senarai-gantian-tugas',
      children: [
        {
          path: '',
          loadComponent: () =>
            import('./senarai-gantian-tugas.component').then(
              m => m.SenaraiGantianTugasComponent
            ),
        },
        {
          path: 'maklumat-pegawai-pemohon',
          loadChildren: () =>
            import('./maklumat-pegawai-pemohon/routes').then(m => m.routes)
        },
      ],
    data: {
      title: `Senarai Gantian Tugas`
    }
  }
];


