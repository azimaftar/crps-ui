import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';  // 👈 add this
import { IconDirective } from '@coreui/icons-angular';
import {
  CardModule,
  GridModule,
  NavModule,
  ModalModule,
  ButtonModule,
  ColComponent,
  RowComponent,
  CardComponent,
} from '@coreui/angular';

@Component({
  selector: 'app-lupus-sl',
  imports: [
    FormsModule,
    CardModule,
    GridModule,
    NavModule,
    ModalModule,
    ButtonModule,
    ColComponent,
    RowComponent,
    CardComponent,
    IconDirective,
  ],
  templateUrl: './lupus-sl.component.html',
  styleUrls: ['./lupus-sl.component.scss'], // 👈 styleUrls (plural)
})
export class LupusSlComponent {
  catatanLupus = '';
}
