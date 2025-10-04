import { Component } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  CardModule,
  NavModule,
  GridModule,
  SidebarBrandComponent,
  ModalModule,
} from '@coreui/angular';
import { RekodBerjayaDihantarComponent } from '../../notification-modal/rekod-berjaya-dihantar/rekod-berjaya-dihantar.component';
import { RekodBerjayaDisimpanComponent } from '../../notification-modal/rekod-berjaya-disimpan/rekod-berjaya-disimpan.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-maklumat-waran-penjawatan',
  imports: [
    CommonModule,
    CardModule,
    GridModule,
    NavModule,
    ModalModule,
    FormsModule,
    RekodBerjayaDihantarComponent,
    RekodBerjayaDisimpanComponent,
  ],
  templateUrl: './maklumat-waran-penjawatan.component.html',
  styleUrl: './maklumat-waran-penjawatan.component.scss',
})
export class MaklumatWaranPenjawatanComponent {
  constructor(private router: Router) {}
  // Staff Profile Field
  readonlyField: boolean = false;
  kodSkimTable: string = '';

  tableData = [
    {
      negeri: 'Melaka',
      bahagian: 'Pengurusan',
      Cawangan: 'Depot Tahanan Imigresen Machap Umbu',
      unit: 'Pentadbiran',
      jawatan: 'Penguasa Imigresen',
      gred: 'KP41/42/KP44',
      tbk: '',
      kodGaji: 'KP41/42/KP44',
      kodSkim: '3DK20',
      BilanganJawatan: '1',
      pengisian: '1',
      kekosongan: '0',
      kenyataan: '',
      penyandang: 'Muhd Yusri Bin Aziz',
      noIc: '890511028789',
      catatan: 'Pinjam Penjawat Sabah (Sementara-Gred W29)',
    },

    {
      negeri: 'Melaka',
      bahagian: 'Pengurusan',
      Cawangan: 'Depot Tahanan Imigresen Machap Umbu',
      unit: 'Pentadbiran',
      jawatan: 'Penolong Penguasa Imigresen',
      gred: 'KP38',
      tbk: '',
      kodGaji: 'KP38',
      kodSkim: '3DK20',
      BilanganJawatan: '1',
      pengisian: '0',
      kekosongan: '0',
      kenyataan: '',
      penyandang: 'Tiada',
      noIc: '',
      catatan: '',
    },
    {
      negeri: 'Melaka',
      bahagian: 'Pengurusan',
      Cawangan: 'Depot Tahanan Imigresen Machap Umbu',
      unit: 'Pentadbiran',
      jawatan: 'Pegawai Imigresen',
      gred: 'KP28',
      tbk: '',
      kodGaji: 'KP28',
      kodSkim: '3LK12',
      BilanganJawatan: '1',
      pengisian: '1',
      kekosongan: '0',
      kenyataan: '',
      penyandang: 'Amir Uzairi Bin Mohd Yunus',
      noIc: '900805084670',
      catatan: 'Mula 01.09.2025',
    },
    {
      negeri: 'Melaka',
      bahagian: 'Pengurusan',
      Cawangan: 'Depot Tahanan Imigresen Machap Umbu',
      unit: 'Pentadbiran',
      jawatan: 'Pembantu Tadbir (Perkeranian/ Operasi)',
      gred: 'N22',
      tbk: 'TBK2',
      kodGaji: 'N22/N26',
      kodSkim: '3LN14',
      BilanganJawatan: '1',
      pengisian: '1',
      kekosongan: '0',
      kenyataan: '',
      penyandang: 'Mastura Binti Husin',
      noIc: '820407045975',
      catatan: 'Mula 01.05.2025',
    },
    {
      negeri: 'Melaka',
      bahagian: 'Pengurusan',
      Cawangan: 'Depot Tahanan Imigresen Machap Umbu',
      unit: 'Pentadbiran',
      jawatan: 'Pembantu Tadbir (Perkeranian/ Operasi)',
      gred: 'N19',
      tbk: 'TBK1 dan TBK2',
      kodGaji: 'N19/N22/N26',
      kodSkim: '3LW08',
      BilanganJawatan: '2',
      pengisian: '1',
      kekosongan: '1',
      kenyataan: '',
      penyandang: 'Kasturi Binti Said',
      noIc: '870918037978',
      catatan: 'Mula 23.12.2025',
    },
  ];

  HantarRekodDisimpan = false;
  HantarRekodDihantar = false;

  showRekodDihantar() {
    // Reset and reopen to ensure visibility
    this.HantarRekodDihantar = false;
    setTimeout(() => {
      this.HantarRekodDihantar = true;
    }, 0); // Short delay allows Angular change detection to register state change
  }

  showHubungidisimpan() {
    // Reset and reopen to ensure visibility
    this.HantarRekodDisimpan = false;
    setTimeout(() => {
      this.HantarRekodDisimpan = true;
    }, 0); // Short delay allows Angular change detection to register state change
  }

  closeModal() {
    this.HantarRekodDihantar = false;
    this.HantarRekodDisimpan = false;
  }

  nextPage(kodSkimTable: String) {
    alert(kodSkimTable);
    this.router.navigate([
      'adm/pendaftaran-kakitangan/kemaskini-maklumat-waran/daftar-maklumat-waran-penjawatan',
    ]);
  }
}
