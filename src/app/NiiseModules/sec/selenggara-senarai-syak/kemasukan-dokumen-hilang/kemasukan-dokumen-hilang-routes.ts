import { Routes } from '@angular/router';
import { KemasukanDokumenHilangComponent } from './kemasukan-dokumen-hilang.component';
import { MaklumatKehilanganDokumenComponent } from './maklumat-kehilangan-dokumen/maklumat-kehilangan-dokumen.component'

export const KEMASUKAN_DOKUMEN_HILANG_ROUTES: Routes = [
    { path: '', component: KemasukanDokumenHilangComponent },
    { path: 'maklumat-kehilangan-dokumen', component: MaklumatKehilanganDokumenComponent},
];
