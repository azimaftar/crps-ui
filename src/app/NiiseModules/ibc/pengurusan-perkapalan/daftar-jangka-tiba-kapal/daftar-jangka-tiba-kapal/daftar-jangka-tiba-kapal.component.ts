import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router, RouterModule, ActivatedRoute  } from '@angular/router';
import { ViewChild, ElementRef } from '@angular/core';

// CoreUI Imports
import {
  CardComponent,
  CardHeaderComponent,
  CardBodyComponent,
  RowComponent,
  ColComponent,
  ButtonDirective,
  FormLabelDirective,
  FormControlDirective,
  FormSelectDirective,
  FormModule,
  InputGroupComponent,
  InputGroupTextDirective,
} from '@coreui/angular';

// Interface for ship data
interface ShipData {
  namaKapal: string;
  noImo: string;
  noRasmi: string;
}

@Component({
  selector: 'app-daftar-jangka-tiba-kapal',
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule,
    // CoreUI Components
    CardComponent,
    CardHeaderComponent,
    CardBodyComponent,
    RowComponent,
    ColComponent,
    ButtonDirective,
    FormLabelDirective,
    FormControlDirective,
    FormModule,
  ],
  templateUrl: './daftar-jangka-tiba-kapal.component.html',
  styleUrl: './daftar-jangka-tiba-kapal.component.scss'
})
export class DaftarJangkaTibaKapalComponent implements OnInit {

  // ReactiveModule Form
  profilForm!: FormGroup;
  
  // Ship list for table
  shipList: ShipData[] = [];

  // Constructor
  constructor(
    private fb: FormBuilder,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    // Form initialization - simplified for ship registration
    this.profilForm = this.fb.group({
      jenisPemeriksaan: [''], // Nama Kapal
      docType: [''],          // No. IMO
      docNo: [''],            // No. Rasmi
    });

    // Initialize with default data (optional)
    this.loadDefaultShipData();
  }

  // Load default ship data
  loadDefaultShipData(): void {
    this.shipList = [
      { namaKapal: 'BAHAGIA RAYA', noImo: '9814275', noRasmi: '326737' },
      { namaKapal: 'Tun Walju', noImo: '7625911', noRasmi: '645231' },
      { namaKapal: 'S.Oliver', noImo: '9310465', noRasmi: '756324' }
    ];
  }

  // Add ship to table
  addShipToTable(): void {
    if (this.profilForm.valid) {
      const formValue = this.profilForm.value;
      
      // Check if all required fields are filled
      if (formValue.jenisPemeriksaan && formValue.docType && formValue.docNo) {
        const newShip: ShipData = {
          namaKapal: formValue.jenisPemeriksaan,
          noImo: formValue.docType,
          noRasmi: formValue.docNo
        };

        // Add to ship list
        this.shipList.push(newShip);
        
        // Reset form
        this.profilForm.reset();
        
        console.log('Ship added to table:', newShip);
        console.log('Current ship list:', this.shipList);
      } else {
        console.log('Please fill all required fields');
      }
    } else {
      console.log('Form is invalid');
      this.markFormGroupTouched();
    }
  }

  // Helper method to mark form as touched
  private markFormGroupTouched(): void {
    Object.keys(this.profilForm.controls).forEach(key => {
      const control = this.profilForm.get(key);
      if (control) {
        control.markAsTouched();
      }
    });
  }

  // Remove ship from table (optional feature)
  removeShip(index: number): void {
    this.shipList.splice(index, 1);
  }

  // Reset entire form and table
  resetForm(): void {
    this.profilForm.reset();
    this.shipList = [];
    this.loadDefaultShipData(); // Reload default data
  }
}