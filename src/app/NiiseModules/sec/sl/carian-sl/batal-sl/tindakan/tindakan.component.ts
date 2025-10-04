import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CardModule, GridModule, NavModule, ColComponent, RowComponent } from '@coreui/angular';
import { ModalModule, ButtonModule } from '@coreui/angular';
import { ActivatedRoute, NavigationEnd, Router, RouterOutlet } from '@angular/router';
import { inject } from '@angular/core';

@Component({
  selector: 'app-tindakan',
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
  templateUrl: './tindakan.component.html',
  styleUrls: [
    '../../../sl.component.scss'
  ]
})
export class TindakanComponent {
  // Inject Router service
  private router = inject(Router);
  
  // Stepper properties
  currentStep: number = 2;
  totalSteps: number = 3;
  steps = [
    { number: 1, title: 'Maklumat Peribadi Sabjek', route: '/sec/sl/pinda-sl' },
    { number: 2, title: 'Maklumat Tindakan', route: '/sec/sl/maklumattindakan' },
    { number: 3, title: 'Dokumen Sokongan', route: '/sec/sl/dokumen' },
  ];
  
  goToNextSection() {
    // Navigate to dokumen component
    this.router.navigate(['/sec/sl/dokumen2']);
  }

  goToPreviousSection() {
    // Navigate to pinda-sl component
    this.router.navigate(['/sec/sl/batal-sl']);
  }
  
  onReset() {
    // Reset form logic here
    console.log('Form reset');
  }
}