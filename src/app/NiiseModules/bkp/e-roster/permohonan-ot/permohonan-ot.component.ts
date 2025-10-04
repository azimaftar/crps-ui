import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  CardModule,
  NavModule,
  GridModule,
  ModalModule,
} from '@coreui/angular';
import { ModalSucessSendSaveComponent } from '../../modal/modal-sucess-send-save/modal-sucess-send-save.component';
import { ModalSucessSendComponent } from '../../modal/modal-sucess-send/modal-sucess-send.component';
import {
  PengurusanRosterGeotimeService,
  LateNoteResponse,
  LateNoteRequest,
  OTapplyRequest,
  LateinResponse
  
} from '../../../../services/pengurusan-roster-geotime.service';

@Component({
  selector: 'app-permohonan-ot',
  templateUrl: './permohonan-ot.component.html',
  styleUrls: ['../../bkp.scss'],
  standalone: true,
  imports: [
    CommonModule,
    CardModule,
    GridModule,
    NavModule,
    ModalModule,
    FormsModule,
    ModalSucessSendSaveComponent,
    ModalSucessSendComponent
  ],
})
export class PemohonanOtComponent {
// Stepper props
  currentStep = 1;
  steps = [
    { number: 1, title: 'Maklumat Permohonan OT', route: '' },
  ];

  
    isStepActive(stepNumber: number): boolean {
      return this.currentStep === stepNumber;
    }
  // Form model properties
  nama = '';
  bahagian = '';
  ic = '';
  unit = '';
  gred = '';
  kumpulan = '';
  tarikh = '';
  masaMula = '';
  masaAkhir = '';
  syif = '';
  alasan = '';
  digitalSign = '';

 // untuk modalsave
  HantarModalsave = false;

  showHantarModal() {
  // Reset and reopen to ensure visibility
  this.HantarModalsave = false;
  setTimeout(() => {
    this.HantarModalsave = true;
  }, 0); // Short delay allows Angular change detection to register state change
}

  closeModal() {
    this.HantarModalsave = false;
    this.HantarModalsend = false;
  }
// modal end save
//modal send
 HantarModalsend = false;
 showHantarModalsend() {
  // Reset and reopen to ensure visibility
  this.HantarModalsend = false;
  setTimeout(() => {
    this.HantarModalsend = true;
  }, 0); // Short delay allows Angular change detection to register state change
}
// modal end send
  setsemula(): void {
    this.nama = '';
    this.bahagian = '';
    this.ic = '';
    this.unit = '';
    this.gred = '';
    this.kumpulan = '';
    this.tarikh = '';
    this.masaMula = '';
    this.masaAkhir = '';
    this.syif = '';
    this.alasan = '';
    this.digitalSign = '';
  }



constructor(private rosterService: PengurusanRosterGeotimeService) {}
   // Form model
  formData: LateNoteResponse = {
   pegawaiId: '',
  name: '',
  icNo: '',
  division: '',
  unit: '',
  gred: '',
  groupRSTR: '',
  clockInDate: '',
  clockInTime: '',
  locationId: '',
  clockInLate: false,
  attendanceId: '',
  reasonCode: '',
  noteText: '',
  message: '',
  scheduleId:'',
  reviewerUid:'',
};
ngOnInit() {
  const mockRequest: LateNoteRequest = {
    pegawaiId: '2025091210320733044900029'
  };

  // Fetch first part of the data (pegawai info)
  this.rosterService.getMaklumatPegawaiLewat(mockRequest).subscribe({
    next: (res: LateNoteResponse) => {
      this.formData = {
        ...this.formData, // keep existing defaults
        name: res.name,
        icNo: res.icNo,
        division: res.division,
        unit: res.unit,
        gred: res.gred,
        groupRSTR: res.groupRSTR,
      };
    },
    error: (err) => {
      console.error('Failed to fetch staff info by ID:', err);
    }
  });

}

formatToTimeOnly(datetime: string | null): string {
  if (!datetime) return '';
  const date = new Date(datetime);
  return date.toTimeString().slice(0, 5); // "HH:mm"
}

//POst session
  formOTData: OTapplyRequest = {
    pegawaiId: '',
    otDate: '',
    startTime: '',
    endTime: '',
    reason: '',
    createId: ''
  };

  SimpanOT(){
    const request: OTapplyRequest={
      pegawaiId:'2025091210320733044900029',
      otDate: this.formOTData.otDate,
      startTime: this.formOTData.startTime,
      endTime: this.formOTData.endTime,
      reason: this.formOTData.reason,
      updateId: '2025091210320733044900029',
    };
    console.log("Hantar OT Payload:");
    this.rosterService.PostputMaklumatMemohonOT(request).subscribe({
      next: (res) =>{
        console.log("response:",res);
        this.showHantarModal();
      },
      error: (err) =>{
        console.log("Gagal Hantar OT:", err);
        alert("Hantar OT gagal. Sila cuba lagi. ");
      }
    });
  }

  hantarOT() {
    const request: OTapplyRequest = {
      pegawaiId: '2025091210320733044900029',
      otDate: this.formOTData.otDate,
      startTime: this.formOTData.startTime,
      endTime: this.formOTData.endTime,
      reason: this.formOTData.reason,
      createId: 'UID0001' //because i dont know for now*
    };

    console.log("🕒 Hantar OT Payload:", request);

    this.rosterService.postMaklumatMemohonOT(request).subscribe({
      next: (res) => {
        console.log("✅ Response:", res);
        this.showHantarModal();
      },
      error: (err) => {
        console.error("❌ Gagal hantar OT:", err);
        alert('Hantar OT gagal. Sila cuba lagi.');
      }
    });
  }


}
