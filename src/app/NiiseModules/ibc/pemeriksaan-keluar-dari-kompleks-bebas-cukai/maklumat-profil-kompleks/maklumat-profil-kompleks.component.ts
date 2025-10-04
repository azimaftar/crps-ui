// import { Component } from '@angular/core';
import { Component, OnInit, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router, RouterModule, ActivatedRoute  } from '@angular/router';
import { NotificationModalComponent } from '../../../../core/components/notification-modal/notification-modal.component';

// CoreUI Imports
import {
  CardComponent,           // <c-card>
  CardHeaderComponent,     // <c-card-header>
  CardBodyComponent,       // <c-card-body>
  RowComponent,            // <c-row>
  ColComponent,            // <c-col>
  ButtonDirective,         // [cButton]
} from '@coreui/angular';

@Component({
  selector: 'app-maklumat-profil-kompleks',
  standalone: true,
  imports: [CommonModule,
      ReactiveFormsModule,
      RouterModule,
      NotificationModalComponent,
      CardComponent,
      CardHeaderComponent,
      CardBodyComponent,
      RowComponent,
      ColComponent,
      ButtonDirective],
  templateUrl: './maklumat-profil-kompleks.component.html',
  styleUrl: './maklumat-profil-kompleks.component.scss'
})

export class MaklumatProfilKompleksComponent implements OnInit, AfterViewInit {
  profilForm!: FormGroup;
  visitorType: string = '';
  currentStep = 3;
  photoUrl = '';
  dariCapJariEmpatPost: boolean = false;
  ambilWajahIrisDisabled: boolean = false;
  showBiometricModal = false;
  showModal = false;
  showModalAlert = false;
  modalTitle = '';
  openBiometricAfterAlert = false;
  toNextPage = true;

  steps = [
    { number: 1, title: 'Maklumat Profil Pengembara', route: '/maklumat-profil-ibc' },
  ];

  @ViewChild('ambilWajahIrisButton', { static: false }) ambilWajahIrisButton!: ElementRef;

  constructor(private fb: FormBuilder,
              private router: Router,
              private route: ActivatedRoute) {}

  ngOnInit(): void {
    const currentRoute = this.router.url;
    const matched = this.steps.find(s => s.route === currentRoute);
    this.currentStep = matched ? matched.number : 1;

    this.profilForm = this.fb.group({
      visitorType: [{value:'Warganegara', disabled: true}],
      jenisPemeriksaan: [{value:'Masuk', disabled: true}],
      earlydoc: [{value:'H', disabled: true}],
      journeyType: [{value:'Antarabangsa', disabled: true }],
      docType: [{value:'P - Passport', disabled: true }],
      docNo: [{value:'A0000002', disabled: true }],
      kpNo: [{value:'9803300225489', disabled: true }],
      nationality: [{value:'MYS', disabled: true }],
      expiryDate: [{value:'2028-01-20',  disabled: true }],
      countryIssue: [{value: 'MYS - Malaysia',  disabled: true }],
      name: [{value:'Muhammad Russaini Bin Idrus',  disabled: true }],
      printedName: [{value:'Muhammad Russaini Bin Idrus',  disabled: true }],
      dob: [{value:'2028-01-20',  disabled: true }],
      issueDatePassport: [{value:'20 Januari 1992',  disabled: true }],
      gender: [{value: 'Lelaki',  disabled: true }],
      pasType: [{value: 'Pas Lawatan Sosial'}],
      pasExpiryDate: [{value: '2028-01-20',  disabled: false }],
      vesselNo: [{value: 'OD1007', disabled: false}],
      movementType: [{value:'Periksa Masuk', disabled: true}],
      entryBranch: [{value:'KLIA Terminal 1', disabled: true}],
      entryDate: [{value: '2028-01-20', disabled: true}],
      entryTime: [{value: '18:05:27',  disabled: true }]
    });

    this.profilForm.get('visitorType')?.valueChanges.subscribe(value => {
      console.log('Pilihan Jenis Pelawat:', value);
      console.log('isWarganegara:', value === '1');
    });

    if (history.state && history.state.dariCapJariEmpatPost) {
      this.dariCapJariEmpatPost = true;
      console.log("Datang dari cap-jari-four-post-ibc");
    }
  }

  ngAfterViewInit(): void {
    setTimeout(() => {
      this.ambilWajahIrisDisabled = this.ambilWajahIrisButton?.nativeElement?.disabled ?? false;
    });
  }

  get isWarganegara(): boolean {
    return this.profilForm.get('visitorType')?.value === '1';
  }

  get isAnakKapal(): boolean {
    return this.profilForm.get('visitorType')?.value === '2';
  }

  captureFaceAndIris(){
    console.log('Capturing face and iris...');
    this.router.navigate(['../wajah-dan-iris-kompleks'],  {relativeTo: this.route});
  }

  onValidateFormClick(): void {
    console.log('Simpan berjaya');
    const isScanFailed = true;
    const isRecordNotFound = true;

    if (isRecordNotFound) {
      console.log('here 2');
      this.modalTitle = 'Rekod Berjaya Disimpan';
      this.showBiometricModal = false;
      this.showModal = true;
      this.showModalAlert = true;
      this.openBiometricAfterAlert = false;
    }
  }

  handleSimpanClick(): void {
    if (this.ambilWajahIrisDisabled) {
      this.onValidateFormClick();
    } else {
      this.onSubmit();
    }
  }

  captureFingerprint(){
    console.log('Capturing fingerprint...');
    this.router.navigate(['../maklumat-cap-jari-kompleks'],  {relativeTo: this.route});
  }

  onSubmit(){ }

  resetForm() {
    this.router.navigate(['../pemeriksaan-keluar-dari-kompleks-ibc'], { relativeTo: this.route });
  }


  closeModal(): void {
    this.showModal = false;
    this.showModalAlert = false;
    if(this.openBiometricAfterAlert){
      this.showBiometricModal = true;
      this.openBiometricAfterAlert = false;
    }else{
      this.showBiometricModal = false;
    }
  }

  goNext(): void {
    const index = this.steps.findIndex(s => s.number === this.currentStep);
    if (index !== -1 && index + 1 < this.steps.length) {
      this.router.navigate(['../maklumat-visa-ibc'],  {relativeTo: this.route});
    }
  }

  goBack():void  {
    const index = this.steps.findIndex(s => s.number === this.currentStep);
    if (index > 0) {
      this.router.navigate([this.steps[index - 1].route]);
    }
  }

  isFirstStep(){
    return this.currentStep === 1;
  }

  private markFormGroupTouched(): void {
    Object.keys(this.profilForm.controls).forEach(key => {
      const control = this.profilForm.get(key);
      if (control) {
        control.markAsTouched();
      }
    });
  }
}
