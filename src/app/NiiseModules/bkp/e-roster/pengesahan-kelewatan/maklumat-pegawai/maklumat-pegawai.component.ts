import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { forkJoin } from 'rxjs';
import {
  CardModule,
  NavModule,
  GridModule,
  ModalModule,
  FormModule
} from '@coreui/angular';
import {
  PengurusanRosterGeotimeService,
  LateNoteResponse
} from '../../../../../services/pengurusan-roster-geotime.service';
import { ModalSucessSendSaveComponent } from '../../../modal/modal-sucess-send-save/modal-sucess-send-save.component';
import { ModalSucessSendComponent } from "../../../modal/modal-sucess-send/modal-sucess-send.component";

@Component({
  selector: 'app-maklumat-pegawai',
  templateUrl: './maklumat-pegawai.component.html',
  styleUrls: [
    '../../../bkp.scss'
  ],
  standalone: true,
  imports: [
    CommonModule,
    CardModule,
    GridModule,
    NavModule,
    ModalModule,
    FormsModule,
    FormModule,
    ModalSucessSendSaveComponent,
    ModalSucessSendComponent
  ],
})
export class MaklumatPegawaiComponent {
  arrayOfCutiADMData: any[] = [];
  arrayOfKelulusanCatatan: any[] = [];
  private pegawaiIdList: string[] = [];
  private reviewerUid: string = 'UID0001'; // for reviewBy

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
    scheduleId: '',
    reviewerUid:'',
  };

  constructor(private rosterService: PengurusanRosterGeotimeService) {}

  ngOnInit(): void {
    this.initMaklumatCutiADM();
  }

  private initMaklumatCutiADM(): void {
    const ids = '2025091210320733044900029'; // get from somewhere else later

    
    this.rosterService.getMaklumatCutiADMMultiple(ids).subscribe({
      next: (resList: any[]) => {
        this.arrayOfCutiADMData = resList;
        this.pegawaiIdList = resList.map(item => item.stfMstrUid);

        // Get reviewer UID dynamically — adjust the field name if different
        if (resList.length > 0 && resList[0].reviewerUid) {
          this.reviewerUid = resList[0].reviewerUid;
        } else {
          // fallback: use logged-in user from localStorage/session
          this.reviewerUid = localStorage.getItem('currentUserUid') || '';
        }

        console.log('Reviewer UID:', this.reviewerUid);
        console.log('Extracted IDs:', this.pegawaiIdList);

        this.initmaklumatKelulusan();
      },
      error: (err) =>
        console.error('Failed to fetch multiple cuti ADM:', err),
    });
  }

  private initmaklumatKelulusan(): void {
    console.log(
      'Starting initmaklumatKelulusan with pegawaiIdList:',
      this.pegawaiIdList
    );

    this.rosterService
      .getKelulusanMaklumatCatatanLewat(this.pegawaiIdList)
      .subscribe({
        next: (resList: any[]) => {
          console.log('Raw kelulusan response:', resList);

          this.arrayOfKelulusanCatatan = resList;

          this.arrayOfCutiADMData = this.arrayOfCutiADMData.map((cuti) => {
            const match = resList.find(
              (kelulusan) => kelulusan.stfMstrUid === cuti.stfMstrUid
            );
            const updatedCuti = {
              ...cuti,
              noteText: match ? match.noteText : cuti.noteText,
              lateStatus: match ? match.lateStatus : cuti.lateStatus,
              attendanceId: match ? match.attendanceId : cuti.attendanceId,
              
            };

            console.log(`Merging cuti for stfMstrUid=${cuti.stfMstrUid}:`, {
              original: cuti,
              match: match,
              updated: updatedCuti,
            });

            return updatedCuti;
          });

          this.arrayOfCutiADMData = this.arrayOfCutiADMData.filter(
            (cuti) => cuti.lateStatus === 'Pending'
          );

          console.log('Filtered Pending data:', this.arrayOfCutiADMData);
        },
        error: (err) => console.error('Failed to fetch kelulusan:', err),
      });
  }

  selectAll(value: 'Lulus' | 'Tidak Lulus') {
    this.arrayOfCutiADMData.forEach((record) => {
      record.reviewStatus  = value;
    });
  }

  // Submit all approval decisions
  postKelulusanAll() {
  // Filter only records where reviewStatus is set to 'Lulus' or 'Tidak Lulus'
  const filteredRecords = this.arrayOfCutiADMData.filter(
    record => record.reviewStatus === 'Lulus' || record.reviewStatus === 'Tidak Lulus'
  );

  const payload = filteredRecords.map(record => ({
    idAtdc: record.attendanceId,
    reviewBy: record.j001SpvId,  // or your reviewerUid if appropriate
    reviewStatus: record.reviewStatus === 'Lulus' ? 'A' : 'R',
      status: 'Reviewed'
  }));
console.log('Filtered Records:', filteredRecords);
  console.log('Payload to send:', payload);
  this.rosterService.putKelulusanCatatanLewatList(payload).subscribe({
    next: (res) => {
      console.log('Successfully posted:', res);
      this.showHantarModalsend();
    },
    error: (err) => console.error('Failed to post:', err),
  });
}


  // Submit all approval decisions
  putKelulusanAll() {
  // Filter only records where reviewStatus is set to 'Lulus' or 'Tidak Lulus'
  const filteredRecords = this.arrayOfCutiADMData.filter(
    record => record.reviewStatus === 'Lulus' || record.reviewStatus === 'Tidak Lulus'
  );

  const payload = filteredRecords.map(record => ({
    idAtdc: record.attendanceId,
    reviewBy: record.j001SpvId,  // or your reviewerUid if appropriate
    reviewStatus: record.reviewStatus,
      status: 'Pending'
  }));

  this.rosterService.putKelulusanCatatanLewatList(payload).subscribe({
    next: (res) => {
      console.log('Successfully posted:', res);
      this.showHantarModalsend();
    },
    error: (err) => console.error('Failed to post:', err),
  });
}



  // Modal controls
  HantarModalsave = false;
  HantarModalsend = false;

  showHantarModal() {
    this.HantarModalsave = false;
    setTimeout(() => {
      this.HantarModalsave = true;
    }, 0);
  }

  showHantarModalsend() {
    this.HantarModalsend = false;
    setTimeout(() => {
      this.HantarModalsend = true;
    }, 0);
  }

  closeModal() {
  this.HantarModalsave = false;
  this.HantarModalsend = false;

  // Full page reload (not recommended for SPA)
  window.location.reload();
}

}
