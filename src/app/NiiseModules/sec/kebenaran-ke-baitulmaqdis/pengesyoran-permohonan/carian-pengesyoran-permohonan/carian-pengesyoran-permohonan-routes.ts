import { Routes } from '@angular/router';
import { CarianPengesyoranPermohonanComponent } from './carian-pengesyoran-permohonan.component';
import { PengesyoranMaklumatAgensiComponent } from '../pengesyoran-maklumat-agensi/pengesyoran-maklumat-agensi.component';
import { PengesyoranSenaraiIndividuComponent } from '../pengesyoran-senarai-individu/pengesyoran-senarai-individu.component';
import { PengesyoranMaklumatIndividuComponent } from '../pengesyoran-maklumat-individu/pengesyoran-maklumat-individu.component';
import { KeputusanPengesyoranPermohonanComponent } from '../keputusan-pengesyoran-permohonan/keputusan-pengesyoran-permohonan.component';

export const CARIAN_PENGESYORAN_ROUTES: Routes = [
  { path: '', component: CarianPengesyoranPermohonanComponent },
  { path: 'pengesyoran-maklumat-agensi', component: PengesyoranMaklumatAgensiComponent },
  { path: 'pengesyoran-senarai-individu', component: PengesyoranSenaraiIndividuComponent },
  { path: 'pengesyoran-maklumat-individu', component: PengesyoranMaklumatIndividuComponent },
  { path: 'keputusan-pengesyoran-permohonan', component: KeputusanPengesyoranPermohonanComponent },
];
