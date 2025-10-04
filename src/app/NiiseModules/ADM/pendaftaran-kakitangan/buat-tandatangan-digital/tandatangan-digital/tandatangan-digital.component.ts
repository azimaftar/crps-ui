import { Component, OnInit } from '@angular/core';
import { StepperComponent } from '../stepper/stepper.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  CardModule,
  NavModule,
  GridModule,
  ModalModule,
} from '@coreui/angular';
import { ApiService } from '../../api.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-tandatangan-digital',
  templateUrl: './tandatangan-digital.component.html',
  styleUrl: './tandatangan-digital.component.scss',
  standalone: true,
  imports: [
    CommonModule,
    CardModule,
    GridModule,
    NavModule,
    ModalModule,
    FormsModule,
    StepperComponent,
  ],
})
export class TandatanganDigitalComponent implements OnInit {
  constructor(
    private router: Router,
    private apiService: ApiService,
    private route: ActivatedRoute
  ) {}

  // Current active step tracking
  currentMainStep = 2; // Main step (1,2,3,4,5,6)
  currentSubStep = 0; // Sub step (1-15)

  // Input Field Logic
  readonlyField = true;
  readonlyFieldSignature = true;
  keperluanTandatangan: string = 'Ya'; // default value

  maklumatTandatangan = {
    sudahTandatangan: 'Telah Ditandatangan / Belum',
  };

  //Temporary until the real API is in specs
  digitalSignatureImage: string = '';
  digitalSignature: File | null = null;
  noDocID: string = '';

  tandatanganModalVisible = false;

  ngOnInit(): void {
    //this is passed from previous page, used to assign docID.
    const data1 = JSON.parse(localStorage.getItem('maklumatNoDocID') || '{}');
    this.noDocID = data1.noDocID || '';

    this.getTandatanganDigital();
  }

  SetSemula() {
    this.digitalSignature = null;
  }

  onFileSelected(event: Event) {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files.length > 0) {
      this.digitalSignature = input.files[0]; // assign the selected file
    }
  }

  private getTandatanganDigital() {
    this.apiService.getTandatanganDigital(this.noDocID).subscribe({
      next: (response: any) => {
        const data = response.data;
        const message = response.message;
        const status = response.status;

        console.log('Data:', data);
        console.log('Message:', message);
        console.log('Status:', status);

        this.digitalSignatureImage = data.signDigital || '';

        if (!this.digitalSignatureImage || this.digitalSignatureImage == null) {
          this.maklumatTandatangan.sudahTandatangan = 'Belum Ditandatangan';
          this.readonlyFieldSignature = false;
        } else {
          this.maklumatTandatangan.sudahTandatangan = 'Telah Ditandatangan';
          this.readonlyFieldSignature = true;
        }

        this.router.navigate([
          'adm/pendaftaran-kakitangan/buat-tandatangan-digital/tandatangan-digital',
        ]);
      },
      error: (error: any) => {
        console.error('Error loading data:', error);
      },
    });
  }

  uploadTandatanganDigital(jenisUpload: String) {
    //When theres spec for simpan/hantar seperate them using ifelse or pass it in back end and do it there
    console.log('Upload Jenis', jenisUpload);

    if (!this.digitalSignature) {
      console.error('No file selected!');
      return;
    }

    const digitalSignaturePng = new FormData();
    digitalSignaturePng.append('digitalSignaturePng', this.digitalSignature);

    this.apiService
      .postTandatanganDigitalBlob(this.noDocID, digitalSignaturePng)
      .subscribe({
        next: (response: any) => {
          const data = response.data;
          const message = response.message;
          const status = response.status;

          console.log('Data:', data);
          console.log('Message:', message);
          console.log('Status:', status);

          this.getTandatanganDigital();
        },
        error: (error: any) => {
          console.error('Error loading data:', error);
        },
      });
  }

  //this is to find the previous path
  navigatePreviousPage() {
    this.router.navigate([
      'adm/pendaftaran-kakitangan/carian-maklumat-kakitangan/maklumat-pakaian-seragam',
    ]);
  }

  //this is to find next page path
  navigateNextPage() {
    this.router.navigate([
      'adm/pendaftaran-kakitangan/pengambilan-biometrik',
    ]);
  }

  navigateClosePage() {
    localStorage.removeItem('maklumatKakitangan');
    localStorage.removeItem('maklumatNoDocID');
    this.router.navigate(['adm/pendaftaran-kakitangan/pendaftaran-kakitangan']);
  }
}
