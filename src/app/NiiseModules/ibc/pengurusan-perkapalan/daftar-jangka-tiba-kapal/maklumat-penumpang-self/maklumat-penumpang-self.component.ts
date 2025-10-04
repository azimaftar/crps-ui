// import { Component } from '@angular/core';
import { Component, OnInit, } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router, RouterModule, ActivatedRoute  } from '@angular/router';
import { ViewChild, ElementRef } from '@angular/core';
//import { NotificationModalComponent } from '../../../../core/components/notification-modal/notification-modal.component';


// CoreUI Imports - ALL REQUIRED IMPORTS
import {
  CardComponent,           // <c-card>
  CardHeaderComponent,     // <c-card-header>
  CardBodyComponent,       // <c-card-body>
  RowComponent,            // <c-row>
  ColComponent,            // <c-col>
  ButtonDirective,         // [cButton]
  FormLabelDirective,      // cLabel
  FormControlDirective,    // cFormControl
  FormSelectDirective,     // cFormSelect
  FormModule,             // For form directives
  InputGroupComponent,     // <c-input-group>
  InputGroupTextDirective, // <c-input-group-text>
  FormCheckComponent,
} from '@coreui/angular';

// Interface for ship data
interface ShipData {
  namaKapal: string;
  noImo: string;
  noRasmi: string;
}

@Component({
  selector: 'app-maklumat-penumpang-self',
  standalone:true,
  imports: [
    CommonModule,
      ReactiveFormsModule,
      RouterModule,
      CardComponent,
      CardHeaderComponent,
      CardBodyComponent,
      RowComponent,
      ColComponent,
      ButtonDirective,
      FormLabelDirective,     
      FormControlDirective,  
      FormModule, 
      ReactiveFormsModule,
      FormCheckComponent,     // For <c-form-check>
      FormLabelDirective,     // For [cFormLabel] 
  ],
  templateUrl: './maklumat-penumpang-self.component.html',
  styleUrl: './maklumat-penumpang-self.component.scss'
})
export class MaklumatPenumpangSelfComponent {

//ReactiveModule Form
  profilForm!: FormGroup;

  // Untuk tukar struktur paparan berdasarkan jenis pelawat
  // isWarganegara: boolean = true;
  // isAnakKapal: boolean = true;
  visitorType: string = '';

  //Define current step
  currentStep = 3;
  photoUrl = '';
  

  //daricapjarifourpost
  dariCapJariEmpatPost: boolean = false;
  ambilWajahIrisDisabled: boolean = false; // default, ikut keperluan


  showBiometricModal = false;
  showModal = false;
  showModalAlert = false;
  modalTitle = '';
  openBiometricAfterAlert = false;
  toNextPage = true;


  // Stepper
  steps = [
    { number: 1, title: 'Maklumat Jangka Tiba Kapal', route: '/maklumat-profil-ibc' },
    { number: 2, title: 'Maklumat Anak Kapal dan Supernumerary', route: '/maklumat-visa-ibc' },
    { number: 3, title: 'Maklumat Penumpang', route: '/maklumat-pas-ibc' },
    { number: 4, title: 'Maklumat Orang Yang Diselamatkan', route: '/maklumat-pengguna-kerap' },
    { number: 5, title: 'Maklumat Penumpang Gelap (Stowaway)', route: '/maklumat-pengguna-kerap' },
    { number: 6, title: 'Maklumat Anak Kapal yang memerlukan rawatan hospital atau yang mati', route: '/maklumat-pengguna-kerap' },
    { number: 7, title: 'Maklumat Penumpang yang memerlukan rawatan hospital atau yang mati', route: '/maklumat-pengguna-kerap' },
    { number: 8, title: 'Maklumat Pergerakan Kapal', route: '/maklumat-pengguna-kerap' },
    { number: 9, title: 'Muat Naik Dokumen', route: '/maklumat-pengguna-kerap' },
  ];
    @ViewChild('ambilWajahIrisButton', { static: false }) ambilWajahIrisButton!: ElementRef;

// Ship list for table
  shipList: ShipData[] = [];
  //Constructor
  constructor(private fb: FormBuilder,
             private router: Router,
               private route: ActivatedRoute
  ) {}

  ngOnInit(): void {

  // Stepper logic
  const currentRoute = this.router.url;
  const matched = this.steps.find(s => s.route === currentRoute);
  this.currentStep = matched ? matched.number : 2;

  // Form initialization
  this.profilForm = this.fb.group({
 visitorType: [''],
 jenisPemeriksaan: [''],
 earlydoc: [''],
 journeyType: [''],
 docType: [''],
 docNo: [''],
 kpNo: [''],
 pasport: [''],
 tarikhTamat: [''],
 bukuPelaut: [''],
 warganegara: [''],
 signOn: [''],
 signOff: [''],
 IMM1: [''],
 IMM2: [''],
 statusAnakKapal: [''],
 statusSupernumerary: [''],
 namaAnakKapal: [''],
 hubunganAnakKapal: [''],
 tarikhTamat2: [''],
 negaraAsalkapal: [''],
 nationality: [''],
 expiryDate: [''],
 countryIssue: [''],
 name: [''],
 printedName: [''],
 dob: [''],
 issueDatePassport: [''],
 gender: [''],
 pasType: [''],
 pasExpiryDate: [''],
 vesselNo: [''],
 movementType: [''],
 entryBranch: [''],
 entryDate: [''],
 entryTime: ['']
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
    // Getter: true kalau pelawat = Warganegara
  get isWarganegara(): boolean {
    return this.profilForm.get('visitorType')?.value === '1';
  }

  // Getter: true kalau pelawat = Anak Kapal
  get isAnakKapal(): boolean {
    return this.profilForm.get('visitorType')?.value === '2';
  }


  //Buttons
  // Biometric Methods
  captureFaceAndIris(){
    console.log('Capturing face and iris...');
    // Implement biometric capture logic here
    this.router.navigate(['../capturing-face-and-iris-ibc'],  {relativeTo: this.route});

  }
    onValidateFormClick(): void {
      console.log('Simpan berjaya');
    const isScanFailed = true; //nnti api letak sini
    const isRecordNotFound = true;  //nnti api letak sini

  if (isRecordNotFound) {
      console.log('here 2');
      this.modalTitle = 'Rekod Berjaya Disimpan';
      this.showBiometricModal = false;
      this.showModal = true;
      this.showModalAlert = true;
      this.openBiometricAfterAlert = false;
    }
    // else{
    // redirect page profil pengembara semak
    // }
  }
    handleSimpanClick(): void {
    const isWajahIrisDisabled = this.ambilWajahIrisButton?.nativeElement?.disabled;

    if (isWajahIrisDisabled) {
      this.onValidateFormClick();
    } else {
      this.onSubmit();
    }
  }

  captureFingerprint(){
    console.log('Capturing fingerprint...');
    // Implement fingerprint capture logic here
  }

  // Form Methods
  onSubmit(){
    // if (this.profilForm.valid) {
    //   console.log('Form submitted:', this.profilForm.value);
    //   // Handle form submission logic here
    // } else {
    //   console.log('Form is invalid');
    //   this.markFormGroupTouched();
    // }
  }

  resetForm() {
    // this.profilForm.reset();
    // this.currentStep = 1;
    // this.photoUrl = '';
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
  

  //Disabled back button bc first page
  isFirstStep(){
    return this.currentStep === 1;
  }

  


  // Helper Methods
  private markFormGroupTouched(): void {
    Object.keys(this.profilForm.controls).forEach(key => {
      const control = this.profilForm.get(key);
      if (control) {
        control.markAsTouched();
      }
    });
}
  
}
