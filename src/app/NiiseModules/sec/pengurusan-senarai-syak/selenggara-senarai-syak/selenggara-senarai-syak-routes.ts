import { Routes } from '@angular/router';
import { CarianSubjekComponent } from './carian-subjek/carian-subjek.component';
import { PindaSubjekComponent } from './pinda-subjek/pinda-subjek.component';
import { LupusSubjekComponent } from './lupus-subjek/lupus-subjek.component';
import { BatalSubjekComponent } from './batal-subjek/batal-subjek.component';
import { PaparSubjekComponent } from './papar-subjek/papar-subjek.component';
import { TambahSubjekComponent } from './tambah-subjek/tambah-subjek.component';
import { TambahSubjekMaklumatTindakanComponent } from './tambah-subjek/maklumat-tindakan/maklumat-tindakan.component';
import { TambahSubjekDokumenSokonganComponent } from './tambah-subjek/maklumat-tindakan/dokumen-sokongan/dokumen-sokongan.component';

export const SELENGGARA_SENARAI_SYAK_ROUTES: Routes = [
  { path: 'carian-subjek', component: CarianSubjekComponent },
  { path: 'pinda-subjek', component: PindaSubjekComponent },
  { path: 'lupus-subjek', component: LupusSubjekComponent },
  { path: 'batal-subjek', component: BatalSubjekComponent },
  { path: 'papar-subjek', component: PaparSubjekComponent },
  { path: 'tambah-subjek', component: TambahSubjekComponent },
  { path: 'tambah-subjek/maklumat-tindakan', component: TambahSubjekMaklumatTindakanComponent },
  { path: 'tambah-subjek/maklumat-tindakan/dokumen-sokongan', component: TambahSubjekDokumenSokonganComponent },
];
