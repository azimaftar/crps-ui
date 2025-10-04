import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router, RouterModule, ActivatedRoute } from '@angular/router';

// Component luar
import { NotificationModalComponent } from '../../../../core/components/notification-modal/notification-modal.component';

// CoreUI
import {
  CardComponent,
  CardHeaderComponent,
  CardBodyComponent,
  RowComponent,
  ColComponent,
  ButtonDirective,
  ModalComponent,
  ModalBodyComponent,
} from '@coreui/angular';

@Component({
  selector: 'app-maklumat-profil-ibc',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule,
    NotificationModalComponent,
    ModalComponent,
    ModalBodyComponent,

    // CoreUI
    CardComponent,
    CardHeaderComponent,
    CardBodyComponent,
    RowComponent,
    ColComponent,
    ButtonDirective,
  ],
  templateUrl: './maklumat-profil-ibc.component.html',
  styleUrl: './maklumat-profil-ibc.component.scss'
})
export class MaklumatProfilIbcComponent implements OnInit {
  profilForm!: FormGroup;
  visitorType: string = '';
  currentStep = 3;
  photoUrl = '';

  // Flag untuk sahkan dari cap jari
  dariCapJariEmpatPost = false;

  showBiometricModal = false;
  showModal = false;
  showModalAlert = false;
  modalTitle = '';
  openBiometricAfterAlert = false;
  toNextPage = true;

  modalMessage: string = '';
  modalButtonText: string = 'OK';

  steps = [
    { number: 1, title: 'Maklumat Profil Pengembara', route: '/maklumat-profil-ibc' },
    { number: 2, title: 'Maklumat Visa', route: '/maklumat-visa-ibc' },
    { number: 3, title: 'Maklumat Pas/Permit', route: '/maklumat-pas-ibc' },
    { number: 4, title: 'Sign On To Join Ship', route: '/maklumat-pengguna-kerap' },
  ];

  @ViewChild('ambilWajahIrisButton', { static: false }) ambilWajahIrisButton!: ElementRef;
  @ViewChild('modalStandard') modalStandard!: ModalComponent;

  constructor(private fb: FormBuilder, private router: Router, private route: ActivatedRoute) {}

  ngOnInit(): void {
    const currentRoute = this.router.url;
    const matched = this.steps.find(s => s.route === currentRoute);
    this.currentStep = matched ? matched.number : 1;

    this.profilForm = this.fb.group({
      visitorType: [{ value: 'Jenis Pelawat', disabled: false }],
      jenisPemeriksaan: [{ value: 'Masuk', disabled: true }],
      earlydoc: [{ value: 'H', disabled: true }],
      journeyType: [{ value: 'Antarabangsa', disabled: true }],
      docType: [{ value: 'P - Passport', disabled: true }],
      docNo: [{ value: 'A0000002', disabled: true }],
      kpNo: [{ value: '9803300225489', disabled: true }],
      nationality: [{ value: 'MYS', disabled: true }],
      expiryDate: [{ value: '2028-01-20', disabled: true }],
      countryIssue: [{ value: 'MYS - Malaysia', disabled: true }],
      name: [{ value: 'Muhammad Russaini Bin Idrus', disabled: true }],
      printedName: [{ value: 'Muhammad Russaini Bin Idrus', disabled: true }],
      dob: [{ value: '2028-01-20', disabled: true }],
      issueDatePassport: [{ value: '20 Januari 1992', disabled: true }],
      gender: [{ value: 'Lelaki', disabled: true }],
      pasType: [{ value: 'Pas Lawatan Sosial' }],
      pasExpiryDate: [{ value: '2028-01-20', disabled: true }],
      vesselNo: [{ value: 'OD1007', disabled: true }],
      movementType: [{ value: 'Periksa Masuk', disabled: true }],
      entryBranch: [{ value: 'KLIA Terminal 1', disabled: true }],
      entryDate: [{ value: '2028-01-20', disabled: true }],
      entryTime: [{ value: '18:05:27', disabled: true }]
    });

    // Debug state dari route
    console.log('Router state:', history.state);

    if (history.state && history.state.dariCapJariEmpatPost) {
      this.dariCapJariEmpatPost = true;
      console.log("✅ Datang dari cap-jari-four-post-ibc");
    }
  }

  // Enable SIMPAN kalau datang dari cap-jari
  get isSimpanButtonEnabled(): boolean {
    return this.dariCapJariEmpatPost;
  }

  get isWarganegara(): boolean {
    return this.profilForm.get('visitorType')?.value === '1';
  }

  get isAnakKapal(): boolean {
    return this.profilForm.get('visitorType')?.value === '2';
  }

  captureFaceAndIris() {
    console.log('Capturing face and iris...');
    this.router.navigate(['../capturing-face-and-iris-ibc'], { relativeTo: this.route });
  }

  handleSimpanClick(): void {
    this.onValidateFormClick();
  }

  onValidateFormClick(): void {
    console.log('Simpan berjaya');

    const isRecordNotFound = true;

    if (isRecordNotFound) {
      this.modalTitle = 'Rekod Berjaya Disimpan';
      this.showModal = true;
      this.showModalAlert = true;
      this.showBiometricModal = false;
    }
  }

  captureFingerprint() {
    console.log('Capturing fingerprint...');
    this.router.navigate(['../cap-jari-ibc'], { relativeTo: this.route });
  }

  onSubmit() {
    if (this.profilForm.valid) {
      console.log('Form submitted:', this.profilForm.value);
    } else {
      console.log('Form is invalid');
      this.markFormGroupTouched();
    }
  }

  resetForm() {
    this.router.navigate(['../pemeriksaan-masuk-dokumen'], { relativeTo: this.route });
  }

  closeModal(): void {
    this.showModal = false;
    this.showModalAlert = false;
    this.showBiometricModal = false;

    this.router.navigate(['../pemeriksaan-masuk-dokumen'], { relativeTo: this.route });
  }

  goNext(): void {
    const index = this.steps.findIndex(s => s.number === this.currentStep);
    if (index !== -1 && index + 1 < this.steps.length) {
      this.router.navigate(['../maklumat-visa-ibc'], { relativeTo: this.route });
    }
  }

  goBack(): void {
    this.router.navigate(['../maklumat-profil-ibc'], { relativeTo: this.route });
  }

  isFirstStep() {
    return this.currentStep === 1;
  }

  private markFormGroupTouched(): void {
    Object.keys(this.profilForm.controls).forEach(key => {
      const control = this.profilForm.get(key);
      if (control) {
        control.markAsTouched();
      }
    });

    this.handleResponseCode('');
  }

  private handleResponseCode(responseCode: string) {
    switch (responseCode) {
      case 'IBC-S022':
        this.modalMessage = 'Rekod Visa Tidak Dijumpai';
        break;
      case 'IBC-S016':
        this.modalMessage = 'Rekod Visa Telah Tamat Tempoh Sah Laku';
        break;
      case 'IBC-S023':
        this.modalMessage = 'Single Entry Visa Telah Digunakan Ketika Masuk';
        break;
      default:
        this.router.navigate(['../maklumat-profil-ibc'], {
          relativeTo: this.route,
          state: {
            visitorType: this.profilForm.get('visitorType')?.value
          }
        });
        return;
    }

    this.showModalStandard();
  }

  private showModalStandard(): void {
    if (this.modalStandard) {
      this.modalStandard.visible = true;
    }
  }
}
