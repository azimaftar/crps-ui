import { Component } from '@angular/core';
import { CardModule, CardHeaderComponent, CardBodyComponent, CardFooterComponent, FormModule, GridModule, ModalModule } from '@coreui/angular';
import { ButtonDirective } from '@coreui/angular';
import { StepperComponent } from '../stepper/stepper.component';
import { Router } from '@angular/router';
import { cilCheckCircle } from '@coreui/icons';
import { IconModule, IconSetService } from '@coreui/icons-angular';
import { ModalComponentComponent } from '../modal-component/modal-component.component';

interface MaklumatPelupusanKadKuasa {
  noSiriKadKuasa: string;
  tarikhDikeluarkan: string;
  tarikhTidakAktif: string;
  prosesKetidakAktifan: string;
}

@Component({
  selector: 'app-maklumat-pelupusan-kad-kuasa',
  imports: [
    CardModule,
    CardHeaderComponent,
    CardBodyComponent,
    CardFooterComponent,
    FormModule,
    GridModule,
    ButtonDirective,
    StepperComponent,
    ModalModule,
    IconModule,
    ModalComponentComponent
  ],
  templateUrl: './maklumat-pelupusan-kad-kuasa.component.html',
  styleUrl: './maklumat-pelupusan-kad-kuasa.component.scss'
})
export class MaklumatPelupusanKadKuasaComponent {
  icons = { cilCheckCircle };

  constructor(private router: Router, private iconSet: IconSetService) {
    this.iconSet.icons = { cilCheckCircle };
  }

  maklumatPelupusanKadKuasa: MaklumatPelupusanKadKuasa = {
    noSiriKadKuasa: '',
    tarikhDikeluarkan: '',
    tarikhTidakAktif: '',
    prosesKetidakAktifan: '',
  };
  
  currentMainStep = 2;
  PastiyesPasti: boolean = false;
  RekodDihantarModal: boolean = false;

  openRekodDihantarModal() {
    this.RekodDihantarModal = true;
  }

  closeRekodDihantarModal() {
    this.RekodDihantarModal = false;
  }

  //this is to find the previous path
  navigatePreviousPage() {
    this.router.navigate([
      'adm/pelupusan-kad-kuasa/paparan-maklumat-pegawai-bagi-pelupusan-kad-kuasa',
    ]);
  }

  //this is to find next page path
  navigateNextPage() {
    this.router.navigate([
      'adm/pelupusan-kad-kuasa/kemas-kini-maklumat-pelupusan-keputusan-cgso',
    ]);
  } 

  SimpanRekod() {
    this.PastiyesPasti = true;
  }

  closePastiModal(): void {//model for cmn-S001
    this.PastiyesPasti = false;
  }
}
