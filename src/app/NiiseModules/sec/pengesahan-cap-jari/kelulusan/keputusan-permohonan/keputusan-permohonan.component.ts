import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { GridModule } from '@coreui/angular';
import { ProgressFlowComponent } from '../progress-flow/progress-flow.component'; 

@Component({
  selector: 'app-keputusan-permohonan',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, GridModule, ProgressFlowComponent],
  templateUrl: './keputusan-permohonan.component.html',
  styleUrl: './keputusan-permohonan.component.scss'
})
export class KeputusanPermohonanComponent {

  // Stepper state (1=Carian, 2=Maklumat, 3=Dokumen, 4=Keputusan /Dokumen)
  // currentStep = 4;
  step = 4;

  // Form model (Reactive Forms to match [formGroup]="documentForm")
  documentForm: FormGroup;

  // Centralized step routes (adjust if your app uses different paths)
  private readonly stepRoutes = [
    '/sec/pengesahan-cap-jari/kelulusan',  
    '/sec/pengesahan-cap-jari/kelulusan/maklumat-pemohon',   
    '/sec/pengesahan-cap-jari/kelulusan/dokumen-sokongan', 
    '/sec/pengesahan-cap-jari/kelulusan/keputusan-permohonan', 
  ];

  constructor(private fb: FormBuilder, private router: Router) {
     this.documentForm = this.fb.group({
      // fields you actually need on this page:
      catatan: [''],
      pengguna: [''],
      idPengguna: [''],
      tarikhSemakan: ['', Validators.required],
     });
  }

  // HTML: (stepChange)="onStepChange($event)"
  onStepChange(next: number) {
    this.navigateToStep(next);
  }

  // Single navigation API
  public navigateToStep(step: number) {
    const clamped = Math.max(1, Math.min(step, this.stepRoutes.length));
    this.step = clamped;
    this.router.navigate([this.stepRoutes[clamped - 1]]).then(() => {
      window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    });
  }

  // Optional helpers for right-side indicators
  isStepActive(n: number)    { return this.step === n; }
  isStepCompleted(n: number) { return this.step > n; }

  // Footer buttons (example)
  previousStep()         { this.navigateToStep(this.step - 1); }
  gotoMaklumatPemohon()  { this.navigateToStep(2); }
  goToDokumenSokongan()  { this.navigateToStep(3); }

  onSubmit() {
    if (this.documentForm.invalid) {
      this.documentForm.markAllAsTouched();
      return;
    }
    // TODO: save…
    this.navigateToStep(4); // remain here after save (or go elsewhere)
  }

  resetForm() { this.documentForm.reset(); }
}
