import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DraftFormComponent } from './draft/draft-form/draft-form.component';
import { DraftListComponent } from './draft/draft-list/draft-list.component';
import { DraftApprovalComponent } from './draft/draft-approval/draft-approval.component';

//import individual sections inside draft-form and draft-list
import { CarianComponent } from './draft/draft-form/carian/carian.component';
import { MaklumatPegawaiComponent } from './draft/draft-form/maklumat-pegawai/maklumat-pegawai.component';
import { MaklumatDrafComponent } from './draft/draft-form/maklumat-draf/maklumat-draf.component';
import { SemakanDrafComponent } from './draft/draft-list/semakan-draf/semakan-draf.component';

const routes: Routes = [

  //route for creating new draf
  { path: 'draft-form', component: DraftFormComponent }, 

  //route for searching document
  //{ path: 'carian', component: CarianComponent },

  //route for carian page for searching (dalam draft-list)
  { path: 'draft-list', component: DraftListComponent },

  //route for maklumat pegawai
  { path: 'maklumat-pegawai', component: DraftListComponent },

  //route for draf page
  { path: 'maklumat-draf', component: MaklumatDrafComponent },

  //route for reviewing draf
  //{ path: 'semakan-draf', component: SemakanDrafComponent },

  //route for jawatankuasa approval
  { path: 'approval', component: DraftApprovalComponent },

  //Default redirection
  {
    path: '**',
    redirectTo: 'pendaftaran-baru', // Default redirection
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AtkpiRoutingModule { }
