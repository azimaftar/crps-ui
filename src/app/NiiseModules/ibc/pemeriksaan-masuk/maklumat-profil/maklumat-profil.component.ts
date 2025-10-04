import { Component } from '@angular/core';
import { ReusableTabComponent } from './../../shared/reusable-tab/reusable-tab.component';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
//import { MaklumatPengembaraServicesService } from 'src/app/core/services/ibc-services/maklumat-pengembara-services.service';
import { MaklumatPengembaraServicesService } from '../../../../core/services/ibc-services/maklumat-pengembara-services.service';

// CoreUI Imports
import {
  CardComponent,           // <c-card>
  CardHeaderComponent,     // <c-card-header>
  CardBodyComponent,       // <c-card-body>
  CardFooterComponent,
  RowComponent,            // <c-row>
  ColComponent,            // <c-col>
  ButtonDirective,          // [cButton]
  ModalComponent,           // <c-modal>
  //ModalToggleDirective,     //[cModalToggle]
  ButtonGroupComponent,
  ModalBodyComponent,
  //ModalHeaderComponent,
  //ModalFooterComponent,        // <c-modal-body>
} from '@coreui/angular';

import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-maklumat-profil',
  standalone: true,
  imports: [CardComponent,
    CardBodyComponent,
    RowComponent,
    ColComponent,
    ButtonDirective,
    ButtonGroupComponent,
    ReusableTabComponent,
    ReactiveFormsModule,
    RouterModule
  ],
  templateUrl: './maklumat-profil.component.html',
  styleUrl: './maklumat-profil.component.scss'
})

export class MaklumatProfilComponent {

  // Step navigation
  currentStep = 1;

  steps = [
    'Maklumat Profil Pengembara',
    'Maklumat Visa',
    'Maklumat Pas/Permit',
    'Maklumat Pengguna Kerap (FTF)',
    'Sign On To Join Ship'
  ];


  //Form
  maklumatPengembaraForm!: FormGroup;

  constructor(private fb: FormBuilder,
    private router: Router,
    private route: ActivatedRoute,
    private pengembaraService: MaklumatPengembaraServicesService
  ) {
    this.maklumatPengembaraForm = this.fb.group({
      // Jenis Pelawat -
      // Jenis Pemeriksaan  Jenis Perjalanan
      // Jenis Dokumen  No. Dokumen
      // Warganegara  Negara Pengeluar
      // No Kad Pengenalan  Awalan Dokumen
      // Tarikh Tamat
      // Nama -
      // Nama Dicetak -
      // Tarikh Lahir  Jantina
      // Jenis Pas  Tarikh Tamat Pas
      // No Vessel/Kenderaan  Jenis Pergerakan
      // Pintu Masuk  Tarikh Masuk
      // Masa Masuk

      visitorType: [{ value: '', disabled: true }],
      jenisPemeriksaan: [{ value: '', disabled: true }],
      journeyTyp: [{ value: 'Masuk', disabled: true }],
      docType: [{ value: '', disabled: true }],
      docNo: [{ value: '', disabled: true }],
      nationality: [{ value: '', disabled: true }],
      countryIssue: [{ value: '', disabled: true }],
      kpNo: [{ value: '', disabled: true }],
      docInd: [{ value: '', disabled: true }],
      expiryDate: [{ value: '', disabled: true }],
      name: [{ value: '', disabled: true }],
      printedName: [{ value: '', disabled: true }],
      dob: [{ value: '', disabled: true }],
      gender: [{ value: '', disabled: true }],
      pasType: [''],
      pasExpiryDate: [''],
      vesselNo: [''],
      movementType: [{ value: 'Pemeriksaan Masuk', disabled: true }],
      entryBranch: [{ value: 'KLIA Terminal 1', disabled: true }],
      entryDate: [{ value: '', disabled: true }],
      entryTime: [{ value: '', disabled: true }]
    });
  }

  isMaklumatLengkap = false;

  //Load page
  ngOnInit(): void {
    this.setCurrentDateTime();

    const semakData = this.pengembaraService.getSemakResponse();
    console.log('Data Retrieved:', semakData);

    if (semakData) {
      this.maklumatPengembaraForm.patchValue({
        visitorType: semakData.visitorType,
        docType: semakData.docType,
        docNo: semakData.docNo,
        docInd: semakData.docInd,
        countryIssue: semakData.countryIssue,
        kpNo: semakData.kpNo,
        dob: semakData.dob,
        gender: semakData.gender,
        name: semakData.name,
        printedName: semakData.printedName
      });
    }

    // For Button Abled/Disabled. Change later when API is done
    this.route.queryParams.subscribe(params => {
      const value = params['maklumat'];
      this.isMaklumatLengkap = value === 'lengkap';
      console.log('isMaklumatLengkap:', this.isMaklumatLengkap);
    });
  }


  get canSave(): boolean {
    return this.isMaklumatLengkap;
  }

  setCurrentDateTime(): void {
    const now = new Date();

    const formattedDate = now.toISOString().split('T')[0]; // "2025-07-23"
    const formattedTime = now.toTimeString().split(':').slice(0, 2).join(':'); // "10:35"

    // Patch values
    this.maklumatPengembaraForm.patchValue({
      entryDate: formattedDate,
      entryTime: formattedTime
    });
  }


  //Buttons
  captureFaceAndIris() {
    console.log('Capturing face and iris...');
    this.router.navigate(['ibc/pemeriksaan-masuk/biometrik-wajah'], { queryParams: { statusImbas: "imbas" } })
  }

  captureFingerprint() {
    console.log('Capturing fingerprint...');
    this.router.navigate(['ibc/pemeriksaan-masuk/biometrik-capjari'], { queryParams: { statusImbas: "imbas" } })
  }

  saveForm(): void {

  }


  resetForm(): void {
    this.router.navigate(['ibc/pemeriksaan-masuk/pemeriksaan-masuk-2'] );
  }

  goToNext(): void {
    this.router.navigate(['ibc/pemeriksaan-masuk/maklumat-visa'], { queryParams: { maklumat: 'lengkap' } });
  }

  goToPrevious() {
    //Disabled

  }

}
