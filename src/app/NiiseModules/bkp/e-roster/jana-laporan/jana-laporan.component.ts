import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CardModule, GridModule, NavModule, ColComponent, RowComponent } from '@coreui/angular';
import {
  ModalModule,
  ButtonModule,
  ModalComponent,
  ModalBodyComponent,
  ModalFooterComponent,
} from '@coreui/angular';
import { ActivatedRoute, Router } from '@angular/router';

interface Subject {
  noKP: string;
  noDokumen: string;
  warganegara: string;
  nama: string;
  tanggalLahir: string;
  jenisKelamin: string;
  status: string;
  NoRujukan: string;
}

@Component({
  selector: 'app-jana-laporan',
  templateUrl: './jana-laporan.component.html',
  styleUrls: ['../../bkp.scss'],
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    CardModule,
    GridModule,
    NavModule,
    ModalModule,
    ButtonModule,
    ColComponent,
    RowComponent,
  ]
})
export class JanaLaporanComponent {
  nama = '';
  ic = '';
  kumpulan = '';
  toDate = '';
  fromDate = '';
  laporan = '';

  HantarModalsave = false;
  HantarModalsend = false;

  constructor(private router: Router, private route: ActivatedRoute) {}

  // Jana Laporan
  // JanaLaporan() {
  //   const match = this.fakeData.find(data =>
  //     data.fromDate === this.fromDate &&
  //     data.toDate === this.toDate &&
  //     data.kumpulan === this.kumpulan &&
  //     data.ic === this.ic &&
  //     data.nama.toLowerCase() === this.nama.toLowerCase() &&
  //     data.laporan === this.laporan
  //   );

  //   if (match) {
  //     const queryParams = {
  //       fromDate: this.fromDate,
  //       toDate: this.toDate,
  //       kumpulan: this.kumpulan,
  //       ic: this.ic,
  //       nama: this.nama,
  //       laporan: this.laporan,
  //     };

  //     switch (this.laporan) {
  //       case 'Laporan Pegawai':
  //         this.router.navigate(['../maklumat-laporan'], {
  //           relativeTo: this.route,
  //           queryParams,
  //         });
  //         break;
  //       case 'Laporan OT':
  //         this.router.navigate(['../maklumat-laporan-ot'], {
  //           relativeTo: this.route,
  //           queryParams,
  //         });
  //         break;
  //       case 'Laporan Kelewatan':
  //         this.router.navigate(['../maklumat-laporan-lewat'], {
  //           relativeTo: this.route,
  //           queryParams,
  //         });
  //         break;
  //       case 'Laporan Keluar Pejabat':
  //         this.router.navigate(['../maklumat-laporan-keluar'], {
  //           relativeTo: this.route,
  //           queryParams,
  //         });
  //         break;
  //     }
  //   } else {
  //     alert('Rekod Tidak Dijumpai.');
  //   }

  //   console.log('Searching for:', {
  //     fromDate: this.fromDate,
  //     toDate: this.toDate,
  //     kumpulan: this.kumpulan,
  //     ic: this.ic,
  //     nama: this.nama,
  //     laporan: this.laporan
  //   });
  // }
  JanaLaporan() {
  const queryParams = {
    fromDate: this.fromDate,
    toDate: this.toDate,
    kumpulan: this.kumpulan,
    ic: this.ic,
    nama: this.nama,
    laporan: this.laporan,
  };

  switch (this.laporan) {
    case 'Laporan Pegawai':
      this.router.navigate(['/bkp/e-roster/jana-laporan/maklumat-laporan'], { queryParams });
      break;
    case 'Laporan OT':
      this.router.navigate(['/bkp/e-roster/jana-laporan/maklumat-laporan-ot'], { queryParams });
      break;
    case 'Laporan Kelewatan':
      this.router.navigate(['/bkp/e-roster/jana-laporan/maklumat-laporan-kelewatan'], { queryParams });
      break;
    // case 'Laporan Keluar Pejabat':
    //   this.router.navigate(['/maklumat-laporan-keluar'], { queryParams });
    //   break;
    default:
      alert('Rekod Tidak Dijumpai.');
      break;
  }

  console.log('Navigating with:', queryParams);
}


  fakeData: any[] = [
    {
      fromDate: '2025-06-01',
      toDate: '2025-06-30',
      kumpulan: '1',
      ic: '991202101234',
      nama: 'ali',
      laporan: 'Laporan OT',
    },
    {
      fromDate: '2025-06-01',
      toDate: '2025-06-30',
      kumpulan: '1',
      ic: '991202101234',
      nama: 'abu',
      laporan: 'Laporan Pegawai',
    },
    {
      fromDate: '2025-06-01',
      toDate: '2025-06-30',
      kumpulan: '1',
      ic: '991202101234',
      nama: 'siti',
      laporan: 'Laporan Kelewatan',
    }
  ];
  test() {
    this.router.navigate(['/bkp/e-roster/jana-laporan/maklumat-laporan-kelewatan']);
  }


  // Modals
  showHantarModal() {
    this.HantarModalsave = false;
    setTimeout(() => {
      this.HantarModalsave = true;
    }, 0);
  }

  showHantarModalsend() {
    this.HantarModalsend = false;
    setTimeout(() => {
      this.HantarModalsend = true;
    }, 0);
  }

  closeModal() {
    this.HantarModalsave = false;
    this.HantarModalsend = false;
  }
}
