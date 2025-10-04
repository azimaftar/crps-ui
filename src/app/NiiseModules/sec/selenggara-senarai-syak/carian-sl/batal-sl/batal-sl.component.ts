import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
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
  selector: 'app-batal-sl',
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
  templateUrl: './batal-sl.component.html',
  styleUrls: ['./batal-sl.component.scss'],
})
export class BatalSlComponent {
  catatanBatal = '';
}
