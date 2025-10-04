import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import {ColComponent, RowComponent} from '@coreui/angular'
import { FormsModule } from '@angular/forms';
import { Router, ActivatedRoute, RouterOutlet } from '@angular/router';
import {PenggantianTugasServices} from '../../../../../core/services/bkp-services/PenggantianTugas.services';
import { CommonModule } from '@angular/common';
import SignaturePad from 'signature_pad';
import { ReusableTabComponent } from '../../shared/reusable-tab/reusable-tab.component';
import { LocalStorageService } from '../../../../../core/services/bkp-services/local-storage.service';

interface Subject {
  noKP: string;
  noDokumen: string;
  warganegara: string;
  nama: string;
  tanggalLahir: string;
  jenisKelamin: string;
  status: string;
  NoRujukan: string;
  namapegawai: string;
}

@Component({
  selector: 'app-maklumat-pegawai-pemohon',
  imports: [FormsModule, CommonModule, RowComponent, ColComponent, RouterOutlet, ReusableTabComponent],
  templateUrl: './maklumat-pegawai-pemohon.component.html',
  styleUrls: ['../../../bkp.scss'],
})
export class MaklumatPegawaiPemohonComponent implements OnInit, AfterViewInit {

  constructor(private router: Router, private route: ActivatedRoute,
    private  penggantiantugasservices: PenggantianTugasServices,
  private localStorage : LocalStorageService) {}

  @ViewChild('signaturePad') signaturePadElement!: ElementRef<HTMLCanvasElement>;
  private signaturePad!: SignaturePad;

  pegawai_ganti: any = {};
  pegawai_mohon: any = {};
  

  ngAfterViewInit() {
    this.signaturePad = new SignaturePad(this.signaturePadElement.nativeElement, {
      backgroundColor: '#ffffff',
      penColor: 'black'
    });
  }

  clearSignature() {
    this.signaturePad.clear();
    this.pegawai_mohon.tandatangan = null;
  }

  saveSignature() {
    if (!this.signaturePad.isEmpty()) {
      this.pegawai_mohon.tandatangan = this.signaturePad.toDataURL('image/png');
      console.log("Saved signature:", this.pegawai_mohon.tandatangan);
    } else {
      alert("Sila tandatangan dahulu!");
    }
  }

  hariList = ['Ahad', 'Isnin', 'Selasa', 'Rabu', 'Khamis', 'Jumaat', 'Sabtu'];


  subjects: Subject[] = [];

  // currentStep: number = 1;
  totalSteps: number = 2;
  maxStep = 2;
  minStep = 1;

  currentStep = 1;
  steps = [
    { number: 1, title: 'Maklumat Pegawai pemohon', route: '' },
    { number: 2, title: 'Maklumat Pegawai Pengganti', route: '' },
  ];

  isStepActive(stepNumber: number): boolean {
    return this.currentStep === stepNumber;
  }

  // steps = [
  //        'Maklumat Pegawai Pemohon',
  //        'Maklumat Pegawai Pengganti'
  //      ];

  goToNextStep(): void {
    if (this.currentStep < this.totalSteps) {
      this.currentStep++;
    }
  }

  goToPreviousStep() {
    if (this.currentStep === 2) {
      this.router.navigate(['./'], { relativeTo: this.route });
    }
  }


  selectSubject(subject: Subject): void {
    console.log('Selected subject:', subject);
  }

  bahagianList: string[] = ["Bahagian Dasar & Perancangan", "Bahagian Perancangan"];
  unitList: string[] = ["Unit Pengurusan Aset"];
  kumpulanList: string[] = ["A", "B", "C"];

  // ngOnInit(): void {
//     const id = this.route.snapshot.paramMap.get('id');
//     if (id) {
//       this.penggantiantugasservices.getMaklumatPegawaiGantianTugas(id).subscribe({
//        next: (data) => {
//           this.pegawai = data;

//           this.pegawai.bahagian = data.bahagian; 
//           this.pegawai.unit = data.unit; 
//           this.pegawai.kumpulan = data.kumpulan; 

//           if (this.pegawai.tarikhtugas) {
//             const date = new Date(this.pegawai.tarikhtugas);
//             const dayIndex = date.getDay();
//             this.pegawai.hari = this.hariList[dayIndex];
//           }
//         },
//         error: (err) => {
//           console.error('Error fetching details', err);
//         }
//       });
//     }
//  }

  ngOnInit(): void {
    const nav = this.router.getCurrentNavigation();
    if (nav?.extras.state && nav.extras.state['data']) {
      this.pegawai_ganti = nav.extras.state['data'];
      this.localStorage.setItem('data', this.pegawai_ganti);
    } else {
      this.pegawai_ganti = this.localStorage.getItem<any>('data');
    }

    console.log('Loaded pegawai:', this.pegawai_ganti);

    this.route.url.subscribe(urlSegments => {
      this.currentStep = urlSegments.some(s => s.path === 'maklumat-pegawai-pengganti') ? 2 : 1;
    });
  }

  isStepCompleted(step: number): boolean {
    return this.currentStep > step;
  }

  goToMaklumatPengganti() {
    if (this.currentStep === 1) {
    
    this.pegawai_ganti.tarikhtugas = this.pegawai_mohon.tarikhtugas;
    this.pegawai_ganti.lokasitugas = this.pegawai_mohon.lokasitugas;
    this.pegawai_ganti.masatugas = this.pegawai_mohon.masatugas;

    // Save pemohon data into localStorage
    this.localStorage.setItem('pemohonData', this.pegawai_ganti);

      // Navigate to step 2 (child route)
      this.router.navigate(['maklumat-pegawai-pengganti'], { relativeTo: this.route });
    }
  }



}
