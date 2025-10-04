import { Component, OnInit} from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import {PermohonanFormDataService} from '../../../../../../services/pengesahanPergerakan/permohonan-form-data.service';
import {
  CardComponent, 
  CardBodyComponent, 
  RowComponent, 
  ColComponent, 
  ButtonDirective,
  CardModule, 
  GridModule 
} from '@coreui/angular';

@Component({
  selector: 'app-maklumat-permohonan-semakan',
  imports: [CommonModule,
    ReactiveFormsModule,
    RouterModule,
    CardComponent,
    CardBodyComponent,
    RowComponent,
    ColComponent,
    ButtonDirective,
    CommonModule,
    FormsModule,
    CardModule,
    GridModule,
  ],
  templateUrl: './maklumat-permohonan.component.html',
  styleUrls: ['../../../pengurusan-pengendalian-pengesahan.component.scss']
})

export class MaklumatPermohonanComponent implements OnInit {
  constructor(private router: Router, 
    private http: HttpClient, 
    private permohonanFormDataService: PermohonanFormDataService) {
  }

  documents: { keterangan: string; fileName?: string; format?: string }[] = [];
  showNoResults: boolean = false;
  formCompleted:boolean = false;

  formData: any = null;
  ngOnInit(): void {
    this.formData =  this.permohonanFormDataService.getKeputusanData();
    this.initialiseDocuments();

    if ((!this.formData) || (!this.formData.refNo)){
      this.router.navigate([this.steps[0].route]);
    }
  }

  currentStep: number = 2;
  totalSteps: number = 3;
  steps = [
    { number: 1, title: 'Carian Permohonan', isAccessible: true, route: '/sec/pengurusan-pengendalian-pengesahan/pengesahan-pergerakan/semakan-permohonan' },
    { number: 2, title: 'Maklumat Permohonan', isAccessible: true, route: '/sec/pengurusan-pengendalian-pengesahan/pengesahan-pergerakan/semakan-permohonan/maklumat-permohonan' },
    { number: 3, title: 'Keputusan Permohonan', isAccessible: true, route: '/sec/pengurusan-pengendalian-pengesahan/pengesahan-pergerakan/semakan-permohonan/keputusan-permohonan' }
  ];

  navigateToStep(steps: number): void {
    this.permohonanFormDataService.setKeputusanData(this.formData);
    this.router.navigate([this.steps[steps].route]);
  }

  initialiseDocuments() {
    if (this.formData.applCat == 'Pengesahan Pergerakan'){
      this.documents = [
        { keterangan: 'Salinan Kad Pengenalan/ Pasport/ Pas' },
        { keterangan: 'Dokumen Sokongan' }
      ];
    } else if (this.formData.applCat == 'Pengesahan Cap Keselamatan'){
      this.documents = [
        { keterangan: 'Biodata Subjek' },
        { keterangan: 'Muka surat pasport yang terdapat cop untuk pengesahan' }
      ];
    } else if (this.formData.applCat == 'Pengesahan Pas'){
      this.documents = [
        { keterangan: 'Salinan Pas' },
      ];
    } else if (this.formData.applCat == 'Pengesahan Senarai Syak'){
      this.documents = [
        { keterangan: 'Salinan Kad Pengenalan/ Pasport/ Pas' },
      ];
    }
  }

  paparFail(index: number){
  }
  
  selectFileForDocuments(index: number) {
    const fileInput = document.createElement('input');
    fileInput.type = 'file';
    fileInput.onchange = (event: any) => {
      const file = event.target.files[0];
      if (file) {
        const format = file.name.split('.').pop() || '';
        this.documents[index].fileName = file.name;
        this.documents[index].format = format.toUpperCase();
      }
    };
    fileInput.click();
  }

  onSubmit(event: Event) {
    event.preventDefault();
  }

  disableGoNext(): boolean {
    return (this.isLastStep())
  }

  disableGoBack(): boolean {
    return !(this.isFirstStep());
  }

  nextPage(): void {
    this.goNext();
  }

  goNext(): void {
    this.permohonanFormDataService.setKeputusanData(this.formData);

    const index = this.steps.findIndex(s => s.number === this.currentStep);
    if (index !== -1 && index + 1 < this.steps.length) {
      this.router.navigate([this.steps[index + 1].route]);
    }
  }

  goBack(): void {
    this.permohonanFormDataService.setKeputusanData(this.formData);

    const index = this.steps.findIndex(s => s.number === this.currentStep);
    if (index > 0) {
      this.router.navigate([this.steps[index - 1].route]);
    }
  }

  isLastStep(): boolean {
    return this.currentStep === this.steps.length;
  }

  isFirstStep(): boolean {
    return this.currentStep === 1;
  }

  nextStep(): void {
    if (this.currentStep < this.totalSteps) {
      this.currentStep++;
    }
  }

  previousStep(): void {
    if (this.currentStep > 1) {
      this.currentStep--;
    }
  }
}
