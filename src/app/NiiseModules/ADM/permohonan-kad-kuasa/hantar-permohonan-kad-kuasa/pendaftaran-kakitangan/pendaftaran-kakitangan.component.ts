import { Component, OnInit } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  CardModule,
  NavModule,
  GridModule,
  ModalModule,
} from '@coreui/angular';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-pendaftaran-kakitangan',
  templateUrl: './pendaftaran-kakitangan.component.html',
  styleUrl: './pendaftaran-kakitangan.component.scss',
  standalone: true,
  imports: [
    CommonModule,
    CardModule,
    GridModule,
    NavModule,
    ModalModule,
    FormsModule,
  ],
})
export class PendaftaranKakitanganComponent implements OnInit {
  constructor(
    private router: Router,
    private route: ActivatedRoute
  ) {}

  jpnModalVisible = false;
  carianModalVisible = false;
  rekodModalVisible = false;

  //jpnModalVisible modal logic
  jpnModalconfirm() {
    this.jpnModalVisible = false;
  }

  //carianModalVisible modal logic
  carianModalconfirm() {
    this.carianModalVisible = false;
  }

  //rekodModalVisible modal logic
  rekodModalconfirm() {
    this.rekodModalVisible = false;
  }

  ngOnInit(): void {}

  noDocID: string = '';

  loadData(docType: String) {
    this.router.navigate([
      'adm/permohonan-kad-kuasa/hantar-permohonan-kad-kuasa/maklumat-pemohonan',
    ]);
  }
}
