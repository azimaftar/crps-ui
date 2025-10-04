import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';

import { OnSubmitComponent } from '../../on-submit/on-submit.component';
import {PenggantianTugasServices, RequestPenggantiPemohon} from '../../../../../../core/services/bkp-services/PenggantianTugas.services';
import { LocalStorageService } from '../../../../../../core/services/bkp-services/local-storage.service';
import { ReusableTabComponent } from '../../../shared/reusable-tab/reusable-tab.component';

@Component({
  selector: 'app-maklumat-pegawai-pengganti',
  imports: [FormsModule, CommonModule,OnSubmitComponent, ReusableTabComponent],
  standalone: true,
  templateUrl: './maklumat-pegawai-pengganti.component.html',
  styleUrls: [
    '../../../../bkp.scss'
  ],
})
export class MaklumatPegawaiPenggantiComponent {
  tableData : any;
  maxStep = 2;
  minStep = 1;
  showSuccessPopup = false;
  showSavePopup = false;
  id = null;

  HantarSubmitPopup = false;
  HantarSimpanPopup = false;
  pegawai: any;

  bahagianList: string[] = ["Bahagian Dasar & Perancangan", "Bahagian Perancangan"];
  unitList: string[] = ["Unit Pengurusan Aset"];
  kumpulanList: string[] = ["A", "B", "C"];

  currentStep = 2;
  steps = [
    { number: 1, title: 'Maklumat Pegawai pemohon', route: '' },
    { number: 2, title: 'Maklumat Pegawai Pengganti', route: '' },
  ];

  isStepActive(stepNumber: number): boolean {
    return this.currentStep === stepNumber;
  }

  constructor(private router: Router, private route: ActivatedRoute,
    private PenggantianTugasServices : PenggantianTugasServices,
    private localStorage: LocalStorageService) {}

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

  // currentStep: number = 2;
  totalSteps: number = 2;

  // steps = [
  //        'Maklumat Pegawai Pemohon',
  //        'Maklumat Pegawai Pengganti'
  //      ];

  goToNextStep(): void {
    if (this.currentStep < this.totalSteps) {
      this.currentStep++;
    }
  }

  goToPreviousStep() {
    if (this.currentStep === 2) {
      this.router.navigate(['./maklumat-pegawai-pemohon'], { relativeTo: this.route });
    }
  }

  ngOnInit(): void {
    // First try get pemohon data from localStorage
    this.pegawai = this.localStorage.getItem<any>('pemohonData');

    if (this.pegawai) {
      console.log('Loaded data from pemohon → pengganti:', this.pegawai);
    } else {
      // fallback: still fetch from API
      this.route.parent?.paramMap.subscribe(params => {
        const stfMstrUid = params.get('id');
        if (stfMstrUid) {
          this.loadPenggantiData(Number(stfMstrUid));
        }
      });
    }
  }

  loadPenggantiData(stfMstrUid: number) {
  const request: RequestPenggantiPemohon = { stfMstrUid: stfMstrUid };

  this.PenggantianTugasServices.getMaklumatPenggantiPemohon(request)
    .subscribe({
      next: (data) => {
          this.pegawai = data;

          this.pegawai.bahagian = data.bahagian;
          this.pegawai.unit = data.unit;
          this.pegawai.kumpulan = data.kumpulan;
        },
        error: (err) => {
          console.error('Error fetching details', err);
        }
      });
}

  // isStepActive(step: number): boolean {
  //   return this.currentStep === step;
  // }

  isStepCompleted(step: number): boolean {
    return this.currentStep > step;
  }

  onSubmit() {
    this.showSuccessPopup = true;
  }

  onSave() {
    this.showSavePopup = true;
  }

 closeModal() {
    this.HantarSubmitPopup = false;
    this.HantarSimpanPopup = false;
  }

  showHantarSubmit() {
  const payload = {
    n004Uid: "", 
    n004N003Uid: "2025091211081837171500030018",
    n004s001UidOld: "UID0001",
    n004s001UidNew: "UID0001",
    n004StartDate: this.pegawai?.tarikhtugas?.start || "2025-09-15", 
    n004EndDate: this.pegawai?.tarikhtugas?.end || "2025-09-20",
    n004ReqStatus: "P",
    n004ReqBy: "UID0001",
    n004ReqAt: "2025-09-11T08:30:00",
    n004CreateId: "UID0001",
    n004CreateDate: "2025-09-11T08:00:00"
  };

  this.PenggantianTugasServices.postPermohonanGantiBaharu(payload).subscribe({
    next: (res) => {
      console.log("Success:", res);
      this.HantarSubmitPopup = false;
      setTimeout(() => this.HantarSubmitPopup = true, 0);
    },
    error: (err) => {
      console.error("Error:", err);
    }
  });
}

showHantarSimpan() {
  this.HantarSimpanPopup = false;
  setTimeout(() => {
    this.HantarSimpanPopup = true;
  }, 0);
}
}
