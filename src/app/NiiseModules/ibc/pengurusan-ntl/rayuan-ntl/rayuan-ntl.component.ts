import { Component,NgModule  } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { NotificationModalComponent } from '../../../../core/components/notification-modal/notification-modal.component';
import {
  ButtonDirective,
  FormCheckComponent,
  FormCheckInputDirective,
  FormCheckLabelDirective,
  FormControlDirective,
  FormDirective,
  FormLabelDirective,
  FormSelectDirective,
  ButtonCloseDirective,
  ModalBodyComponent,
  ModalComponent,
  ModalFooterComponent,
  ModalHeaderComponent,
  ModalTitleDirective,
  ModalToggleDirective,
  ColComponent
} from '@coreui/angular';

@Component({
  selector: 'app-rayuan-ntl',
  imports: [ReactiveFormsModule,
    ColComponent,
    FormsModule, FormDirective,
    FormLabelDirective,
    FormControlDirective,
    FormSelectDirective,
    ButtonDirective,
    ModalToggleDirective,
    ModalComponent,
    ModalHeaderComponent,
    ModalTitleDirective,
    ButtonCloseDirective,
    ModalBodyComponent,
    ModalFooterComponent,
    NotificationModalComponent],
  templateUrl: './rayuan-ntl.component.html',
  styleUrl: './rayuan-ntl.component.scss'
})
export class RayuanNtlComponent {

  constructor(private router: Router, private route: ActivatedRoute) { }
  showModal: boolean = false;
  showModalAlert: boolean = false;
  modalTitle: string = '';
  toNextPage() :void{
     this.router.navigate(['../rayuan-ntl-form'],  {relativeTo: this.route});
  }
 

  closeModal() {
    this.showModal = false;
    this.showModalAlert = false;
  }

 
}
