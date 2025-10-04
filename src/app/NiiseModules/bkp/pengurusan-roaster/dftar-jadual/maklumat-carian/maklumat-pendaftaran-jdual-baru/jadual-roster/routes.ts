import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./jadual-roster.component').then(m => m.JadualRosterComponent),
    data: {
      title: `Daftar Jadual Giliran Kumpulan Dan Masa Tugas`
    }
  }
];