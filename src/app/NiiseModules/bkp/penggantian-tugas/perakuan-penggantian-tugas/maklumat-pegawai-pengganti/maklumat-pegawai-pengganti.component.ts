import { Component, ElementRef, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';

import { OnSubmitComponent } from '../on-submit/on-submit.component';
import {PenggantianTugasServices, RequestPenggantiPemohon} from '../../../../../core/services/bkp-services/PenggantianTugas.services';
import SignaturePad from 'signature_pad';
import { ReusableTabComponent } from './../../shared/reusable-tab/reusable-tab.component';


@Component({
  selector: 'app-maklumat-pegawai-pengganti',
  imports: [FormsModule, CommonModule,OnSubmitComponent, ReusableTabComponent],
  standalone: true,
  templateUrl: './maklumat-pegawai-pengganti.component.html',
  styleUrls: [
    '../../../bkp.scss','../../penggantian-tugas.component.scss'
  ]
})
export class MaklumatPegawaiPenggantiComponent {
  tableData : any;
  totalSteps: number = 2;
  maxStep = 2;
  minStep = 1;
  id = null;

  showSuccessPopup = false;
  showSavePopup = false;
  showResetPopup = false;
  HantarSubmitPopup = false;
  HantarSimpanPopup = false;
  HantarResetPopup = false;
  pegawai: any;

  // steps = ['Maklumat Pegawai Pemohon','Maklumat Pegawai Pengganti'];

  currentStep = 2;
  steps = [
    { number: 1, title: 'Maklumat Pegawai pemohon', route: '' },
    { number: 2, title: 'Maklumat Pegawai Pengganti', route: '' },
  ];

  isStepActive(stepNumber: number): boolean {
    return this.currentStep === stepNumber;
  }

  bahagianList: string[] = ["Bahagian Dasar & Perancangan", "Bahagian Perancangan"];
  unitList: string[] = ["Unit Pengurusan Aset"];
  kumpulanList: string[] = ["A", "B", "C"];
  keputusan: string | null = null;
  catatan: string = '';
  setuju: boolean = false;

  constructor(private router: Router, private route: ActivatedRoute, private PenggantianTugasServices : PenggantianTugasServices) {}

  @ViewChild('signaturePad') signaturePadElement!: ElementRef<HTMLCanvasElement>;
  private signaturePad!: SignaturePad;

  ngAfterViewInit() {
      this.signaturePad = new SignaturePad(this.signaturePadElement.nativeElement, {
        backgroundColor: '#ffffff',
        penColor: 'black'
      });
    }
  
  // ngOnInit(): void {
  //   this.route.parent?.paramMap.subscribe(params => {
  //     const stfMstrUid = params.get('id');
  //     if (stfMstrUid) {
  //       console.log('Got ID from parent:', stfMstrUid);

  //       const numericstfMstrUid = Number(stfMstrUid);
  //       this.loadPenggantiData(numericstfMstrUid);
  //     }
  //   });
  // }

  clearSignature() {
    this.signaturePad.clear();
    this.pegawai.tandatangan = null;
  }

  saveSignature() {
    if (!this.signaturePad.isEmpty()) {
      this.pegawai.tandatangan = this.signaturePad.toDataURL('image/png');
      console.log("Saved signature:", this.pegawai.tandatangan);
    } else {
      alert("Sila tandatangan dahulu!");
    }
  }

  toggleRadio(value: string): void {
  if (this.keputusan === value) {
    this.keputusan = null;  // unselect if clicked again
  } else {
    this.keputusan = value;
  }
}

//   loadPenggantiData(stfMstrUid: number) {
//   const request: RequestPenggantiPemohon = { stfMstrUid: stfMstrUid };

//   this.PenggantianTugasServices.getMaklumatPenggantiPemohon(request)
//     .subscribe({
//       next: (data) => {
//           this.pegawai = data;

//           this.pegawai.bahagian = data.bahagian; 
//           this.pegawai.unit = data.unit; 
//           this.pegawai.kumpulan = data.kumpulan; 
//         },
//         error: (err) => {
//           console.error('Error fetching details', err);
//         }
//       });
// }

  //  goToNextStep(): void {
  //   if (this.currentStep < this.totalSteps) {
  //     this.currentStep++;
  //   }
  // }

  goToPreviousStep() {
    if (this.currentStep === 2) {
      this.router.navigate(['perakuan-penggantian-tugas'], { relativeTo: this.route });
    }
  }

  // isStepActive(step: number): boolean {
  //   return this.currentStep === step;
  // }

  // isStepCompleted(step: number): boolean {
  //   return this.currentStep > step;
  // }

  onSubmit() {
    this.showSuccessPopup = true;
  }

  onSave() {
    this.showSavePopup = true;
  }

  onReset() {
    this.showResetPopup = true;
  }

 closeModal() {
    this.HantarSubmitPopup = false;
    this.HantarSimpanPopup = false;
    this.showResetPopup = false;
  }

  showHantarSubmit() {
  this.HantarSubmitPopup = false;
  setTimeout(() => {
    this.HantarSubmitPopup = true;
  }, 0); 
}

showHantarSimpan() {
  this.HantarSimpanPopup = false;
  setTimeout(() => {
    this.HantarSimpanPopup = true;
  }, 0); 
}

showHantarReset() {
  this.HantarResetPopup = false;
  setTimeout(() => {
    this.HantarResetPopup = true;
  }, 0); 
}
}
