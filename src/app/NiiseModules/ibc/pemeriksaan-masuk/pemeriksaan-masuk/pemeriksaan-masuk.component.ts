import { Component, ViewChild } from '@angular/core';
import { ReusableTabComponent } from './../../shared/reusable-tab/reusable-tab.component';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
//import { MaklumatPengembaraServicesService } from 'src/app/core/services/ibc-services/maklumat-pengembara-services.service';
import { MaklumatPengembaraServicesService } from '../../../../core/services/ibc-services/maklumat-pengembara-services.service';
import { data } from './pasport';
import { DomSanitizer } from '@angular/platform-browser';
import { PemeriksaanMasukService } from '../../../../core/services/ibc-services/pemeriksaan-masuk.service';
import { NotificationModalComponent } from '../../shared/notification-modal/notification-modal.component';

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
  ModalFooterComponent,
  ModalHeaderComponent,
  ModalTitleDirective,
  ModalToggleDirective,
  //ModalHeaderComponent,
  //ModalFooterComponent,        // <c-modal-body>
} from '@coreui/angular';

import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { NgClass } from '@angular/common';

interface FormData {
  travelType?: string,
  Type?: string;
  Name?: string;
  Gender?: string;
  IssueState?: string;
  Nationality?: string;
  DOB?: string;
  DocNo?: string;
  DateIssue?: string;
  DateExpiry?: string;
  RemainderTerm?: string;
  Height?: string;
  PersonalNo?: string;
  Age?: string;
  Result?: string;
  ChipType?: string;
  DSCertIssue?: string;
  Authority?: string;
  ScanID?: string;
  EPassport?: string;
  FRR?: string;
  DPImg: string;
}


@Component({
  selector: 'app-pemeriksaan-masuk',
  imports: [
    CardComponent,
    CardBodyComponent,
    RowComponent,
    ColComponent,
    ButtonDirective,
    ButtonGroupComponent,
    ReusableTabComponent,
    ReactiveFormsModule,
    RouterModule,
    ModalBodyComponent,
    ModalComponent,
    ModalFooterComponent,
    ModalHeaderComponent,
    ModalTitleDirective,
    ModalToggleDirective,
    CardHeaderComponent,
    NgClass,
    NotificationModalComponent,

  ],
  templateUrl: './pemeriksaan-masuk.component.html',
  styleUrl: './pemeriksaan-masuk.component.scss'
})
export class PemeriksaanMasukComponent {

  @ViewChild('notificationModal') notificationModal!: NotificationModalComponent;
  // Step navigation
  currentStep = 1;

  steps = [
    'Maklumat Profil Pengembara',
    'Maklumat Visa',
    'Maklumat Pas/Permit',
    'Maklumat Pengguna Kerap (FTF)',
    'Sign On To Join Ship'
  ];

  visibleSidebar = true;

  //Form
  maklumatPengembaraForm!: FormGroup;

  constructor(private fb: FormBuilder,
    private router: Router,
    private route: ActivatedRoute,
    private pengembaraService: MaklumatPengembaraServicesService,
    private sanitizer: DomSanitizer,
    private pemeriksaanMasukService: PemeriksaanMasukService
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
      travelType: [{ value: 'Antarabangsa', disabled: true }],
      DateExpiry: [{ value: '09/05/2027', disabled: true }],
      DateIssue:[{ value: '09/05/2025', disabled: true }],
      ProducingCountry:[{ value: 'JPN - JAPAN', disabled: true }],

      visitorType: [{ value: 'Warga Asing', disabled: true }],
      jenisPemeriksaan: [{ value: '', disabled: true }],
      journeyTyp: [{ value: 'Masuk', disabled: true }],
      docType: [{ value: 'Pasport Antarabangsa', disabled: true }],
      docNo: [{ value: 'JP7785429', disabled: true }],
      nationality: [{ value: 'JPN', disabled: true }],
      countryIssue: [{ value: '', disabled: true }],
      kpNo: [{ value: '', disabled: true }],
      docInd: [{ value: '', disabled: true }],
      expiryDate: [{ value: '', disabled: true }],
      name: [{ value: 'MATSUI OSAKA', disabled: true }],
      printedName: [{ value: '', disabled: true }],
      DOB: [{ value: '19/09/1989', disabled: true }],
      gender: [{ value: 'Lelaki', disabled: true }],
      pasType: [{ value: '', disabled: true }],
      pasExpiryDate: [{ value: '', disabled: true }],
      vesselNo: [{ value: '', disabled: true }],
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
        DOB: semakData.DOB,
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
    this.router.navigate(['ibc/pemeriksaan-masuk/biometrik-wajah'], { queryParams: { statusImbas: "imbasWajah" } })
  }

