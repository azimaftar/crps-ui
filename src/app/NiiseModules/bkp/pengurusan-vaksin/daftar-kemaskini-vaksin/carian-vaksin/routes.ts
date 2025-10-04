import { Routes } from '@angular/router';
import { CarianVaksinComponent } from './carian-vaksin.component';
import { DaftarVaksinComponent } from '../daftar-vaksin/daftar-vaksin.component';
import { KemaskiniVaksinComponent } from '../carian-vaksin/kemaskini-vaksin/kemaskini-vaksin.component';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./carian-vaksin.component').then(m => m.CarianVaksinComponent),
    data: {
      title: `Carian Vaksin`
    }
  },

   { 
  path: 'kemaskini-vaksin/:vaccName', 
  loadComponent: () => import('../carian-vaksin/kemaskini-vaksin/kemaskini-vaksin.component')
    .then(m => m.KemaskiniVaksinComponent) 
  }


];



