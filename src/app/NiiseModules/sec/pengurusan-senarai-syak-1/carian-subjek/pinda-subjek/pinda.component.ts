import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CardModule, GridModule, NavModule, ColComponent, RowComponent } from '@coreui/angular';
import { ModalModule, ButtonModule } from '@coreui/angular';
import { ActivatedRoute, NavigationEnd, Router, RouterOutlet } from '@angular/router';
import { inject } from '@angular/core';

@Component({
  selector: 'app-pinda',
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
  templateUrl: './pinda.component.html',
  styleUrls: [
    '../../pengurusan-senarai-syak.component.scss'
  ]
})
export class PindaSlComponent {
  // Inject Router service
  private router = inject(Router);
  
  // Stepper properties
  currentStep: number = 1;
  totalSteps: number = 3;
  steps = [
    { number: 1, title: 'Maklumat Peribadi Subjek', route: '/sec/pengurusan-senarai-syak/pinda' },
    { number: 2, title: 'Maklumat Tindakan', route: '/sec//tindakan' },
    { number: 3, title: 'Dokumen Sokongan', route: '/sec/sl/dokumen' },
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