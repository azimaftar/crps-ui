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
  selector: 'app-pengisian-kemasukan-kelompok',
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
  templateUrl: './pengisian-kemasukan-kelompok.component.html',
  styleUrl: './pengisian-kemasukan-kelompok.component.scss'
})
export class PengisianKemasukanKelompokComponent {

}
