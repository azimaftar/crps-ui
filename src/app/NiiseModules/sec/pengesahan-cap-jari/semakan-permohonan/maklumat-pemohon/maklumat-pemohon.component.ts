import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { GridModule } from '@coreui/angular';
import { Router, ActivatedRoute } from '@angular/router'; 
import { ProgressFlowComponent } from '../progress-flow/progress-flow.component'; 

@Component({
  selector: 'app-maklumat-pemohon',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, GridModule, ProgressFlowComponent],
  templateUrl: './maklumat-pemohon.component.html',
  styleUrls: ['./maklumat-pemohon.component.scss']
})
export class MaklumatPemohonComponent {

  step: number = 1;
  documentForm: FormGroup;

  private readonly stepRoutes = [
    '/sec/pengesahan-cap-jari/semakan-permohonan',
    '/sec/pengesahan-cap-jari/semakan-permohonan/maklumat-pemohon',
    '/sec/pengesahan-cap-jari/semakan-permohonan/dokumen-sokongan',
    '/sec/pengesahan-cap-jari/semakan-permohonan/keputusan-permohonan',
  ];

  constructor(private router: Router, private activatedRoute: ActivatedRoute, private fb: FormBuilder) {
    this.documentForm = this.fb.group({
      jenisPengesahan: [''],
      nama: [''],
      noIc: [''],
      tarikhLahir: [''],
      jantina: [''],
      alamat: [''],
      poskod: [''],
      bandar: [''],
      negeri: [''],
      noRujukan: [''],
      tarikhSurat: [''],
    });
  }

  resetForm(): void {
    this.documentForm.reset();
  }

  ngOnInit() {
    this.syncStepWithRoute();
  }

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
