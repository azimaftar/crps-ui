import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule, FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import {
  ButtonModule,
  CardModule,
  FormModule,
  HeaderModule,
  AvatarModule,
  BadgeModule,
  GridModule,
}
  from '@coreui/angular';
import { ReusableTabComponent } from '../../../shared/reusable-tab/reusable-tab.component';

@Component({
  selector: 'app-maklumat-dokumen-sokongan',
  standalone: true,
  imports: [CommonModule,
      ButtonModule,
      CardModule,
      FormModule,
      HeaderModule,
      AvatarModule,
      FormsModule,
      RouterModule,
      BadgeModule,
      GridModule,
      ReusableTabComponent], //Routing
  templateUrl: './maklumat-dokumen-sokongan.component.html',
  styleUrl: './maklumat-dokumen-sokongan.component.scss'
})

export class MaklumatDokumenSokonganComponent implements OnInit {
  isFormValid: boolean = true;

  currentStep = 2;
  totalSteps: number = 2;
  steps = [
    'Maklumat Pegawai Agensi Perkapalan',
    'Maklumat Dokumen Sokongan'
  ];

  dokumenList: any[] = [
    {
      bil: 1,
      keterangan: 'Permohonan SL',
      namaDokumen: 'Permohonan SL',
      format: 'DOCX'
    },
    {
      bil: 2,
      keterangan: 'Salinan Kad Pengenalan Pertama',
      namaDokumen: 'Salinan Kad Pengenalan',
      format: 'PDF'
    }
  ];

  constructor(private router: Router) {}

  ngOnInit(): void {
    console.log('Maklumat Dokumen Sokongan component initialized');
  }

  goToPrevious(): void {
    this.router.navigate(['/ibc/semakan-maklumat-pegawai-agensi-perkapalan/maklumat-pegawai-agensi-perkapalan']);
  }

  goToNext(): void {
    if (confirm('Adakah anda pasti untuk menyelesaikan permohonan ID pengguna ini?')) {
      alert('Permohonan ID pengguna telah berjaya diselesaikan!');
    }
    this.router.navigate(['/ibc/permohonan-pendaftaran-ejen-perkapalan/maklumat-dokumen-sokongan']);
  }

  saveForm(): void {
    alert('Maklumat berjaya disimpan!');
  }

  resetForm(): void {
    this.dokumenList = [];
  }

  onFileSelected(event: Event): void {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files.length > 0) {
      Array.from(input.files).forEach((file) => {
        const extension = file.name.split('.').pop()?.toUpperCase() || 'N/A';
        this.dokumenList.push({
          bil: this.dokumenList.length + 1,
          keterangan: '',
          namaDokumen: file.name,
          format: extension
        });
      });
      input.value = '';
    }
  }

  deleteDokumen(index: number): void {
    this.dokumenList.splice(index, 1);
    this.dokumenList.forEach((doc, i) => doc.bil = i + 1);
  }
}
