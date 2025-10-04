import { Component, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { 
  CardModule,
  GridModule,
  ButtonModule,
  ModalComponent,          // Add this
  ModalHeaderComponent,    // Add this  
  ModalBodyComponent,      // Add this
  ModalFooterComponent,    // Add this
  ModalTitleDirective      // Add this
} from '@coreui/angular';
import { Router, ActivatedRoute } from '@angular/router';

// Interface for form data structure
interface FormData {
  noDocument?: string;
  noIdentification?: string;
  name?: string;
  dateIssued?: string;
  expiryDate?: string;
  age?: string;
  nationality?: string;
  issuingCountry?: string;
  photoUrl?: string;
}

@Component({
  selector: 'app-maklumat-profil-maklumat-profil-pengembara',
  imports: [
    CommonModule,
    FormsModule,
    CardModule,
    GridModule,
    ButtonModule,
    ModalComponent,          // Add this
    ModalHeaderComponent,    // Add this
    ModalBodyComponent,      // Add this
    ModalFooterComponent,    // Add this
    ModalTitleDirective      // Add this
  ],
  templateUrl: './maklumat-profil-maklumat-profil-pengembara.component.html',
  styleUrl: './maklumat-profil-maklumat-profil-pengembara.component.scss'
})
export class MaklumatProfilMaklumatProfilPengembaraComponent {

  // Form data object matching template bindings
  formData: FormData = {
    noDocument: 'A0000002',
    noIdentification: '980330025489',
    name: 'Mohd Rusaini Bin Ishak',
    dateIssued: '20 Januari 1992',
    expiryDate: '20 Januari 2028',
    age: '26',
    nationality: 'MYS',
    issuingCountry: 'MYS - Malaysia',
    photoUrl: 'assets/images/avatars/3.jpg'
  };

  // Modal control property
  showSuccessNotification: boolean = false;

  constructor(private router: Router, private route: ActivatedRoute) {}

  // Show success modal instead of directly navigating
  showSuccessModal(): void {
    this.showSuccessNotification = true;
  }

  // Navigate to next page after modal is closed
  proceedToNextPage(): void {
    this.showSuccessNotification = false;
    // Navigate to next page after successful save
    this.router.navigate(['../laman-utama'], { relativeTo: this.route });
  }

  // Original openModal method (for other purposes)
  openModal(): void {
    this.router.navigate(['../laman-utama'], { relativeTo: this.route });
  }

  NextPage(): void {
    this.router.navigate(['../laman-utama'], { relativeTo: this.route });
  }

  // ... rest of your existing methods remain the same ...
}