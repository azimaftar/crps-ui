import { Component, inject,} from '@angular/core';
import {
  RowComponent,
  CardComponent,
  ColComponent,
  CardBodyComponent,
  ContainerComponent,
  FormModule,
  ButtonDirective,
  ModalModule,
} from '@coreui/angular';
import { Router, ActivatedRoute} from '@angular/router';
//import { ModalSimpanComponent } from '../../../pengurusan-vaksin/daftar-kemaskini-vaksin/daftar-vaksin/modal-simpan/modal-simpan.component';
//import { ModalHantarComponent } from '../../../pengurusan-vaksin/daftar-kemaskini-vaksin/daftar-vaksin/modal-hantar/modal-hantar.component';
import { CommonModule, Location } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators} from '@angular/forms';
import { DaftarVaksinService, CarianVaksinDTO } from '../../../pengurusan-vaksin/daftar-kemaskini-vaksin/daftar-vaksin/daftar-vaksin.service';
//import { KemaskiniVaksinService } from '../../../pengurusan-vaksin/daftar-kemaskini-vaksin/daftar-vaksin/kemaskini-vaksin.service';
import { NavigationFlowComponent } from '../navigation-flow/navigation-flow.component';
//import { DaftarKemaskiniVaksinComponent } from '../daftar-kemaskini-vaksin.component';

@Component({
  selector: 'app-daftar-vaksin',
  standalone: true,
  imports: [
  CommonModule,
  FormModule,
  RowComponent,
  CardComponent,
  ColComponent,
  CardBodyComponent,
  ContainerComponent,
  // ModalSimpanComponent,
  // ModalHantarComponent,
  ButtonDirective,
  ModalModule,
  ReactiveFormsModule,
  NavigationFlowComponent,
  
  ],
  templateUrl: './daftar-vaksin.component.html',
  styleUrls: [
    '../../../bkp.scss'
  ]
})
export class DaftarVaksinComponent {
  step = 2; // For stepper navigation
  vaccName!: string; 
  private router = inject(Router);
  // showModalSimpan = false;
  // showModalHantar = false;
  isSuccessModalVisible = false;
  isHantarModalVisible = false;
  showHantar = false;
  showSimpan = true;
  configForm: FormGroup;
  activeSTS: number = 0;
  errorMessage: string = "";
  branches: any[] = [];
   private stepRoutes = [
    'bkp/pengurusan-vaksin/daftar-kemaskini-vaksin',
    'bkp/pengurusan-vaksin/daftar-kemaskini-vaksin/daftar-vaksin'
  ];

  constructor(
    private location: Location,
    private fb: FormBuilder,
    private daftarVaksin: DaftarVaksinService,
    private route: ActivatedRoute
  ) {
    this.configForm = this.fb.group({
      tahun: ['', Validators.required],
      tluput: ['', Validators.required],
      namaVaksin: ['', Validators.required],
      syarikat: ['', Validators.required],
      dos: [null, [Validators.required]],
      kuota: [null, [Validators.required]],
      hargaTahunan: [null, [Validators.required]],
      cawangan: ['', Validators.required],
      tarikhMula: ['', Validators.required],
      tarikhTamat: ['', Validators.required],
      catatan: ['',Validators.required]
    });
  }

  ngOnInit() {

  this.daftarVaksin.getBranches().subscribe(data => {
    this.branches = data;
  });

    // Uppercase transformation for all string form controls except dropdowns
    const skipControls = ['cawangan']; //dropdown exception
    Object.keys(this.configForm.controls).forEach(controlName => {
      if (!skipControls.includes(controlName)) {
        const control = this.configForm.get(controlName);
        if (control) {
          control.valueChanges.subscribe(value => {
            if (typeof value === 'string' && value.trim() !== '') {
              control.setValue(value.toUpperCase(), { emitEvent: false });
            }
          });
        }
      }
    });
  }

  private buildPayload(): CarianVaksinDTO {
    const v = this.configForm.value;
    return {
      vaccYear: v.tahun,
      expYear: v.tluput,
      vaccName: v.namaVaksin,
      compName: v.syarikat,
      totalDose: v.dos,
      quotaDose: v.kuota,
      alloPrice: v.hargaTahunan,
      branchCode: v.cawangan,
      startDate: v.tarikhMula,
      endDate: v.tarikhTamat,
      remarks: v.catatan
    };
  }

  onSimpan() {
    if (this.configForm.invalid) {
      this.configForm.markAllAsTouched();
      this.errorMessage = 'Sila isi semua medan yang diperlukan.';
      return;
    }
    const payload = this.buildPayload();
    console.log('Simpan payload:', payload);
    this.daftarVaksin.simpanVaksin(payload).subscribe({
      next: (res) => {
        this.activeSTS = 1; //update status locally (tak affect DB)
        console.log('Simpan success:', res);
        this.isSuccessModalVisible = true;
      },
      error: (err) => console.error('Simpan error:', err)
    });
  }

  onHantar() {
    if (this.configForm.invalid) {
      this.configForm.markAllAsTouched();
      alert("Medan mandatori perlu diisi.");
      return;
    }
    const payload = this.buildPayload();
    console.log('Hantar payload:', payload);
    this.daftarVaksin.hantarVaksin(payload.vaccName, payload).subscribe({
      next: (res) => {
        console.log('Hantar success:', res);
        this.isHantarModalVisible = true;
      },
      error: (err) => console.error('Hantar error:', err)
    });
  }

  onVisibleChange(value: boolean) {
    this.isSuccessModalVisible = value;
    this.isHantarModalVisible = value;
  }

  onModalSimpanClosed() {
    this.isSuccessModalVisible = false;
    console.log('Modal Simpan closed');
  }

  onModalHantarClosed() {
    this.isHantarModalVisible = false;
    console.log('Modal Hantar closed');
  }

  onSuccessModalOk() {
    this.closeModal();
    console.log('Modal Simpan closed');
  }

  onHantarModalOk() {
    this.closeModal();
    console.log('Modal Hantar closed');
  }

  onSetSemula() {
    this.configForm.reset();
  }

  onBatal() {
    this.location.back();
  }

  closeModal() {
    this.isSuccessModalVisible = false;
    this.isHantarModalVisible = false;
  }

  onStepChange(newStep: number) {
    this.step = newStep;
    this.navigateToStep();
  }

  private navigateToStep(): void {
    this.router.navigate([this.stepRoutes[this.step - 1]]).then(() => {
      window.scrollTo(0, 0);
    });
  }

  prevStep(): void {
    if (this.step > 1) {
      this.step--;
      this.router.navigate([this.stepRoutes[this.step - 1]]).then(() => {
        window.scrollTo(0, 0);
      });
    }
  }

  nextStep(): void {
    if (this.step < this.stepRoutes.length) {
      this.router.navigate([this.stepRoutes[this.step]]).then(() => {
        this.step++;
      });
    }
  }

  onDaftarVaksin(): void {
    this.router.navigate([
      '/bkp/pengurusan-vaksin/daftar-kemaskini-vaksin/daftar-vaksin',
    ]);
  }
}
