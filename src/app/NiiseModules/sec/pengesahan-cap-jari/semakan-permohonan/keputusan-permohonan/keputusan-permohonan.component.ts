import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { GridModule } from '@coreui/angular';
import { ProgressFlowComponent } from '../progress-flow/progress-flow.component'; 
import { inject } from '@angular/core';

@Component({
  selector: 'app-keputusan-permohonan',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, GridModule, ProgressFlowComponent,],
  templateUrl: './keputusan-permohonan.component.html',
  styleUrls: ['../../pengesahan-cap-jari.component.scss']
})
export class KeputusanPermohonanComponent {

   step = 4;

   documentForm: FormGroup; 

   constructor(private fb: FormBuilder, private router: Router) {

     this.documentForm = this.fb.group({
      // fields you actually need on this page:
      catatan: [''],
      pengguna: [''],
      idPengguna: [''],
      tarikhSemakan: ['', Validators.required],
     });

   }

  private readonly stepRoutes = [
    '/sec/pengesahan-cap-jari/semakan-permohonan',                      // 1 Carian
    '/sec/pengesahan-cap-jari/semakan-permohonan/maklumat-pemohon',    // 2 Maklumat
    '/sec/pengesahan-cap-jari/semakan-permohonan/dokumen-sokongan',    // 3 Dokumen
    '/sec/pengesahan-cap-jari/semakan-permohonan/keputusan-permohonan' // 4 Keputusan
  ];

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
