import { Routes } from '@angular/router';
import { TambahSlComponent } from './tambah-sl.component';
import { TambahSlMaklumatTindakanComponent } from './tambah-sl-maklumat-tindakan/tambah-sl-maklumat-tindakan.component';
import { TambahSlDokumenSokonganComponent } from './tambah-sl-maklumat-tindakan/tambah-sl-dokumen-sokongan/tambah-sl-dokumen-sokongan.component';

export const TAMBAH_SL_ROUTES: Routes = [
    { path: '', component: TambahSlComponent },
    { path: 'tambah-sl-maklumat-tindakan', component: TambahSlMaklumatTindakanComponent },
    { path: 'tambah-sl-maklumat-tindakan/tambah-sl-dokumen-sokongan', component: TambahSlDokumenSokonganComponent },
];
