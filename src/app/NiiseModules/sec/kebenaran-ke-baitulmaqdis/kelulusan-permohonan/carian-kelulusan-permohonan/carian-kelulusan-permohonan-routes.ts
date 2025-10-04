import { Routes } from '@angular/router';
import { CarianKelulusanPermohonanComponent } from './carian-kelulusan-permohonan.component';
import { KelulusanMaklumatAgensiComponent } from '../kelulusan-maklumat-agensi/kelulusan-maklumat-agensi.component';
import { KelulusanSenaraiIndividuComponent } from '../kelulusan-senarai-individu/kelulusan-senarai-individu.component';
import { KelulusanMaklumatIndividuComponent } from '../kelulusan-maklumat-individu/kelulusan-maklumat-individu.component';
import { KeputusanKelulusanPermohonanComponent } from '../keputusan-kelulusan-permohonan/keputusan-kelulusan-permohonan.component';

export const CARIAN_PENGESYORAN_ROUTES: Routes = [
  { path: '', component: CarianKelulusanPermohonanComponent },
  { path: 'kelulusan-maklumat-agensi', component: KelulusanMaklumatAgensiComponent },
  { path: 'kelulusan-senarai-individu', component: KelulusanSenaraiIndividuComponent },
  { path: 'kelulusan-maklumat-individu', component: KelulusanMaklumatIndividuComponent },
  { path: 'keputusan-kelulusan-permohonan', component: KeputusanKelulusanPermohonanComponent },
];
