import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { RouterLink } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { SemakanTindakanPenyeliaService } from '../../../../core/services/ibc-services/semakan-tindakan-penyelia.service';

interface PengembaraRecord {
  // bil: number;
  // namaPegawai: string;
  // tarikh: string;
  // masa: string;
  // noKp: string;
  // alamat: string;
  // negara: string;
  // wargaNegara: string;
  // tarikhLahir: string;
  // jantina: string;
  // noPassport: string;
  // tarikhTamat: string;
  // noPengenalan: string;
  // jenisDokumen: string;
  bil: string,
  namaPegawai: string,
  tarikh: string,
  masa: string,
  noDokumen: string,
  namaPengembara: string,
  tarikhLahir: string,
  jantina: string,
  noKp: string,
  negaraPengeluar: string,
  warganegara: string,
  tarikhTamat: string,
  jenisDokumen: string,
  uid: string;
}


@Component({
  selector: 'app-carian-profil-pengembara',
  standalone: true,
  imports: [CommonModule, FormsModule,RouterLink],
  templateUrl: './carian-profil-pengembara.component.html',
  styleUrl: './carian-profil-pengembara.component.scss'
})
export class CarianProfilPengembaraComponent {
  selectedDocumentType = 'Pilih';
  selectedTransaction = 'Kawalan Pemeriksaan Masuk';
  selectedReporter = 'Warganegara Asing';
  //selectedPelawat = 'Pilih';
  
  showTable = false;

  constructor(
    private router: Router,
    private semakanService: SemakanTindakanPenyeliaService

  ) { }

  // Sample data based on the image
  // pengembaraRecords: PengembaraRecord[] = [
  //   {
  //     bil: 1,
  //     nama: 'ILHAM FATINI BINTI APENDI',
  //     tarikh: '25/04/2025',
  //     masa: '10:50:36',
  //     noKp: 'v487865',
  //     alamat: 'JOELVIA ROHANI BENEDICT',
  //     negara: 'Malaysia',
  //     wargaNegara: 'Switzerland',
  //     tarikhLahir: '14/11/1960',
  //     jantina: 'LELAKI',
  //     noPassport: '',
  //     tarikhTamat: '',
  //     noPengenalan: '000909101338',
  //     jenisDokumen: ''
  //   },
  //   {
  //     bil: 2,
  //     nama: 'ROSILINA BINTI ALI',
  //     tarikh: '25/04/2025',
  //     masa: '09:42:36',
  //     noKp: 'v467896',
  //     alamat: 'LIM KE YING',
  //     negara: 'Indonesia',
  //     wargaNegara: 'Poland',
  //     tarikhLahir: '11/01/1990',
  //     jantina: 'PEREMPUAN',
  //     noPassport: '',
  //     tarikhTamat: '',
  //     noPengenalan: '061212074563',
  //     jenisDokumen: ''
  //   },
  //   {
  //     bil: 3,
  //     nama: 'AHMAD BIN ZUBIR',
  //     tarikh: '25/04/2025',
  //     masa: '08:20:45',
  //     noKp: 'A0000000',
  //     alamat: 'MOHD HUSNAIN BIN DRUS',
  //     negara: 'Thailand',
  //     wargaNegara: 'Korea',
  //     tarikhLahir: '30/05/1988',
  //     jantina: 'LELAKI',
  //     noPassport: '',
  //     tarikhTamat: '',
  //     noPengenalan: '991010105072',
  //     jenisDokumen: ''
  //   }
  // ];

  onSemak() {
    //this.showTable = true;
    const currentDate = new Date().toISOString().split('.')[0];

    console.log('Checking branchCode:', this.branchCode);
    console.log('Checking txnCode:', this.txnCode);
    console.log('Checking currentDate:', currentDate);
    console.log('Selected visitorType:', this.visitorType);

    const params = {
      n3xitBranch: this.branchCode,
      currentDate: currentDate,
      txnCode: this.txnCode,
      visitorType: this.visitorType  // 👈 take value directly
    };

    console.log('Parameters:', params);

    this.semakanService.getListProfilPengembara(this.branchCode, currentDate, this.txnCode, this.visitorType).subscribe({
      next: (response) => {
        // Assume backend returns array `data`
        this.pengembaraRecords = response.data.map((item: any, index: number) => ({
          bil: index + 1,
          namaPegawai: item.officerName,
          tarikh: item.txnDate,
          masa: item.txnTime,
          noDokumen: item.docNo,
          namaPengembara: item.name,
          tarikhLahir: item.dob,
          jantina: item.gender,
          negaraPengeluar: item.countryIssue,
          warganegara: item.nationality,
          tarikhTamat: item.expiryDate,
          noKp: item.kpNo,
          jenisDokumen: item.docType,
          uid: item.uid
        }));
        this.showTable = true;
      },
      error: (err) => {
        console.error('Error fetching pengembara records', err);
      }
    });
  }


  onImbas(): void {
    console.log('Navigating to previous step');
    // Add your navigation logic here
    // Example: this.router.navigate(['/previous-step']);
    this.router.navigate(['/ibc/semakan-dan-tindakan-penyelia/imbasan-dokumen-perjalanan']);
  }

  onUidClick(uid: string) {
  console.log('Clicked UID:', uid);

  // Terus navigate tanpa API
  this.router.navigate(
    ['/ibc/semakan-dan-tindakan-penyelia/maklumat-profil-pegawai', uid]
  );

  return false; // untuk elak reload kalau hyperlink <a>
}



  // onViewAll() {
  //   this.showTable = true;
  // }

  onReset() {
    this.selectedDocumentType = 'Pilih';
    this.selectedTransaction = 'Kawalan Pemeriksaan Masuk';
    this.selectedReporter = 'Warganegara Asing';
    this.visitorType = 'Pilih';
    this.showTable = false;
  }

  //Code Khai
  //declare variable
  readonly branchCode: string = '1';
  readonly txnCode: string = '1';
  visitorType: string = 'Pilih';
  pengembaraRecords: PengembaraRecord[] = [];

}