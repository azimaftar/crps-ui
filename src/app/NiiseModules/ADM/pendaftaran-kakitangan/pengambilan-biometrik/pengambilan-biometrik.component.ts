import { Component, OnInit } from '@angular/core';
import { StepperComponent } from './stepper/stepper.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  CardModule,
  NavModule,
  GridModule,
  ModalModule,
} from '@coreui/angular';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-pengambilan-biometrik',
  templateUrl: './pengambilan-biometrik.component.html',
  styleUrl: './pengambilan-biometrik.component.scss',
  standalone: true,
  imports: [
    CommonModule,
    CardModule,
    GridModule,
    NavModule,
    ModalModule,
    FormsModule,
    StepperComponent,
  ],
})
export class PengambilanBiometrikComponent implements OnInit {
  constructor(
    private router: Router,
    private apiService: ApiService,
    private route: ActivatedRoute
  ) {}

  // Current active step tracking
  currentMainStep = 3;
  currentSubStep = 0;

  // Input Field Logic
  readonlyField = true;

  maklumatBiometrik = {
    statusCapJari: '(Wujud/ Tidak Wujud/ Tidak Lengkap)',
    statusWajah: '(Wujud/ Tidak Wujud/ Tidak Lengkap)',
    statusIris: '(Wujud/ Tidak Wujud/ Tidak Lengkap)',
  };

  //Modal Logic
  capJariModalVisible = false;
  irisModalVisible = false;
  wajahModalVisible = false;
  carianModalVisible = false;

  //capJariModalVisible modal logic
  capJariModalconfirm(visibility: boolean) {
    this.capJariModalVisible = visibility;
  }

  //irisModalVisible modal logic
  irisModalconfirm(visibility: boolean) {
    this.irisModalVisible = visibility;
  }

  //wajahModalVisible modal logic
  wajahModalconfirm(visibility: boolean) {
    this.wajahModalVisible = visibility;
  }

  //carianModalVisible modal logic
  carianModalconfirm(visibility: boolean) {
    this.carianModalVisible = visibility;
  }

  navigateClosePage() {
    localStorage.removeItem('maklumatKakitangan');
    localStorage.removeItem('maklumatNoDocID');
    this.router.navigate(['adm/pendaftaran-kakitangan/pendaftaran-kakitangan']);
  }

  ngOnInit(): void {}
}
