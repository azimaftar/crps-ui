import { Component, ElementRef, ViewChild, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  CardModule,
  NavModule,
  GridModule,
  ModalModule,
} from '@coreui/angular';import { Router } from '@angular/router';

@Component({
  selector: 'app-wajah-iris-biometrik',
  templateUrl: './wajah-iris-biometrik.component.html',
  styleUrls: ['./wajah-iris-biometrik.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
    CardModule,
    GridModule,
    NavModule,
    ModalModule,
    FormsModule,
    
],
})
export class WajahIrisBiometrikComponent implements AfterViewInit {

  showClockOutCard = false;
modalVisible: any;
  constructor(private router: Router) {}

  @ViewChild('video') videoElement!: ElementRef;


  ngAfterViewInit(): void {
    // Optional: Start camera immediately if card is shown by default
  }


  // modal
  
// rekod sucess modal
 ModalSuccess = false;
 ModalunSuccess = false;
  ModalScanOutside = false;

  
  showSuccessScan() {
  // Reset and reopen to ensure visibility
  this.ModalSuccess = false;
  setTimeout(() => {
    this.ModalSuccess = true;
  }, 0); // Short delay allows Angular change detection to register state change
}

 showunSuccessScan() {
  // Reset and reopen to ensure visibility
  this.ModalunSuccess = false;
  setTimeout(() => {
    this.ModalunSuccess = true;
  }, 0); // Short delay allows Angular change detection to register state change
}

 showModalOutsideScan() {
  
}

  closeModal() {
    this.ModalSuccess = false;
    this.ModalunSuccess = false;
    this.ModalScanOutside = false;

  }
  //end modal
  // maklumat geotime
  openDetail(): void {
     this.router.navigate(['/bkp/e-roster/clock-out-geo-time/maklumat-clock-out']);
  }
  openDetaillocation(): void {
     this.router.navigate(['/bkp/e-roster/clock-out-geo-time/maklumat-keluar-awal']);
  }
  openTanpaKebenaran(): void {
     this.router.navigate(['/bkp/e-roster/clock-out-geo-time/maklumat-tanpa-kebenaran']);
  }

   openModal() {
    this.modalVisible = true;
  }

  // 👇 this fixes the error
  handleConfirm(reason: string) {
    console.log('User selected reason:', reason);
    // here you can save it, call API, etc.
  }
  fingerprintImage: string | null = null;

// Example after scan success
onFingerprintCaptured(imageData: string) {
  // imageData could be Base64 string like "data:image/png;base64,...."
  this.fingerprintImage = imageData;
}
Ibujari() {
    this.router.navigate(['/sec/bss/pendaftaran-permohonan-bss/pendaftaran-biometrik-bss/empat-jari-biometrik/ibu-jari-kanan-kiri']);
  }

}
