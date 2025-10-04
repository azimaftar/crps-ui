import { Component, ElementRef, ViewChild, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  CardModule,
  NavModule,
  GridModule,
  ModalModule,
} from '@coreui/angular';
import { ModalScanSuccessfulComponent } from "../../modal/modal-scan-successful/modal-scan-successful.component";
import { ModalScanUnsuccessfulComponent } from "../../modal/modal-scan-unsuccessful/modal-scan-unsuccessful.component";
import { ModalScanOutsideComponent } from '../../modal/modal-scan-outside/modal-scan-outside.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-clock-out-geo-time',
  templateUrl: './clock-out-geo-time.component.html',
  styleUrls: ['../../bkp.scss'],
  standalone: true,
  imports: [
    CommonModule,
    CardModule,
    GridModule,
    NavModule,
    ModalModule,
    FormsModule,
    ModalScanSuccessfulComponent,
    ModalScanUnsuccessfulComponent,
    ModalScanOutsideComponent
],
})
export class ClockOutGeoTimeComponent implements AfterViewInit {

  showClockOutCard = false;
  constructor(private router: Router) {}

  @ViewChild('video') videoElement!: ElementRef;

  toggleClockOutCard() {
    this.showClockOutCard = !this.showClockOutCard;

    // Start camera after DOM update
    setTimeout(() => {
      if (this.showClockOutCard) {
        this.startCamera();
      }
    }, 0);
  }

  ngAfterViewInit(): void {
    // Optional: Start camera immediately if card is shown by default
  }

  startCamera(): void {
    navigator.mediaDevices.getUserMedia({ video: true }).then((stream) => {
      if (this.videoElement?.nativeElement) {
        this.videoElement.nativeElement.srcObject = stream;
      }
    }).catch((err) => {
      console.error("Error accessing camera: ", err);
    });
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

}
