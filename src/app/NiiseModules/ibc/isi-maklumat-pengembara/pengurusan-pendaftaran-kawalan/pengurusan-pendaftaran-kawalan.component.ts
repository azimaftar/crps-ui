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
  selector: 'app-pengurusan-pendaftaran-kawalan',
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
  templateUrl: './pengurusan-pendaftaran-kawalan.component.html',
  styleUrl: './pengurusan-pendaftaran-kawalan.component.scss'
})
export class PengurusanPendaftaranKawalanComponent {

}
