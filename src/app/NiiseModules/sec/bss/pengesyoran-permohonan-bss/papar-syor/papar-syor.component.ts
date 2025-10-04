 // import ni untuk angular
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CardModule, GridModule, NavModule } from '@coreui/angular';
import { ModalModule, ButtonModule } from '@coreui/angular';
import { ActivatedRoute, NavigationEnd, Router, RouterOutlet } from '@angular/router';
import { inject } from '@angular/core';
import { BreadcrumbsyormohonComponent } from './breadcrumb-syormohon.component';

@Component({
  selector: 'app-papar-syor',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule, // Added for [(ngModel)]
    CardModule,
    GridModule,
    NavModule,
    ModalModule,
    ButtonModule,
    BreadcrumbsyormohonComponent
    
  ],//tambah ni untuk angular
  templateUrl: './papar-syor.component.html',
  styleUrls: ['../../bss.component.scss']
})
export class PaparsyorComponent {
  currentSection = 2;
  Hantarmodel: boolean = false;
  PastiyesPasti: boolean = false;
  goToNextSection() {
    if(this.currentSection < 3){
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
  
  
}
