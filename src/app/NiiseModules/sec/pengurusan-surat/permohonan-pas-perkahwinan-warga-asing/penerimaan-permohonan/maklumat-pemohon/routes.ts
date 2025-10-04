import { Routes } from '@angular/router';
import {MaklumatPemohonComponents} from '../maklumat-pemohon/maklumat-pemohon.component';

import { MaklumatPasanganComponents } from './maklumat-pasangan/maklumat-pasangan.component';
import { DokumenSokonganComponents } from './maklumat-pasangan/dokumen-sokongan/dokumen-sokongan.component';

export const routes: Routes = [
  { path: '', component: MaklumatPemohonComponents},
  { path: 'maklumat-pasangan', component: MaklumatPasanganComponents },
  { path: 'maklumat-pasangan/dokumen-sokongan', component: DokumenSokonganComponents},
];

