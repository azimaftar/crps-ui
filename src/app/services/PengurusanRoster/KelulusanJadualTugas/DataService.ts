// data.service.ts
import { Injectable } from '@angular/core';
import { ReceivedData } from '../../../NiiseModules/bkp/pengurusan-roaster/Kelulusan-Jadual-Tugas/carian-kelulusan-jadual-tugas/maklumat-lokasi/maklumat-lokasi.component';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  private sharedDataKey = 'kelulusanJadualTugasData';

  setSharedData(data: ReceivedData) {
    sessionStorage.setItem(this.sharedDataKey, JSON.stringify(data));
  }
  
  getSharedData(): ReceivedData | null {
    const data = sessionStorage.getItem(this.sharedDataKey);
    return data ? JSON.parse(data) : null;
  }

  clearSharedData() {
    sessionStorage.removeItem(this.sharedDataKey);
  }
}
