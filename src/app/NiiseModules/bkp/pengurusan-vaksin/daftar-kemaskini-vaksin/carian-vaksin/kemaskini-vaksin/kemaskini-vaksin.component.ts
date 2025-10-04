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
import { CommonModule, Location } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators} from '@angular/forms';
import { KemaskiniVaksinService, CarianVaksinDTO } from './kemaskini-vaksin.service';
import { DaftarVaksinService } from '../../daftar-vaksin/daftar-vaksin.service';
// import { ModalHantarComponent } from '../../daftar-vaksin/modal-hantar/modal-hantar.component';
// import { ModalKemaskiniComponent } from '../../daftar-vaksin/modal-kemaskini/modal-kemaskini.component';
import { NavigationFlowComponent } from '../../navigation-flow/navigation-flow.component';

@Component({
  selector: 'app-kemaskini-vaksin',
  standalone: true,
  imports: [
  CommonModule,
  FormModule,
  RowComponent,
  CardComponent,
  ColComponent,
  CardBodyComponent,
  ContainerComponent,
  ButtonDirective,
  ModalModule,
  ReactiveFormsModule,
  // ModalHantarComponent,
  // ModalKemaskiniComponent,
  NavigationFlowComponent,
  ],
  templateUrl: './kemaskini-vaksin.component.html',
  styleUrls: [
    '../../../../bkp.scss'
  ]
})
export class KemaskiniVaksinComponent {
  step = 1;
  vaccName!: string; 
  activeSTS: number | null = null;
  private router = inject(Router);
  isHantarModalVisible = false;
  isKemaskiniModalVisible = false;
  // showModalHantar = false;
  // showModalKemaskini = false;
  configForm: FormGroup;
  branches: any[] = [];
  private stepRoutes = [
    'bkp/pengurusan-vaksin/daftar-kemaskini-vaksin',
    'bkp/pengurusan-vaksin/daftar-kemaskini-vaksin/daftar-vaksin'
  ];

  constructor(
    private location: Location,
    private fb: FormBuilder,
    private daftarVaksin: DaftarVaksinService,
    private KemaskiniVaksin: KemaskiniVaksinService,
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
  // retrive vaksin name 
  const param = this.route.snapshot.paramMap.get('vaccName');
  if (param) {
    this.vaccName = param; // assign only if param exists

    this.daftarVaksin.getVaksinByName(this.vaccName).subscribe({
      next: (data) => {
        if (data) {
          this.activeSTS = data.activeSTS ?? 0;
          this.configForm.patchValue({
            tahun: data.vaccYear,
            tluput: data.expYear,
            namaVaksin: data.vaccName,
            syarikat: data.compName,
            dos: data.totalDose,
            kuota: data.quotaDose,
            hargaTahunan: data.alloPrice,
            cawangan: data.branchCode,
            tarikhMula: data.startDate,
            tarikhTamat: data.endDate,
            catatan: data.remarks,
            status: data.activeSTS
          });
        }
  },
      error: (err) => {
        console.error('Error fetching vaksin data:', err);
      }
    });
  } else {
    console.warn('No vaccName parameter in route');
  }

  // Uppercase transformation for all string form controls except dropdowns
  const skipControls = ['cawangan']; // your dropdown controls
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
      remarks: v.catatan,
      activeSTS: v.activeSTS
    };
  }

  onHantar() {
  if (this.configForm.invalid) {
    this.configForm.markAllAsTouched();
    alert("Medan mandatori perlu diisi.");
    return;
  }

  const payload = this.buildPayload();
  console.log('Hantar payload:', payload);

  this.KemaskiniVaksin.hantarVaksin(payload.vaccName!, payload).subscribe({
    next: (res) => {
      console.log('Hantar success:', res);
      this.isHantarModalVisible = true;
    },
    error: (err) => console.error('Hantar error:', err)
  });
}

  onKemaskini() {
    console.log('Kemaskini button clicked');
    if (this.configForm.invalid) {
      this.configForm.markAllAsTouched();
      return;
    }
    const payload = this.buildPayload();
    console.log('Updating payload:', payload);

    this.KemaskiniVaksin.updateVaksin(payload.vaccName!, payload).subscribe({
      next: (res) => {
        console.log('Updated successfully:', res);
        this.isKemaskiniModalVisible = true;
      },
      error: (err) => {
        console.error('Error updating:', err);
      }
    });
  }

  onHapus() {
    const vaksinName = this.configForm.get('namaVaksin')?.value; // Get value from nama vaksin form

    if (!vaksinName) {
      alert('Sila masukkan nama vaksin terlebih dahulu.');
      return;
    }

    this.KemaskiniVaksin.deleteVaksin(vaksinName).subscribe({
      next: res => {
        alert('Maklumat vaksin berjaya dihapus!');
      },
      error: err => {
        console.error('Error deleting:', err);
      }
    });
  }

  // onModalSimpanClosed() {
  //   this.showModalSimpan = false;
  //   console.log('Modal Simpan closed');
  // }

  onModalHantarClosed() {
    this.isHantarModalVisible = false;
    location.reload();
    console.log('Modal Hantar closed');
  }

  onModalKemaskiniClosed() {
    this.isKemaskiniModalVisible = false;
    location.reload();
    console.log('Modal Kemaskini closed');
  }

  onSetSemula() {
    this.configForm.reset();
  }

  onBatal() {
    this.location.back();
  }

   closeModal() {
    this.isHantarModalVisible = false;
    this.isKemaskiniModalVisible = false;
  }

  //  onModalOk() {
  //   this.closeModal();
  // }

  onHantarModalOk() {
    this.closeModal();
    console.log('Modal Hantar closed');
    location.reload();
  }

  onKemaskiniModalOk() {
    this.closeModal();
    console.log('Modal Kemaskini closed');
    location.reload();
  }

  onVisibleChange(value: boolean) {
    this.isHantarModalVisible = value;
    this.isKemaskiniModalVisible = value;
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
      this.location.back();
    }
  }

  nextStep(): void {
    if (this.step < this.stepRoutes.length) {
      this.router.navigate([this.stepRoutes[this.step]]).then(() => {
        this.step++;
      });
    }
  }

  // onDaftarVaksin(): void {
  //   this.router.navigate([
  //     '/bkp/pengurusan-vaksin/daftar-kemaskini-vaksin/daftar-vaksin',
  //   ]);
  // }
}