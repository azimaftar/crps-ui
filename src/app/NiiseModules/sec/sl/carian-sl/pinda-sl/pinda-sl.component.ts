import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CardModule, GridModule, NavModule, ColComponent, RowComponent } from '@coreui/angular';
import { ModalModule, ButtonModule } from '@coreui/angular';
import { ActivatedRoute, NavigationEnd, Router, RouterOutlet } from '@angular/router';
import { inject } from '@angular/core';

@Component({
  selector: 'app-pinda-sl',
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
  templateUrl: './pinda-sl.component.html',
  styleUrls: [
    '../../sl.component.scss'
  ]
})
export class PindaSlComponent {
  // Inject Router service
  private router = inject(Router);
  
  // Stepper properties
  currentStep: number = 1;
  totalSteps: number = 3;
  steps = [
    { number: 1, title: 'Maklumat Peribadi Sabjek', route: '/sec/sl/pinda-sl' },
    { number: 2, title: 'Maklumat Tindakan', route: '/sec/sl/maklumattindakan' },
    { number: 3, title: 'Dokumen Sokongan', route: '/sec/sl/dokumen' },
  ];
  
  goToNextSection() {
    // Navigate to maklumat-tindakan component
    this.router.navigate(['/sec/sl/maklumattindakan']);
  }

  goToPreviousSection() {
    // Navigate to carian-sl page
    this.router.navigate(['/sec/sl/carian-sl']);
  }
  
  onReset() {
    // Reset form logic here
    console.log('Form reset');
  }
}