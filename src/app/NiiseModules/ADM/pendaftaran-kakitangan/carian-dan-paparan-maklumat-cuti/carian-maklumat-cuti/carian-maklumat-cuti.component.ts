import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  CardModule,
  NavModule,
  GridModule,
  ModalModule,
} from '@coreui/angular';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../../api.service';

@Component({
  selector: 'app-carian-maklumat-cuti',
  templateUrl: './carian-maklumat-cuti.component.html',
  styleUrl: './carian-maklumat-cuti.component.scss',
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
export class CarianMaklumatCutiComponent implements OnInit {
  constructor(
    private router: Router,
    private apiService: ApiService,
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
      'adm/pendaftaran-kakitangan/carian-dan-paparan-maklumat-cuti/maklumat-cuti-semasa',
    ]);
  }
}