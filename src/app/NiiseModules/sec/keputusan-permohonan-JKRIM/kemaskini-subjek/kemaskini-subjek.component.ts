 // import ni untuk angular
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CardModule, GridModule, NavModule } from '@coreui/angular';
import { ModalModule, ButtonModule } from '@coreui/angular';
import { ActivatedRoute, NavigationEnd, Router, RouterOutlet } from '@angular/router';
import { inject } from '@angular/core';

@Component({
  selector: 'app-kemaskini-subjek',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule, // Added for [(ngModel)]
    CardModule,
    GridModule,
    NavModule,
    ModalModule,
    ButtonModule
  ],//tambah ni untuk angular
  templateUrl: './kemaskini-subjek.component.html',
  styleUrls: ['../keputusan-permohonan-jkrim.component.scss']
})
export class KemasKiniSlComponent {
  currentSection = 1;
  Hantarmodel: boolean = false;
  PastiyesPasti: boolean = false;
  goToNextSection() {
    if(this.currentSection < 3){
      this.currentSection++;
    }
    
  }

  goToPreviousSection() {
    if(this.currentSection > 1){
      this.currentSection--;
    }
    
  }
  modelforhantar() {
    this.Hantarmodel= true;
  }
  closeModal(): void {//model for cmn-S001
    this.Hantarmodel = false;
  }
  Pasti() {
    this.PastiyesPasti= true;
    this.Hantarmodel = false;
  }
  closePastiModal(): void {//model for cmn-S002
    this.PastiyesPasti = false;
  }
  
  
}
