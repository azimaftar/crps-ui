 // import ni untuk angular
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CardModule, GridModule, NavModule } from '@coreui/angular';
import { ModalModule, ButtonModule } from '@coreui/angular';
import { ActivatedRoute, NavigationEnd, Router, RouterOutlet } from '@angular/router';
import { inject } from '@angular/core';
import { BreadcrumbpemerhatianComponent } from '../breadcrumb-pemerhatian.component';

@Component({
  selector: 'app-tambah-kes-pemerhatian-lhdn',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule, // Added for [(ngModel)]
    CardModule,
    GridModule,
    NavModule,
    ModalModule,
    ButtonModule,
    BreadcrumbpemerhatianComponent
    
  ],//tambah ni untuk angular
  templateUrl: './tambah-kes-pemerhatian-lhdn.component.html',
  styleUrls: [
    '../../../permehatian.component.scss'
  ]
})
export class TambahKesPemerhatianLHDNComponent {
  currentSection = 2;
  Hantarmodel: boolean = false;
  PastiyesPasti: boolean = false;
  goToNextSection() {
    if(this.currentSection < 4){
      this.currentSection++;
    }
    
  }

  goToPreviousSection() {
    if(this.currentSection > 2){
      this.currentSection--;
    }
    
  }
  modelforhantar() {
     this.Hantarmodel = false;
  setTimeout(() => {
    this.Hantarmodel = true;
  }, 0); // Short delay allows Angular change detection to register state change
  }
  closeModal(): void {//model for cmn-S001
    this.Hantarmodel = false;
  }
  Pasti() {
    this.PastiyesPasti= true;
    this.Hantarmodel = false;
     this.PastiyesPasti = false;
  setTimeout(() => {
    this.PastiyesPasti = true;
  }, 0); // Short delay allows Angular change detection to register state change
  }
  closePastiModal(): void {//model for cmn-S002
    this.PastiyesPasti = false;
  }
  
    selectedFileName1: string = '';
selectedFileName2: string = '';

bacaanOCRTidakBerjayaVisible: boolean = false;
tidakDapatMuatNaikVisible: boolean = false;

triggerFileInput(fileInputId: string) {
  const input = document.getElementById(fileInputId) as HTMLInputElement;
  input.click();
}

bacaanOCRTidakBerjayaModal() {
  this.bacaanOCRTidakBerjayaVisible = true;
}

bacaanOCRTidakBerjayaModalconfirm() {
  this.bacaanOCRTidakBerjayaVisible = false;
}

tidakDapatMuatNaikModal() {
  this.tidakDapatMuatNaikVisible = true;
}

tidakDapatMuatNaikModalconfirm() {
  this.tidakDapatMuatNaikVisible = false;
}

onFileChange(event: any, row: number) {
  const file = event.target.files[0];
  if (file) {
    if (row === 1) {
      this.selectedFileName1 = file.name;
    } else if (row === 2) {
      this.selectedFileName2 = file.name;
    }
    // Example: Show OCR gagal modal after upload
    this.bacaanOCRTidakBerjayaModal();
  } else {
    this.tidakDapatMuatNaikModal();
  }
}
activeUser: string = 'imigresen';  // default

switchUser(user: string) {
  this.activeUser = user;
  this.currentSection = 2; // reset section to start (or whichever you prefer)
}
 constructor(private router: Router) {}
Tambahimigresen() {
    this.router.navigate(['/sec/permehatian/carian-pemerhatian/tambah-kes-pemerhatian/tambah-kes-pemerhatian-imigresen']);
  }
  Tambahkastam() {
    this.router.navigate(['/sec/permehatian/carian-pemerhatian/tambah-kes-pemerhatian/tambah-kes-pemerhatian-kastam']);
  }
  Tambahlhdn() {
    this.router.navigate(['/sec/permehatian/carian-pemerhatian/tambah-kes-pemerhatian/tambah-kes-pemerhatian-lhdn']);
  }
  
}
