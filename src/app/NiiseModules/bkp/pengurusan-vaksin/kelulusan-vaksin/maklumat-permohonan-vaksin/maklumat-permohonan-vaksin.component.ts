import { Component, inject } from '@angular/core';
import {
  RowComponent,
  CardComponent,
  ColComponent,
  CardBodyComponent,
  ContainerComponent,
  FormModule,
  ButtonDirective,
} from '@coreui/angular';
import { Router, RouterModule, ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ModalHantarComponent } from '../../daftar-kemaskini-vaksin/daftar-vaksin/modal-hantar/modal-hantar.component';
import { FormGroup, ReactiveFormsModule, FormBuilder, Validators, FormsModule } from '@angular/forms';
//import { SetujuTolakVaksinDTO, SetujuTolakVaksinService } from './setuju-tolak-vaksin.service';
import { ModalSimpanComponent } from '../../daftar-kemaskini-vaksin/daftar-vaksin/modal-simpan/modal-simpan.component';
import { SetujuTolakVaksinService, SetujuTolakVaksinDTO } from '../../setuju-tolak-vaksin/setuju-tolak-vaksin.service';

@Component({
  selector: 'app-maklumat-permohonan-vaksin',
  standalone: true,
  imports: [RouterModule,
      CommonModule,
      RowComponent,
      CardComponent,
      ColComponent,
      CardBodyComponent,
      ContainerComponent,
      FormModule,
      ButtonDirective,
      ReactiveFormsModule,  
      FormsModule,
      ModalHantarComponent,
      ModalSimpanComponent,],
  templateUrl: './maklumat-permohonan-vaksin.component.html',
  styleUrls: ['../../../bkp.scss']
})
export class MaklumatPermohonanVaksinComponent {
setujuVaksin: string = "";
  // remarks: string = "";
  configForm: FormGroup;
  showModalSimpan = false;
  showModalHantar = false;
  showSimpan = true;
  showHantar = false;
  errorMessage: string = "";
  recSTS: string = "1";
  vaccId!: string;
  staffMasterId!: string;
  private router = inject(Router);
  

constructor(
  private fb: FormBuilder,
  private route: ActivatedRoute,
  private service: SetujuTolakVaksinService
) {
  this.configForm = this.fb.group({
    name: [null],
    icNo: [null],
    serviceNo: [null],
    email: [null],
    position: [null],
    branchCode: [null],
    vaccName: [null],
    setujuVaksin: [null], 
    remarks: [null],
    dokumen: [null]
  });
}

// private buildPayLoad(): SetujuTolakVaksinDTO {
//   const v = this.configForm.value;
//     return {
//       consent: v.setujuVaksin,
//       remarks: v.remarks
//     };
// }

ngOnInit(): void {
  // Prefill data
  this.service.getPrefillData().subscribe(data => {
    console.log("Prefill data received:", data);
    this.vaccId = data.vaccId;
    this.staffMasterId = data.staffMasterId;
    this.configForm.patchValue(data);
  });

  // Reactive disable/enable of remarks
  this.configForm.get('consent')?.valueChanges.subscribe(value => {
    const catatanControl = this.configForm.get('reason');
    if (value === 'YA') {
      catatanControl?.disable();
    } else {
      catatanControl?.enable();
    }
  });
}

//   private buildPayLoad(): SetujuTolakVaksinDTO {
//     const v = this.configForm.value;
//     return {
//       id: "undefined", // let backend handle if auto-generated
//       vaccId: this.vaccId,             
//       branchCode: v.branchCode,
//       staffMasterId: this.staffMasterId, 
//       consent: v.consent?.toString(),
//       reason: v.reason
//     };
//   }

  onHantar(){

  }

//   onUpload() {
//   if (this.configForm.invalid) {
//     this.configForm.markAllAsTouched();
//     this.errorMessage = 'Sila isi semua medan yang diperlukan.';
//     return;
//   }

//  //build FormData
//   const formData = new FormData();
//   formData.append('file', this.configForm.get('dokumen')?.value);
//   formData.append('vaccId', this.configForm.get('vaccId')?.value);
//   formData.append('recSTS', this.configForm.get('recSTS')?.value);
//   formData.append('createId', this.configForm.get('createId')?.value);

//   this.service.simpanDokumen(formData).subscribe({
//     next: (res) => {
//       this.recSTS = "1"; //update status locally (tak affect DB)
//       console.log('Simpan document success:', res);
//       this.showModalSimpan = true;
//     },
//     error: (err) => console.error('Simpan error:', err)
//   });
// }

  // onSimpan() {
  //    if (this.configForm.invalid) {
  //     this.configForm.markAllAsTouched();
  //     this.errorMessage = 'Sila isi semua medan yang diperlukan.';
  //     return;
  //   }

  //   const payload = this.buildPayLoad();
  //   console.log('Simpan payload:', payload);

  //   this.service.simpanRequest(payload).subscribe({
  //     next: (res) => {
  //       this.recSTS = "1"; //update status locally (tak affect DB)
  //       console.log('Simpan request success:', res);
  //       this.showModalSimpan = true;
     
  //     },
  //     error: (err) => console.error('Simpan error:', err)
  //   });
  // }

  onSubmit() {
    if (this.configForm.valid) {
      const formData = new FormData();
      formData.append('dokumen', this.configForm.get('dokumen')?.value);

      // 🚀 send to backend with HttpClient
      console.log('Ready to upload:', formData.get('dokumen'));
    } else {
      console.log('Form not valid');
    }
  }

  onSetSemula() {
    this.configForm.reset();
  }

  onModalSimpanClosed() {
    this.showModalSimpan = false;
    console.log('Modal Simpan closed');
  }

  onModalHantarClosed() {
    this.showModalHantar = false;
    console.log('Modal Hantar closed');
  }

}