  captureFingerprint() {
    console.log('Capturing fingerprint...');
    this.router.navigate(['ibc/pemeriksaan-masuk/biometrik-capjari'], { queryParams: { statusImbas: "imbasJari", jari:"kanan" } })
  }

  simpanMaklumat(): void {

  }

  Pertanyaan(): void {
  // contoh dummy API response
  const apiResponse = {
    status: 'error', // boleh jadi 'success', 'error', 'warning'
    message: 'Maklumat tidak lengkap untuk disimpan.'
  };

  if (this.notificationModal) {
    switch (apiResponse.status) {
      case 'success':
        this.notificationModal.open('Rekod Berjaya Disimpan.', 'success');
        break;

      case 'error':
        this.notificationModal.open(apiResponse.message || 'Ralat berlaku semasa simpan rekod.', 'error');
        break;

      case 'warning':
        this.notificationModal.open(apiResponse.message || 'Amaran: Sila semak semula maklumat.', 'warning');
        break;

      default:
        this.notificationModal.open('Status tidak dikenali.', 'info');
        break;
    }
  }
}


  emailStatus():void{
    this.router.navigate(['ibc/pemeriksaan-masuk/emel-notifikasi']);
  }

  resetForm(): void {
    this.router.navigate(['ibc/pemeriksaan-masuk/pemeriksaan-masuk']);
  }

  goToNext(): void {
    this.router.navigate(['ibc/pemeriksaan-masuk/pemeriksaan-masuk-visa']);
  }

  goToPrevious() {
    //Disabled

  }

  formData: FormData = {
      // noDocument: 'A0000002',
      // noIdentification: '980330025489',
      // dateIssued: '20 Januari 1992',
      // expiryDate: '20 Januari 2028',
      // age: '26',
      // nationality: 'MYS',
      // issuingCountry: 'MYS - Malaysia',
      // photoUrl: '', 
      Type: 'P',
      Name: 'MATSUI OSAKA',
      Gender: 'M',
      IssueState: 'JPN',
      Nationality: 'JPN',
      DOB: '1989-09-19',
      DocNo: 'JP7785429',
      DateIssue: '',
      DateExpiry: '2027-05-09',
      RemainderTerm: '-1',
      Height: '180',
      PersonalNo: '980330025489',
      Age: '35',
      Result: 'PASS',
      ChipType: 'IA',
      DSCertIssue: 'MY',
      Authority: '',
      ScanID: '20241001_040422715_OSMOND-R218630',
      EPassport: 'Y',
      FRR: '70',
      DPImg: data
    };
  
    getImageFromBase64(base64: any, format: string = "jpeg"): any {
      return this.sanitizer
        .bypassSecurityTrustResourceUrl(`data:image/${format};base64,${base64}`);
      ;
    }

  // visible = false;
  // title = '';
  // message = '';
  // type: 'info' | 'success' | 'warning' | 'error' = 'info';

  // open(message: string, title: string = 'Notification', type: 'info' | 'success' | 'warning' | 'error' = 'info') {
  //   this.message = message;
  //   this.title = title;
  //   this.type = type;
  //   this.visible = true; // show modal
  // }

  // close() {
  //   this.visible = false; // hide modal
  // }


}
