// import { Component } from '@angular/core';
import { Component, OnInit, } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router, RouterModule, ActivatedRoute} from '@angular/router';
import { ViewChild, ElementRef } from '@angular/core';
import { FormsModule } from '@angular/forms';
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
  ModalComponent,
  ModalBodyComponent,
  ModalFooterComponent,
} from '@coreui/angular';


// Interface for ship data
interface ShipData {
  namaKapal: string;
  noImo: string;
  noRasmi: string;
  // ADD these new properties for file upload:
  uploadedFile?: File | null;
  uploadError?: string | null;
  jawatan?: string; // Add this if not already present
}

// Interface for form data structure
interface FormData {
  namaKapal?: string;
  noDocument?: string;
  noIdentification?: string;
  name?: string;
  dateIssued?: string;
  expiryDate?: string;
  age?: string;
  nationality?: string;
  issuingCountry?: string;
  photoUrl?: string;
  // Add the enabled fields from your form
  jenisPelawat?: string;
  noInputDokumen?: string;
  warganegara?: string;
  tarikhTamat?: string;
}

@Component({
  selector: 'app-maklumat-kapal',
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
      ModalComponent,
      ModalBodyComponent,
      ModalFooterComponent,
      FormsModule
  ],
  templateUrl: './maklumat-kapal.component.html',
  styleUrl: './maklumat-kapal.component.scss'
})
export class MaklumatKapalComponent {

  // Modal Declaration
    @ViewChild('modalStandard') modalStandard!: ModalComponent;
    modalMessage: string = '';
    modalButtonText: string = 'Tutup';

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
 negaraAsalKapal: [''],
 namaAnakKapal: [''],
 hubunganAnakKapal: [''],
 tarikhTamat2: [''],
 jenisdokperjalanan: [''],
 nodokumenperjalanan: [''],
 negarapengeluar: [''],
 tarikhtamatdok: [''],
 pelabuhanEmbark: [''],
 noVisa: [''],
 jenisPenumpang: [''],
 statusPenumpang: [''],
 statusPemeriksaan: [''],
 nationality: [''],
 expiryDate: [''],
 countryIssue: [''],
 name: [''],
 printedName: [''],
 dob: [''],
 issueDatePassport: [''],
 jantina: [''],
 pasType: [''],
 pasExpiryDate: [''],
 vesselNo: [''],
 movementType: [''],
 entryBranch: [''],
 entryDate: [''],
 entryTime: [''],
 namaKapal: [''],
 jenisKapal: [''],
 IMONo: [''],
 callSign: [''], 
 VoyageNo: [''],
 FinalVisit: [''],
 NextVisit: [''],
 BilAnakKapal: [''],
 BilPenumpang: [''],
 NamaNakhoda: [''],
 NamaSyarikatKapal: ['']
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
  
// ADD THESE NEW PROPERTIES FOR FILE UPLOAD:
  defaultFiles: (File | null)[] = [null, null, null]; // For default rows
  defaultFileErrors: (string | null)[] = [null, null, null]; // For default row errors
  
  private readonly MAX_FILE_SIZE = 300 * 1024; // 300KB in bytes
  private readonly ALLOWED_TYPES = [
    'image/jpeg', 'image/jpg', 'image/png', 'image/gif',
    'application/pdf',
    'application/msword',
    'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
  ];

  // ... your existing constructor and ngOnInit ...

  // ADD THESE NEW METHODS FOR FILE UPLOAD:

  // For dynamic ship list items
  onFileSelected(event: any, index: number): void {
    const file = event.target.files[0];
    
    if (!file) {
      return;
    }

    // Initialize uploadedFile and uploadError properties if they don't exist
    if (!this.shipList[index].hasOwnProperty('uploadedFile')) {
      this.shipList[index].uploadedFile = null;
    }
    if (!this.shipList[index].hasOwnProperty('uploadError')) {
      this.shipList[index].uploadError = null;
    }

    // Validate file size
    if (file.size > this.MAX_FILE_SIZE) {
      this.shipList[index].uploadError = 'Saiz fail melebihi 300KB. Sila pilih fail yang lebih kecil.';
      this.shipList[index].uploadedFile = null;
      return;
    }

    // Validate file type
    if (!this.ALLOWED_TYPES.includes(file.type)) {
      this.shipList[index].uploadError = 'Jenis fail tidak dibenarkan. Sila pilih gambar, PDF, atau dokumen Word.';
      this.shipList[index].uploadedFile = null;
      return;
    }

    // File is valid
    this.shipList[index].uploadedFile = file;
    this.shipList[index].uploadError = null;
    
    console.log('File selected for ship index', index, ':', file.name);
    
    // Optional: Upload file to server here
    // this.uploadFileToServer(file, index);
  }

