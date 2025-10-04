import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { KelompokService } from '../kelompok.service';

@Component({
  selector: 'app-senarai-semakan',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './senarai-semakan.component.html',
  styleUrl: './senarai-semakan.component.scss'
})
export class SenaraiSemakanComponent implements OnInit {
  kelompokList: any[] = [];

  constructor(private kelompokService: KelompokService) {}

  ngOnInit(): void {
    this.loadKelompokList();
  }

  loadKelompokList() {
    this.kelompokService.getSenaraiKelompok().subscribe({
      next: (data) => {
        this.kelompokList = data || [];
      },
      error: (err) => {
        console.error('Error fetching data', err);
        this.kelompokList = [];
      }
    });
  }

  semak(item: any) {
    console.log('Semak clicked for:', item);
    // Navigate to detail page or open modal
  }
}