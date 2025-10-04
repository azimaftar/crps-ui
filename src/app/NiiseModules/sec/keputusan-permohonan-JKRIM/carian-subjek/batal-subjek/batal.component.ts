import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CardModule, GridModule, NavModule, ColComponent, RowComponent } from '@coreui/angular';
import { ModalModule, ButtonModule } from '@coreui/angular';
import { ActivatedRoute, NavigationEnd, Router, RouterOutlet } from '@angular/router';
import { inject } from '@angular/core';

@Component({
  selector: 'app-batal',
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
  templateUrl: './batal.component.html',
  styleUrls: ['../../keputusan-permohonan-jkrim.component.scss'],
})
export class BatalSlComponent {
  // Inject Router service
  private router = inject(Router);
  
  // Stepper properties
  currentStep: number = 1;
  totalSteps: number = 3;
  steps = [
    { number: 1, title: 'Maklumat Peribadi Subjek', route: '/sec/sl/bata;-sl' },
    { number: 2, title: 'Maklumat Tindakan', route: '/sec/sl/tindakan' },
    { number: 3, title: 'Dokumen Sokongan', route: '/sec/sl/dokumen2' },
  ];
  
  goToNextSection() {
    // Navigate to maklumat-tindakan component
    this.router.navigate(['/sec/sl/tindakan']);
  }

  goToPreviousSection() {
    // Navigate to carian-subjek page
    this.router.navigate(['/sec/sl/carian-subjek']);
  }
  
  onReset() {
    // Reset form logic here
    console.log('Form reset');
  }
}