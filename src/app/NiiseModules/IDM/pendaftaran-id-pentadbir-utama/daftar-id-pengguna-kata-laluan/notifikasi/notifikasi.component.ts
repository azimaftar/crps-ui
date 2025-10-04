import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import {
  ColComponent,
  RowComponent,
  ButtonModule,
  FormModule
} from '@coreui/angular';

@Component({
  selector: 'app-document-form',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    CommonModule,
    ButtonModule,
    FormModule
],
  templateUrl: './notifikasi.component.html',
  styleUrls: ['./notifikasi.component.scss']
})
export class NotifikasiComponent implements OnInit {
  documentForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.documentForm = this.fb.group({
      jenisDokumen: [''],
      noDokumen: ['']
    });
  }

  ngOnInit(): void {
    // Initialize component
  }

  /**
   * Handle form submission
   */
  onSubmit(): void {
    console.log('Form submitted:', this.documentForm.value);
    
    if (this.documentForm.valid) {
      const formData = this.documentForm.value;
      // Process the form data here
      console.log('Document Type:', formData.jenisDokumen);
      console.log('Document Number:', formData.noDokumen);
    }
  }
}