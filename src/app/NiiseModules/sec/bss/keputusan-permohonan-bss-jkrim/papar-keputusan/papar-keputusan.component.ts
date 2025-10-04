 // import ni untuk angular
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CardModule, GridModule, NavModule } from '@coreui/angular';
import { ModalModule, ButtonModule } from '@coreui/angular';
import { ActivatedRoute, NavigationEnd, Router, RouterOutlet } from '@angular/router';
import { inject } from '@angular/core';
import { BreadcrumbkeputusanmohonComponent } from './breadcrumb-keputusan.component';

@Component({
  selector: 'app-papar-keputusan',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule, // Added for [(ngModel)]
    CardModule,
    GridModule,
    NavModule,
    ModalModule,
    ButtonModule,
    BreadcrumbkeputusanmohonComponent
    
  ],//tambah ni untuk angular
  templateUrl: './papar-keputusan.component.html',
  styleUrls: ['./papar-keputusan.component.scss']
})
export class PaparKeputusanComponent {
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
  
  
}
