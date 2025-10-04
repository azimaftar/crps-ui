import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AtkpiRoutingModule } from './atkpi-routing.module';
import { DraftFormComponent } from './draft/draft-form/draft-form.component';
import { DraftListComponent } from './draft/draft-list/draft-list.component';
import { DraftApprovalComponent } from './draft/draft-approval/draft-approval.component';
import { DraftMainComponent } from './draft/draft-main/draft-main.component';


@NgModule({
  declarations: [
    DraftFormComponent,
    DraftListComponent,
    DraftApprovalComponent,
    DraftMainComponent,
  ],
  imports: [
    CommonModule,
    AtkpiRoutingModule
  ]
})
export class AtkpiModule { }
