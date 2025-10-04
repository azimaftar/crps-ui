import { Component, inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import {
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
  templateUrl: './pendaftaran-id-warganegara.component.html',
  styleUrls: ['./pendaftaran-id-warganegara.component.scss']
})
export class PendaftaranIDWarganegaraComponent implements OnInit {
  documentForm: FormGroup;
  private router = inject(Router);
  protected readonly config = config;

  constructor(private fb: FormBuilder) {
    this.documentForm = this.fb.group({
      tarafPenduduk: [''],
      jenisDokumen: [''],
      noDokumen: [''],
      noPassportLama: [''],
      noPassportBaru: ['']
    });
  }

  ngOnInit(): void {
    this.documentForm.get('tarafPenduduk')?.valueChanges.subscribe(value => {
      if (value === 'bukanWarganegara') {
        this.documentForm.get('noPassportLama')?.setValidators([Validators.required]);
        this.documentForm.get('noPassportBaru')?.setValidators([Validators.required]);
        this.documentForm.get('noDokumen')?.clearValidators();
      } else {
        this.documentForm.get('noDokumen')?.setValidators([Validators.required]);
        this.documentForm.get('noPassportLama')?.clearValidators();
        this.documentForm.get('noPassportBaru')?.clearValidators();
      }

      this.documentForm.get('noDokumen')?.updateValueAndValidity();
      this.documentForm.get('noPassportLama')?.updateValueAndValidity();
      this.documentForm.get('noPassportBaru')?.updateValueAndValidity();
    });
  }

  get isBukanWarganegara(): boolean {
    return this.documentForm.get('tarafPenduduk')?.value === 'bukanWarganegara';
  }

  onSubmit(): void {
    console.log('Form submitted:', this.documentForm.value);

    if (this.documentForm.get('tarafPenduduk')?.value === 'bukanWarganegara') {
      this.router.navigate(['/maklumat-pemohon-bukan-warganegara']);
    } else {
      this.router.navigate(['/maklumat-pemohon-warganegara']);
    }
  }

}
