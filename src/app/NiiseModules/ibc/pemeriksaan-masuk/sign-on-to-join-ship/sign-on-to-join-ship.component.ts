import { CommonModule, NgTemplateOutlet } from '@angular/common';
import { Component, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ButtonCloseDirective, ButtonDirective, CardBodyComponent, CardComponent, CardImgDirective, CardModule, ColComponent, ModalBodyComponent, ModalComponent, ModalFooterComponent, ModalHeaderComponent, ModalTitleDirective, ModalToggleDirective, RowComponent, ButtonGroupComponent } from '@coreui/angular';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { ReusableTabComponent } from './../../shared/reusable-tab/reusable-tab.component'; //Stepper

@Component({
  selector: 'app-sign-on-to-join-ship',
  imports: [
    CommonModule,
    FormsModule,
    CardModule,
    ReactiveFormsModule,
    CardBodyComponent,
    CardComponent,
    ButtonDirective,
    ButtonGroupComponent,
    ModalToggleDirective,
    ModalComponent,
    //ModalHeaderComponent,
    //ModalTitleDirective,
    //ButtonCloseDirective,
    ModalBodyComponent,
    //NgTemplateOutlet,
    //ModalFooterComponent,
    RowComponent,
    ColComponent,
    ReusableTabComponent
  ],
  templateUrl: './sign-on-to-join-ship.component.html',
  styleUrl: './sign-on-to-join-ship.component.scss'
})
export class SignOnToJoinShipComponent {

  anakKapalForm!: FormGroup;
  photoUrl = '';
  isMaklumatLengkap = false;

  // Step navigation
  currentStep = 5;

  steps = [
    'Maklumat Profil Pengembara',
    'Maklumat Visa',
    'Maklumat Pas/Permit',
    'Maklumat Pengguna Kerap (FTF)',
    'Sign On To Join Ship'
  ];

  constructor(private fb: FormBuilder,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      const value = params['maklumat'];
      this.isMaklumatLengkap = value === 'lengkap';
    });

    // Form initialization
    this.anakKapalForm = this.fb.group({
      // Maklumat Anak Kapal
      docType: [''],
      gender: [''],
      dob: [''],
      docNo: [''],
      kpNo: [''],
      nationality: [''],
      name: [''],
      jobCode: [''],

      // Maklumat Visa
      visaNo: [''],
      visaQrVds: [''],
      visaType: [''],
      visaIssueDate: [''],
      visaExpiryDate: [''],

      // Maklumat Kapal
      shipName: [''],
      shipType: [''],
      noIMO: [''],
      callSign: [''],
      voyageNo: [''],
      companyName: [''],

      // Maklumat Tiba dan Berlepas Kapal
      expArrDate: [''],
      expArrTime: [''],
      nextPort: [''],
      expDepDate: [''],
      expDepTime: ['']

    });


    // Disable form fields
    this.anakKapalForm.disable();

  }

  //Buttons
  captureFaceAndIris() {
    console.log('Capturing face and iris...');
    // Implement biometric capture logic here
    this.router.navigate(['biometrik-wajah']);

  }

  captureFingerprint() {
    console.log('Capturing fingerprint...');
    // Implement fingerprint capture logic here
    this.router.navigate(['biometrik-capjari']);
  }

  // Form Methods
  saveForm() {

  }

  get canSave(): boolean {
    return this.isMaklumatLengkap;
  }


  //Navigation Buttons
  resetForm() {
    //Navigate to laman utama
    this.router.navigate(['ibc/pemeriksaan-masuk/pemeriksaan-masuk-2'] );

  }

  goBack() {
    this.router.navigate(['ibc/pemeriksaan-masuk/maklumat-pengguna-kerap'], { queryParams: { maklumat: 'lengkap' } });
  }

  goNext() {
    //Disabled

  }

  // MODAL
  @ViewChild('modals039') modals039!: ModalComponent;

  responseCode: string = '';
  //responseCode: string = 'IBC-S039';

  modalVisible = false;

  checkResponse(responseCode: string) {
    if (responseCode === 'IBC-S039') {
      this.modalVisible = true;
    }
  }

}