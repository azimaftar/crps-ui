import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CardModule, GridModule, NavModule, ColComponent, RowComponent } from '@coreui/angular';
import { ModalModule, ButtonModule } from '@coreui/angular';
import { ActivatedRoute, NavigationEnd, Router, RouterOutlet } from '@angular/router';
import { inject } from '@angular/core';

@Component({
  selector: 'app-dokumen2',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    CardModule,
    GridModule,
    NavModule,
    ModalModule,
    ButtonModule,
    ColComponent,
    RowComponent
  ],
  templateUrl: './dokumen2.component.html',
  styleUrls: [
    '../../../sl.component.scss'
  ]
})
export class Dokumen2Component {
  Hantarmodel: boolean = false;
  PastiyesPasti: boolean = false;
  
  // Inject Router service
  private router = inject(Router);
  
  // Stepper properties
  currentStep: number = 3;
  totalSteps: number = 3;
  steps = [
    { number: 1, title: 'Maklumat Peribadi Sabjek', route: '/sec/sl/batal-sl' },
    { number: 2, title: 'Maklumat Tindakan', route: '/sec/sl/tindakan' },
    { number: 3, title: 'Dokumen Sokongan', route: '/sec/sl/dokumen2' },
  ];
  
  goToPreviousSection() {
    // Navigate to maklumat-tindakan component
    this.router.navigate(['/sec/sl/tindakan']);
  }
  
  onReset() {
    // Reset form logic here
    console.log('Form reset');
  }
  
  onUpload() {
    // File upload logic here
    console.log('File upload');
  }
  
  modelforhantar() {
    this.Hantarmodel = true;
  }
  
  closeModal(): void {
    this.Hantarmodel = false;
  }
  
  Pasti() {
    this.PastiyesPasti = true;
    this.Hantarmodel = false;
  }
  
  closePastiModal(): void {
    this.PastiyesPasti = false;
    this.router.navigate(['/sec/sl/carian-sl']);
  }
}