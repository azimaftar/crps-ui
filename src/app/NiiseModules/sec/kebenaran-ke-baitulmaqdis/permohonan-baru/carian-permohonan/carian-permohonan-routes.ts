import { Routes } from '@angular/router';
import { CarianPermohonanComponent } from './carian-permohonan.component';
import { MaklumatAgensiComponent } from '../maklumat-agensi/maklumat-agensi.component';
import { SenaraiIndividuComponent } from '../senarai-individu/senarai-individu.component';
import { MaklumatIndividuComponent } from '../maklumat-individu/maklumat-individu.component';
export const CARIAN_PERMOHONAN_ROUTES: Routes = [
  { path: '', component: CarianPermohonanComponent },
  { path: 'maklumat-agensi', component: MaklumatAgensiComponent },
  { path: 'senarai-individu', component: SenaraiIndividuComponent },
  { path: 'maklumat-individu', component: MaklumatIndividuComponent },
];
