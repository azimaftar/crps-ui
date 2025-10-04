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
import { ApiService } from '../api.service';

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
    private apiService: ApiService,
    private route: ActivatedRoute
  ) {}

  noDocID: string = '';

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

  loadData(docType: String) {
    switch (docType) {
      case 'mykad':
        this.loadTest();
        break;
    }
  }

  private loadTest() {
    this.apiService.getMaklumatKakitangan(this.noDocID).subscribe({
      next: (response: any) => {
        const data = response.data;
        const message = response.message;
        const status = response.status;

        console.log('Data:', data);
        console.log('Message:', message);
        console.log('Status:', status);

        //Dont forget to clear this, after.
        localStorage.setItem('maklumatKakitangan', JSON.stringify(data));
        localStorage.setItem('maklumatNoDocID', JSON.stringify({ noDocID: this.noDocID }));

        this.router.navigate([
          'adm/pendaftaran-kakitangan/carian-maklumat-kakitangan/maklumat-peribadi',
        ]);
      },
      error: (error: any) => {
        console.error('Error loading data:', error);
      },
    });
  }
}
