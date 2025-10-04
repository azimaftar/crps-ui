import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import(
        './paparan-dan-cetakan-surat-permohonan-pelupusan-ke-cgso.component'
      ).then((m) => m.PaparanDanCetakanSuratPermohonanPelupusanKeCgsoComponent),
    data: {
      title: `Paparan Dan Cetakan Surat Permohonan Pelupusan Ke CGSO`,
    },
  },
];
