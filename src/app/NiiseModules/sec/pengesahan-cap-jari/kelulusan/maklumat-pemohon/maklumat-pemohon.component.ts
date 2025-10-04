import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { GridModule } from '@coreui/angular';
import { ProgressFlowComponent } from '../progress-flow/progress-flow.component'; 

@Component({
  selector: 'app-maklumat-pemohon',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, GridModule, ProgressFlowComponent],
  templateUrl: './maklumat-pemohon.component.html',
  styleUrl: './maklumat-pemohon.component.scss'
})
export class MaklumatPemohonComponent {

  // Stepper state (1=Carian, 2=Maklumat, 3=Keputusan/Dokumen)
  // currentStep = 2;
  step: number = 1;


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
      jenisPengesahan: ['', Validators.required],
      nama: ['', [Validators.required, Validators.maxLength(120)]],
      noIc: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(20)]],
      tarikhLahir: ['', Validators.required],
      jantina: ['', Validators.required],
      alamat: ['', Validators.required],
      poskod: ['', [Validators.required, Validators.maxLength(10)]],
      bandar: ['', Validators.required],
      negeri: ['', Validators.required],

      // Maklumat Surat
      noRujukan: ['', Validators.required],
      tarikhSurat: ['', Validators.required],
    });
  }

  // // ---------- UI helpers for the right-side steps ----------
  // isStepActive(n: number): boolean {
  //   return this.currentStep === n;
  // }

  // isStepCompleted(n: number): boolean {
  //   return this.currentStep > n;
  // }

  // ---------- Footer buttons ----------
  resetForm(): void {
    this.documentForm.reset({
      jenisPengesahan: '',
      jantina: '',
      negeri: '',
    });
    // keep user on current step
  }

   ngOnInit() {
    this.syncStepWithRoute();
  }

  // The “Hantar” button in your footer calls onSubmit()
  // onSubmit(): void {
  //   if (this.documentForm.invalid) {
  //     this.documentForm.markAllAsTouched();
  //     return;
  //   }
  //   // TODO: Send to API if needed
  //   // After submit, advance to next step (Dokumen Sokongan)
  //   this.navigateToStep(3);
  // }

  // // The "<" button in your footer
  // gotoMaklumatPemohon(): void {
  //   // You’re already on Maklumat; in your footer this looks like a “Back” button.
  //   // So navigate to step 1 (Carian).
  //   this.navigateToStep(1);
  // }

  // // The ">" button in your footer
  // goToDokumenSokongan(): void {
  //   // Optionally require valid form before moving on:
  //   // if (this.documentForm.invalid) {
  //   //   this.documentForm.markAllAsTouched();
  //   //   return;
  //   // }
  //   this.navigateToStep(3);
  // }

  // ---------- Navigation ----------
  // private navigateToStep(step: number): void {
  //   // Clamp 1..length
  //   const clamped = Math.max(1, Math.min(step, this.stepRoutes.length));
  //   this.currentStep = clamped;

  //   this.router.navigate([this.stepRoutes[clamped - 1]]).then(() => {
  //     window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  //   });
  // }

  onStepChange(newStep: number) {
    this.step = newStep;
    this.navigateToStep();
  }

  private navigateToStep(): void {
    // this.router.navigate([this.stepRoutes[this.step - 1]]).then(() => {
    //   window.scrollTo(0, 0);
    // });

    if (this.step >= 1 && this.step <= this.stepRoutes.length) {
      this.router.navigate([this.stepRoutes[this.step - 1]]).then(() => {
        window.scrollTo(0, 0);
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


  nextStep(): void {
    if (this.step < this.stepRoutes.length) {
      this.step++; // Increment step first
      this.router.navigate([this.stepRoutes[this.step - 1]]).then(() => {
        window.scrollTo(0, 0);
      });
    }
  }

  private syncStepWithRoute(): void {
    const currentPath = this.router.url.split('?')[0]; // Ignore query params
    const currentStep = this.stepRoutes.indexOf(currentPath);
    this.step = currentStep >= 0 ? currentStep + 1 : 1;
  }
}
