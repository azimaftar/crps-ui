import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardModule, GridModule, ButtonDirective, ModalModule} from '@coreui/angular';
import { FormsModule } from '@angular/forms';
import { ModalComponentComponent } from '../modal-component/modal-component.component';

@Component({
  selector: 'app-carian-maklumat-pejabat',
  imports: [
    CommonModule,
    CardModule,
    GridModule,
    FormsModule,
    ButtonDirective,
    ModalModule,
    ModalComponentComponent
  ],
  templateUrl: './carian-maklumat-pejabat.component.html',
  styleUrl: './carian-maklumat-pejabat.component.scss'
})
export class CarianMaklumatPejabatComponent {
  showSearchPopUp: boolean = false;

  closeSearchPopUp() {
    this.showSearchPopUp = false;
  }
}
