import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  CardModule,
  NavModule,
  GridModule,
  ModalModule,
  ButtonModule,
} from '@coreui/angular';
import {
  PengurusanRosterGeotimeService,
  LateNoteResponse,
  LateNoteRequest,
  LateinupdateRequest,
  LateinRequest,
  LateinResponse
} from '../../../../services/pengurusan-roster-geotime.service';
import { ModalSucessSendComponent } from "../../modal/modal-sucess-send/modal-sucess-send.component";
import { ModalSucessSendSaveComponent } from "../../modal/modal-sucess-send-save/modal-sucess-send-save.component";

@Component({
  selector: 'app-catatan-lewat',
  templateUrl: './catatan-lewat.component.html',
  styleUrls: ['../../bkp.scss'],
  standalone: true,
  imports: [
    CommonModule,
    CardModule,
    GridModule,
    NavModule,
    ModalModule,
    FormsModule,
    ButtonModule,
    ModalSucessSendComponent,
    ModalSucessSendSaveComponent,
  ],
})
export class CatatanLewatComponent implements OnInit {

  constructor(private rosterService: PengurusanRosterGeotimeService) {}

  // Modal state
  HantarModalsave = false;
  HantarModalsend = false;

    // Stepper props
  currentStep = 1;
  steps = [
    { number: 1, title: 'Maklumat lewat', route: '' },
  ];

  isStepActive(stepNumber: number): boolean {
    return this.currentStep === stepNumber;
  }

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
formnoteData: LateinResponse = {
  idAtdc: '',
  shcId: '',
  locId: '',
  rCode: '',
  noteText: '',
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
        locationId: res.locationId,
      };
    },
    error: (err) => {
      console.error('Failed to fetch staff info by ID:', err);
    }
  });

  // Fetch second part of the data (catatan lewat)
  this.rosterService.getMaklumatCatatanLewat(mockRequest).subscribe({
    next: (res: LateNoteResponse) => {
      this.formData = {
        ...this.formData, // retain first part
        clockInDate: res.clockInDate,
        clockInTime: res.clockInTime,
        locationId: res.locationId,
        clockInLate: res.clockInLate,
        attendanceId: res.attendanceId,
        reasonCode: res.reasonCode,
        noteText: res.noteText,
        message: res.message,
        scheduleId: res.scheduleId,
      };
    },
    error: (err) => {
      console.error('Failed to fetch catatan lewat by ID:', err);
    }
  });
}

formatToTimeOnly(datetime: string | null): string {
  if (!datetime) return '';
  const date = new Date(datetime);
  return date.toTimeString().slice(0, 5); // "HH:mm"
}


  // Submit form (Uncomment and connect backend if needed)
 hantarCatatan() {
  
  const request: LateinRequest = {
    pegawaiId: '2025091210320733044900029', // Or get from another source
    idAtdc: this.formData.attendanceId,
    shcId: this.formData.scheduleId, // Replace with actual value
    locId: this.formData.locationId,
    rCode: this.formnoteData.rCode,
    noteText: this.formnoteData.noteText
  };
console.log("🔍 Hantar Catatan Payload:", request);
  this.rosterService.postMaklumatCatatanLewat(request).subscribe({
    next: () => {
      this.showHantarModalsend(); // Show success modal
    },
    error: (err) => {
      console.error("Gagal hantar:", err);
      alert('Hantar gagal. Sila cuba lagi.');
    }
  });
}

 SimpanCatatan() {
  
  const request: LateinupdateRequest = {
     idAtdc: this.formData.attendanceId, // Or get from another source
    rCode: this.formnoteData.rCode,
    noteText: this.formnoteData.noteText
  };
console.log("🔍 Hantar Catatan Payload:", request);
  this.rosterService.postMaklumatLogMasuk(request).subscribe({
    next: () => {
      this.showHantarModal(); // Show success modal
    },
    error: (err) => {
      console.error("Gagal hantar:", err);
      alert('Hantar gagal. Sila cuba lagi.');
    }
  });
}

  // Show modal for save
  showHantarModal() {
    this.HantarModalsave = false;
    setTimeout(() => {
      this.HantarModalsave = true;
    }, 0);
  }

  // Show modal for send
  showHantarModalsend() {
    this.HantarModalsend = false;
    setTimeout(() => {
      this.HantarModalsend = true;
    }, 0);
  }

  // Close all modals
  closeModal() {
    this.HantarModalsend = false;
    this.HantarModalsave = false;
  }
}