  triggerFileUpload(index: number): void {
    const fileInput = document.getElementById(`fileUpload_${index}`) as HTMLInputElement;
    fileInput?.click();
  }

  removeFile(index: number): void {
    this.shipList[index].uploadedFile = null;
    this.shipList[index].uploadError = null;
    
    // Clear the file input
    const fileInput = document.getElementById(`fileUpload_${index}`) as HTMLInputElement;
    if (fileInput) {
      fileInput.value = '';
    }
  }

  // For default rows
  onDefaultFileSelected(event: any, index: number): void {
    const file = event.target.files[0];
    
    if (!file) {
      return;
    }

    // Validate file size
    if (file.size > this.MAX_FILE_SIZE) {
      this.defaultFileErrors[index] = 'Saiz fail melebihi 300KB. Sila pilih fail yang lebih kecil.';
      this.defaultFiles[index] = null;
      return;
    }

    // Validate file type
    if (!this.ALLOWED_TYPES.includes(file.type)) {
      this.defaultFileErrors[index] = 'Jenis fail tidak dibenarkan. Sila pilih gambar, PDF, atau dokumen Word.';
      this.defaultFiles[index] = null;
      return;
    }

    // File is valid
    this.defaultFiles[index] = file;
    this.defaultFileErrors[index] = null;
    
    console.log('Default file selected for index', index, ':', file.name);
    
    // Optional: Upload file to server here
    // this.uploadDefaultFileToServer(file, index);
  }

  triggerDefaultFileUpload(index: number): void {
    const fileInput = document.getElementById(`fileUpload_default_${index}`) as HTMLInputElement;
    fileInput?.click();
  }

  removeDefaultFile(index: number): void {
    this.defaultFiles[index] = null;
    this.defaultFileErrors[index] = null;
    
    // Clear the file input
    const fileInput = document.getElementById(`fileUpload_default_${index}`) as HTMLInputElement;
    if (fileInput) {
      fileInput.value = '';
    }
  }

  // Optional: Method to upload file to server
  private uploadFileToServer(file: File, index: number): void {
    const formData = new FormData();
    formData.append('file', file);
    formData.append('shipIndex', index.toString());
    
    // Replace with your actual upload service call
    console.log('Uploading file to server:', file.name);
    
    // Example API call structure:
    // this.http.post('/api/upload-ship-file', formData).subscribe({
    //   next: (response) => {
    //     console.log('File uploaded successfully', response);
    //   },
    //   error: (error) => {
    //     console.error('File upload failed', error);
    //     this.shipList[index].uploadError = 'Gagal memuat naik fail. Sila cuba lagi.';
    //     this.shipList[index].uploadedFile = null;
    //   }
    // });
  }

  // Optional: Method to upload default row file to server
  private uploadDefaultFileToServer(file: File, index: number): void {
    const formData = new FormData();
    formData.append('file', file);
    formData.append('defaultRowIndex', index.toString());
    
    // Replace with your actual upload service call
    console.log('Uploading default file to server:', file.name);
    
    // Example API call structure:
    // this.http.post('/api/upload-default-file', formData).subscribe({
    //   next: (response) => {
    //     console.log('Default file uploaded successfully', response);
    //   },
    //   error: (error) => {
    //     console.error('Default file upload failed', error);
    //     this.defaultFileErrors[index] = 'Gagal memuat naik fail. Sila cuba lagi.';
    //     this.defaultFiles[index] = null;
    //   }
    // });
  }

  // Helper method to format file size for display
  formatFileSize(bytes: number): string {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
  }

  // Response codes for testing
  responseCode: string = ''; 
  // responseCode: string = 'IBC-E009'; // Test mandatory fields error

  // Modal methods
  openStandardModal(): void {
    this.modalStandard.visible = true;
  }

  hideStandardModal(): void {
    this.modalStandard.visible = false;
  }

  // Handle modal OK button click
  modalStandardClick(): void {
    switch (this.responseCode) {
      case 'IBC-E009':
        console.log("Mandatory fields error - staying on current page");
        this.hideStandardModal();
        // Stay on current page to allow user to fix the issue
        break;
      default:
        this.hideStandardModal();
        break;
    }
  }

  // Form data object matching template bindings
  formData: FormData = {
    // Enabled fields (user can input these)
    noInputDokumen: '',
    warganegara: '',
    tarikhTamat: '',
    namaKapal: '',
    
    // Disabled fields (pre-filled data)
    noDocument: 'A0000002',
    noIdentification: '980330025489',
    name: 'Mohd Rusaini Bin Ishak',
    dateIssued: '20 Januari 1992',
    expiryDate: '20 Januari 2028',
    age: '26',
    nationality: 'MYS',
    issuingCountry: 'MYS - Malaysia',
    photoUrl: '' // Add actual photo URL when available
  };

}

