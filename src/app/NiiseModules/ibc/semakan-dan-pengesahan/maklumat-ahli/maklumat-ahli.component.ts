import { Component, OnInit, ViewChild, ElementRef} from '@angular/core';
import { FormArray, FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ReusableTabComponent } from '../../shared/reusable-tab/reusable-tab.component';
import { CommonModule } from '@angular/common';
import {
  ButtonCloseDirective,
  ButtonDirective,
  ModalBodyComponent,
  ModalComponent,
  ModalFooterComponent,
  ModalHeaderComponent,
  ModalTitleDirective,
  ModalToggleDirective
} from '@coreui/angular';

@Component({
  selector: 'app-maklumat-ahli',
  imports: [
    ReusableTabComponent,
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    ButtonCloseDirective,
    ButtonDirective,
    ModalBodyComponent,
    ModalComponent,
    ModalFooterComponent,
    ModalHeaderComponent,
    ModalTitleDirective,
    ModalToggleDirective
  ],
  templateUrl: './maklumat-ahli.component.html',
  styleUrl: './maklumat-ahli.component.scss'
})
export class MaklumatAhliComponent {
  currentStep = 2;
  steps = [
    'Maklumat Perjalanan dan Ketua Pemohon',
    'Maklumat Ahli'
  ];

  saveForm(): void {
    if (this.ahliForm.invalid) {
      this.IBCE009.visible = true;
    } else {
      this.IBCS033.visible = true;
      console.log('Form saved:', this.ahliForm.value);
    }
  }

  goToPrevious(): void {
    this.router.navigate(['/ibc/isi-maklumat-pengembara/maklumat-perjalanan-dan-ketua-pemohon']);
  }

  submitForm(): void {
    this.openConfirmModal();
  }

  ahliForm!: FormGroup;

  @ViewChild('IBCS015') IBCS015!: ModalComponent;
  @ViewChild('IBCE009') IBCE009!: ModalComponent;
  @ViewChild('IBCS004') IBCS004!: ModalComponent;
  @ViewChild('IBCS033') IBCS033!: ModalComponent;

  constructor(private fb: FormBuilder, private router: Router) {}

  ngOnInit(): void {
    this.ahliForm = this.fb.group({
      travelers: this.fb.array([
        this.createTraveler(),
        this.createTraveler(),
        this.createTraveler()])
    });
  }

  get travelers(): FormArray {
    return this.ahliForm.get('travelers') as FormArray;
  }

  createTraveler(): FormGroup {
    return this.fb.group({
      name: ['', Validators.required],
      nationality: ['', Validators.required],
      passportNo: ['', Validators.required],
      issuedCountry: '',
      validDate: ['', Validators.required],
      bod: ['', Validators.required],
      gender: ['', Validators.required]
    });
  }

  addTraveler(): void {
    this.travelers.push(this.createTraveler());
  }

  removeTraveler(index: number): void {
    this.travelers.removeAt(index);
  }

  openConfirmModal() {
    this.IBCS015.visible = true;
  }

  proceedSubmission() {
    this.IBCS015.visible = false;
    if (this.ahliForm.invalid) {
      this.IBCE009.visible = true;
    } else {
      this.IBCS004.visible = true;
      console.log('Form submitted:', this.ahliForm.value);
    }
  }

  scrollToInvalid() {
    this.IBCE009.visible = false;
    const firstInvalid = document.querySelector('.ng-invalid') as HTMLElement;
    if (firstInvalid) {
      firstInvalid.scrollIntoView({ behavior: 'smooth', block: 'center' });
      firstInvalid.focus();
    }
  }

  redirectAfterSuccess() {
    this.router.navigate(['/ibc/isi-maklumat-pengembara/maklumat-perjalanan-dan-ketua-pemohon']);
  }
}
