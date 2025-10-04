import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { RespKelulusanJadualTugas } from '../../../services/PengurusanRoster/KelulusanJadualTugas/KelulusanJadualTugasService';

@Injectable()
export class MockKelulusanJadualTugasService {
  getMaklumatCarian(filters: any): Observable<RespKelulusanJadualTugas[]> {
    // Return dummy data
    const dummyData: RespKelulusanJadualTugas[] = [
      {
        Kaunter: 'Kaunter 1',
        Name: 'Ahmad bin Ali',
        NOSERV: '12345',
        Gred: 'J41',
        approvRoster: '0', // 0: Tiada Status, 1: Lulus, 2: Gagal
        remarks: '',
        N001_START_TIME: '08:00',
        N001_END_TIME: '17:00',
        schedule_id: '1'
      },
      {
        Kaunter: 'Kaunter 2',
        Name: 'Siti binti Abu',
        NOSERV: '12346',
        Gred: 'J44',
        approvRoster: '1',
        remarks: 'Lulus dengan syarat',
        N001_START_TIME: '09:00',
        N001_END_TIME: '18:00',
        schedule_id: '2'
      },
      {
        Kaunter: 'Kaunter 3',
        Name: 'Mohd bin Hassan',
        NOSERV: '12347',
        Gred: 'J42',
        approvRoster: '2',
        remarks: 'Tidak hadir',
        N001_START_TIME: '08:30',
        N001_END_TIME: '17:30',
        schedule_id: '3'
      },
      // Add more dummy data as needed
    ];

    return of(dummyData);
  }
}