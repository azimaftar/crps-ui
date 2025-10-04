import { Component, inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import {
  ColComponent,
  RowComponent,
  ButtonModule,
  FormModule
} from '@coreui/angular';
import { config } from "../../../../../config/uiConfig";
import { Router, RouterModule } from "@angular/router";

@Component({
  selector: 'app-document-form',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    CommonModule,
    ButtonModule,
    FormModule,
    RouterModule
],
  templateUrl: './maklumat-pemohon-bukan-warganegara.component.html',
  styleUrls: ['./maklumat-pemohon-bukan-warganegara.component.scss']
})
export class MaklumatPemohonBukanWarganegaraComponent implements OnInit {
  documentForm: FormGroup;
  private router = inject(Router);

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
    // console.log('Form submitted:', this.documentForm.value);
    
    // if (this.documentForm.valid) {
    //   const formData = this.documentForm.value;
    //   // Process the form data here
    //   console.log('Document Type:', formData.jenisDokumen);
    //   console.log('Document Number:', formData.noDokumen);
    // }

    this.router.navigate(['/login2']);
  }
  protected readonly config = config;
}