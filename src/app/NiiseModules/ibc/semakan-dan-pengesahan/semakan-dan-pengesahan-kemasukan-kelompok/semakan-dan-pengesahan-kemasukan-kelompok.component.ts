import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ButtonDirective, 
  CardBodyComponent, 
  CardComponent, 
  CardHeaderComponent, 
  ColComponent, 
  RowComponent 
} from '@coreui/angular';

@Component({
  selector: 'app-semakan-dan-pengesahan-kemasukan-kelompok',
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule,
    CardComponent,
    CardHeaderComponent,
    CardBodyComponent,
    RowComponent,
    ColComponent,
    ButtonDirective
  ],
  templateUrl: './semakan-dan-pengesahan-kemasukan-kelompok.component.html',
  styleUrl: './semakan-dan-pengesahan-kemasukan-kelompok.component.scss'
})
export class SemakanDanPengesahanKemasukanKelompokComponent {

}