import { Component, inject } from '@angular/core';
import {
  ContainerComponent,
  RowComponent,
  ColComponent,
  CardComponent,
  CardBodyComponent,
  CardFooterComponent,
} from '@coreui/angular';
import { Router, RouterOutlet } from '@angular/router'; // Import Router
// import { ActivatedRoute } from '@angular/router';
import { NavigationFlowComponent } from './navigation-flow/navigation-flow.component';
import { CarianVaksinComponent } from './carian-vaksin/carian-vaksin.component';
//import { DaftarVaksinComponent } from './daftar-vaksin/daftar-vaksin.component';

@Component({
  selector: 'app-daftar-kemaskini-vaksin',
  standalone: true,
  imports: [
    ContainerComponent,
    RowComponent,
    ColComponent,
    CardComponent,
    CardBodyComponent,
    CardFooterComponent,
    RouterOutlet,
    NavigationFlowComponent,
    CarianVaksinComponent,
    
  ],
  templateUrl: './daftar-kemaskini-vaksin.component.html',
  styleUrls: ['../../bkp.scss'],
})

export class DaftarKemaskiniVaksinComponent {

  step = 1; 
  private router = inject(Router);
  private stepRoutes = [
    'bkp/pengurusan-vaksin/daftar-kemaskini-vaksin',
    'bkp/pengurusan-vaksin/daftar-kemaskini-vaksin/daftar-vaksin'
  ];

// private route = inject(ActivatedRoute);

  // Card data for the interface
  // cardData = [
  //   {
  //     title: 'Daftar Maklumat Vaksin',
  //   },
  //   {
  //     title: 'Mengemaskini Maklumat Vaksin',
  //   },
    
  // ];

  constructor() {}

  // Method to handle card clicks if needed
  //   onCardClick(cardTitle: string): void {
  //   console.log('Card clicked:', cardTitle);
  //   // Add your navigation or action logic here
  // }

  //   onDaftarMaklumatVaksin(): void {
  //   this.router.navigate(['/bkp/pengurusan-vaksin/daftar-kemaskini-vaksin']);
  // }

  onStepChange(newStep: number) {
    this.step = newStep;
    this.navigateToStep();
  }

  private navigateToStep(): void {
    this.router.navigate([this.stepRoutes[this.step - 1]]).then(() => {
      window.scrollTo(0, 0);
    });
  }

  // nextStep() {
  // if (this.step < 2) {
  //   this.step++;
  // }
  // }

  nextStep(): void {
    if (this.step < this.stepRoutes.length) {
      this.router.navigate([this.stepRoutes[this.step]]).then(() => {
        this.step++;
      });
    }
  }

  previousStep(): void {
    if (this.step > 1) {
      this.step--;
      this.router.navigate([this.stepRoutes[this.step - 1]]).then(() => {
        window.scrollTo(0, 0);
      });
    }
  }

  // prevStep() {
  //   if (this.step > 1) {
  //     this.step--;
  //   }
  // }

   onDaftarVaksin(): void {
    this.router.navigate(['/bkp/pengurusan-vaksin/daftar-kemaskini-vaksin/daftar-vaksin']);
  }

    onCarianVaksin(): void {
    this.router.navigate(['/bkp/pengurusan-vaksin/daftar-kemaskini-vaksin/carian-vaksin']);
  }

}

