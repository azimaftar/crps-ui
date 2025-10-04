export const routes = [
  {
    path: 'penetapan-koordinasi-pegawai',
    loadChildren: () =>
      import('./penetapan-koordinasi-pegawai/routes').then((m) => m.routes),
  },
  {
    path: 'pengurusan-roaster-geotime',
    loadChildren: () =>
      import('./pengurusan-roaster-geotime.component').then((m) => m.PengurusanRoasterGeotimeComponent),
    title: `Pengurusan Roaster Geotime`,
  },
];
