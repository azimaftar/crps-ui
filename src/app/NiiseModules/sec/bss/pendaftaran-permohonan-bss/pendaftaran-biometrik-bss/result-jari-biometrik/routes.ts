import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./result-jari-biometrik.component').then(m => m.ResultJariBiometrikComponent),
    data: {
      title: `Result Jari`
    }
  },
  

  
];

