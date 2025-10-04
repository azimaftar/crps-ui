import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';

import {
  CardComponent,
  CardHeaderComponent,
  CardBodyComponent,
  CardFooterComponent,
  RowComponent,
  ColComponent,
  ButtonDirective,
  ModalComponent,
  ModalToggleDirective,
  ModalBodyComponent,
  ToastComponent,
  ToasterComponent,
  ToastBodyComponent,
  ToastHeaderComponent,
  ModalHeaderComponent,
} from '@coreui/angular';

@Component({
  selector: 'app-papar-dokumen-ntl',
  imports: [
    CardComponent,
    CommonModule,
    CardHeaderComponent,
    CardBodyComponent,
    CardFooterComponent,
    RowComponent,
    ColComponent,
    ButtonDirective,
    ModalComponent,
    ModalToggleDirective,
    ModalBodyComponent,
    ToastComponent,
    ToasterComponent,
    ToastBodyComponent,
    ToastHeaderComponent,
    ModalHeaderComponent,
  ],
  templateUrl: './papar-dokumen-ntl.component.html',
  styleUrl: './papar-dokumen-ntl.component.scss',
})
export class PaparDokumenNtlComponent implements OnInit {
  fileName: string = 'lesen_contoh.png';
  fileUrl!: SafeResourceUrl;
  isLoading: boolean = true;

  constructor(private sanitizer: DomSanitizer) {}

  ngOnInit(): void {
    // Simulate 3 second delay before showing the document
    setTimeout(() => {
      console.log("here 1");
      const filePath = '../../assets/images/lesen_contoh.png'; // adjust as needed based on build
      this.fileUrl = this.sanitizer.bypassSecurityTrustResourceUrl(filePath);
      console.log(this.fileUrl)
      this.isLoading = false;
    }, 3000); // 3 seconds delay
  }

  muatTurun(): void {
    const link = document.createElement('a');
    link.href = '../../assets/images/lesen_contoh.png'; // same path as iframe
    link.download = this.fileName;
    link.click();
  }

  onLoadComplete(): void {
    console.log('Dokumen telah dimuat.');
  }
}
