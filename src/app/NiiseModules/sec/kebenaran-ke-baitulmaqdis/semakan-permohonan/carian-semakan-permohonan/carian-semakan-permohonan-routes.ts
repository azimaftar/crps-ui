import { Routes } from '@angular/router';
import { CarianSemakanPermohonanComponent } from './carian-semakan-permohonan.component';
import { SemakanMaklumatAgensiComponent } from '../semakan-maklumat-agensi/semakan-maklumat-agensi.component';
import { SemakanSenaraiIndividuComponent } from '../semakan-senarai-individu/semakan-senarai-individu.component';
import { SemakanMaklumatIndividuComponent } from '../semakan-maklumat-individu/semakan-maklumat-individu.component';
import { KeputusanSemakanPermohonanComponent } from '../keputusan-semakan-permohonan/keputusan-semakan-permohonan.component';

export const CARIAN_SEMAKAN_ROUTES: Routes = [
  { path: '', component: CarianSemakanPermohonanComponent },
  { path: 'semakan-maklumat-agensi', component: SemakanMaklumatAgensiComponent },
  { path: 'semakan-senarai-individu', component: SemakanSenaraiIndividuComponent },
  { path: 'semakan-maklumat-individu', component: SemakanMaklumatIndividuComponent },
  { path: 'keputusan-semakan-permohonan', component: KeputusanSemakanPermohonanComponent },
];
