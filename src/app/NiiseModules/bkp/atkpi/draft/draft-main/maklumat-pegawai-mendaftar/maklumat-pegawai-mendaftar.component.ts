import { Component, ViewChild, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { HorizontalStepperComponent } from '../horizontal-stepper/horizontal-stepper.component';
import { FormDataService } from '../services/pegawai-data.service';

@Component({
  selector: 'app-maklumat-pegawai-mendaftar',
  imports: [CommonModule, FormsModule, HorizontalStepperComponent],
  templateUrl: './maklumat-pegawai-mendaftar.component.html',
  styleUrls: ['../../../../bkp.scss']
})
export class MaklumatPegawaiMendaftarComponent implements OnInit {
  pegawai: any = {};
  draf: any = {};

  recordId: string | null = null;
  recordData: any = null;

  currentStep = 1;
  submitted = false;

  @ViewChild(HorizontalStepperComponent) stepIndicator!: HorizontalStepperComponent;

  get maxStep(): number {
    return this.stepIndicator?.steps.length ?? 0;
  }

  constructor(
    private router: Router, 
    private route: ActivatedRoute,
    private dataService: FormDataService
  ) {}

  ngOnInit(): void {
    // ✅ Load existing data if available (e.g. user came back from Page 2)
    this.pegawai = this.dataService.getData('pegawai') || {
      nama: 'Siti Nur Afiqah Binti Ramlan',
      noPerkhidmatan: 'J1234567',
      gredJawatan: 'N41 - Pegawai yang Diculik',
      email: 'sitiafiqah@imi.gov.my',
      unit: 'Depot Tahanan Imigresen',
    };
    this.draf = this.dataService.getData('draf'); // || this.dataService.getDevDraf();  // Temporary for Dev, change to getEmptyDraf() once done
  }

  goNextStep(form?: any) {
    this.submitted = true; // show validation messages

    if (form?.invalid) {
      return; // stop if invalid
    }

    // ✅ Save both pegawai + draf into shared service before navigation
    this.dataService.setData('pegawai', this.pegawai);
    this.dataService.setData('draf', this.draf);

    if (this.currentStep < this.stepIndicator.steps.length) {
      this.currentStep++;
      console.log('Current step is ', this.currentStep);
      this.router.navigate(['../maklumat-draf-cadangan'], { relativeTo: this.route });
    }
  }

  goPrevStep() {
    if (this.currentStep > 1) {
      this.currentStep--;
      console.log('Current step is ', this.currentStep)
    }
  }

  // ngOnInit() {
  //   // Option A: Get ID from URL
  //   this.recordId = this.route.snapshot.paramMap.get('id');
  //   console.log('Editing record with ID:', this.recordId);

  //   // TODO: Fetch record from service using this.recordId
  //   // this.myService.getRecordById(this.recordId).subscribe(data => this.recordData = data);

  //   // Option B: If using navigation state (passing whole object directly)
  //   const nav = this.router.getCurrentNavigation();
  //   if (nav?.extras?.state?.['record']) {
  //     this.recordData = nav.extras.state['record'];
  //     console.log('Received full record:', this.recordData);
  //   }
  // }
}