import { Routes } from '@angular/router';
import { CarianSlComponent } from './carian-sl.component';
import { PaparSlComponent } from './papar-sl/papar-sl.component';
import { PaparSlMaklumatTindakanComponent } from './papar-sl/papar-sl-maklumat-tindakan/papar-sl-maklumat-tindakan.component';
import { PaparSlMaklumatTerperinciComponent } from './papar-sl/papar-sl-maklumat-tindakan/papar-sl-maklumat-terperinci/papar-sl-maklumat-terperinci.component'
import { LupusSlComponent } from './lupus-sl/lupus-sl.component';
import { BatalSlComponent } from './batal-sl/batal-sl.component';
import { PindaSlComponent } from './pinda-sl/pinda-sl.component';
import { KemaskiniSlComponent } from './kemaskini-sl/kemaskini-sl.component'
import { PindaSlMaklumatTindakanComponent } from './pinda-sl/pinda-sl-maklumat-tindakan/pinda-sl-maklumat-tindakan.component';
import { PindaSlDokumenSokonganComponent } from './pinda-sl/pinda-sl-maklumat-tindakan/pinda-sl-dokumen-sokongan/pinda-sl-dokumen-sokongan.component';


export const CARIAN_SL_ROUTES: Routes = [
    { path: '', component: CarianSlComponent },
    { path: 'papar-sl', component: PaparSlComponent },
    { path: 'papar-sl/papar-sl-maklumat-tindakan', component: PaparSlMaklumatTindakanComponent },
    { path: 'papar-sl/papar-sl-maklumat-tindakan/papar-sl-maklumat-terperinci', component: PaparSlMaklumatTerperinciComponent },
    { path: 'lupus-sl', component: LupusSlComponent },
    { path: 'batal-sl', component: BatalSlComponent },
    { path: 'pinda-sl', component: PindaSlComponent },
    { path: 'pinda-sl/pinda-sl-maklumat-tindakan', component: PindaSlMaklumatTindakanComponent },
    { path: 'pinda-sl/pinda-sl-maklumat-tindakan/dokumen-sokongan', component: PindaSlDokumenSokonganComponent },
    { path: 'kemaskini-sl', component: KemaskiniSlComponent },
];
