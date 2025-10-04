import { Component } from '@angular/core';
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
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
// import { ModalHantarComponent } from '../../pengurusan-vaksin/daftar-kemaskini-vaksin/daftar-vaksin/modal-hantar/modal-hantar.component';
import { FormGroup, ReactiveFormsModule, FormBuilder, Validators, FormsModule } from '@angular/forms';
import { SetujuTolakVaksinDTO, SetujuTolakVaksinService } from './setuju-tolak-vaksin.service';
// import { ModalSimpanComponent } from '../../pengurusan-vaksin/daftar-kemaskini-vaksin/daftar-vaksin/modal-simpan/modal-simpan.component';

@Component({
  selector: 'app-setuju-tolak-vaksin',
 standalone: true,
  imports: [
    RouterModule,
    CommonModule,
    RowComponent,
    CardComponent,
    ColComponent,
    CardBodyComponent,
    ContainerComponent,
    FormModule,
    ButtonDirective,
    ModalModule,
    ReactiveFormsModule,  
    FormsModule,
    // ModalHantarComponent,
    // ModalSimpanComponent,
  ],
  templateUrl: './setuju-tolak-vaksin.component.html',
  styleUrls: ['../../bkp.scss']
})
export class SetujuTolakVaksinComponent {

  configForm: FormGroup;
  // showModalSimpan = false;
  // showModalHantar = false;
  isSuccessModalVisible = false;
  isHantarModalVisible = false;
  showSimpan = true;
  showHantar = false;
  errorMessage: string = "";
  id!: string;
  recSTS: string = '1';
  vaccId!: string;
  branchCode!: string;
  staffMasterId!: string;

constructor(
  private fb: FormBuilder,
  private service: SetujuTolakVaksinService
) {
  this.configForm = this.fb.group({
   
    vaccId: [''],
    branchCode: [''],
    staffMasterId: [''],
    name: [null],
    icNo: [null],
    noServ: [null],
    email: [null],
    position: [null],
    shortName: [null],
    vaccName: [null],
    consent: [null, Validators.required], 
    reason: [null],
    dokumen: [null, Validators.required]
  });
}

private buildPayLoad(): SetujuTolakVaksinDTO {
  const v = this.configForm.value;
  return {
    vaccId: this.vaccId,             
    branchCode: this.branchCode,
    staffMasterId: this.staffMasterId, 
    consent: v.consent?.toString(),
    reason: v.reason
  };
}

ngOnInit(): void {
  const id = "2025091211541975873900032"; // hanya testing id, kena buang bila dh integrate dengan ADM
  this.service.getStaffData(id).subscribe(resp => {
    console.log("Prefill data received:", resp);

    if (resp.status === "success" && resp.result && resp.result.length > 0) {
      const staff = resp.result[0];
      if (staff) {
        // Store IDs in component variables
        this.staffMasterId = staff.id;
        this.vaccId = staff.vaccId;
        this.branchCode = staff.branchCode;

        // Patch values for display only
        this.configForm.patchValue({
          vaccName: staff.vaccName,
          shortName: staff.shortName,
          name: staff.name,
          icNo: staff.icNo,
          noServ: staff.noServ,
          email: staff.email,
          position: staff.position,
          consent: staff.consent,
          reason: staff.reason
        });
      }
    }
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

  onFileSelected(event: any) {
    const file = event.target.files[0];
    if (file) {
      this.configForm.patchValue({ dokumen: file });
      this.configForm.get('dokumen')?.updateValueAndValidity();
    }
  }

  onUpload() {
  if (this.configForm.invalid) {
    this.configForm.markAllAsTouched();
    this.errorMessage = 'Sila isi semua medan yang diperlukan.';
    return;
  }

  const formData = new FormData();
  formData.append('file', this.configForm.get('dokumen')?.value);
  formData.append('vaccId', this.configForm.get('vaccId')?.value);
  formData.append('recSTS', this.configForm.get('recSTS')?.value);
  formData.append('createId', this.configForm.get('createId')?.value);

  this.service.simpanDokumen(formData).subscribe({
    next: (res) => {
      this.recSTS = "1"; //update status locally (tak affect DB)
      console.log('Simpan document success:', res);
      this.isSuccessModalVisible = true;
    },
    error: (err) => console.error('Simpan error:', err)
  });
}

  onSimpan() {
     if (this.configForm.invalid) {
      this.configForm.markAllAsTouched();
      this.errorMessage = 'Sila isi semua medan yang diperlukan.';
      return;
    }
    const payload = this.buildPayLoad();
    console.log('Simpan payload:', payload);

    this.service.simpanRequest(payload).subscribe({
    next: (res) => {
    console.log('Response:', res);
    this.id = res.id; 
    this.recSTS = '0'; //update status locally (tak affect DB)
    this.configForm.patchValue({ id: res.id }); 
    this.isSuccessModalVisible = true;
  },
      error: (err) => console.error('Simpan error:', err)
    });
  }

  onHantar() {
  if (!this.id) return;

  this.service.hantarRequest(this.id).subscribe({
    next: (res) => {
      
      console.log('Hantar request success:', res);
      this.isHantarModalVisible = true;
    },
    error: (err) => console.error('Hantar error:', err)
  });
}

  onSubmit() {
    if (this.configForm.valid) {
      const formData = new FormData();
      formData.append('dokumen', this.configForm.get('dokumen')?.value);
      console.log('Ready to upload:', formData.get('dokumen'));
    } else {
      console.log('Form not valid');
    }
  }

  onVisibleChange(value: boolean) {
    this.isSuccessModalVisible = value;
    this.isHantarModalVisible = value;
  }

  onSetSemula() {
    this.configForm.reset();
  }

  onModalSimpanClosed() {
    this.isSuccessModalVisible = false;
    console.log('Modal Simpan closed');
  }

  onModalHantarClosed() {
    this.isHantarModalVisible = false;
    console.log('Modal Hantar closed');
  }

  closeModal() {
    this.isSuccessModalVisible = false;
    this.isHantarModalVisible = false;
  }

  onModalOk() {
    this.closeModal();
  }

  onSuccessModalOk() {
    this.closeModal();
    console.log('Modal Simpan closed');
  }

  onHantarModalOk() {
    this.closeModal();
    console.log('Modal Hantar closed');
  }

}
