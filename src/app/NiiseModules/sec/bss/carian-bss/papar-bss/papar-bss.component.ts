 // import ni untuk angular
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CardModule, GridModule, NavModule } from '@coreui/angular';
import { ModalModule, ButtonModule } from '@coreui/angular';
import { ActivatedRoute, NavigationEnd, Router, RouterOutlet } from '@angular/router';
import { inject } from '@angular/core';
import { BreadcrumbBSSComponent } from './breadcrumb-BSS.component';

@Component({
  selector: 'app-papar-bss',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule, // Added for [(ngModel)]
    CardModule,
    GridModule,
    NavModule,
    ModalModule,
    ButtonModule,
    BreadcrumbBSSComponent
    
  ],//tambah ni untuk angular
  templateUrl: './papar-bss.component.html',
  styleUrls: ['../../bss.component.scss']
})
export class PaparBssComponent {
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
