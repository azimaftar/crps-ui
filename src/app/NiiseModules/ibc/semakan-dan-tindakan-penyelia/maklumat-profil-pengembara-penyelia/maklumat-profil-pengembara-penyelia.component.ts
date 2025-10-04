import { Component, ViewChild } from '@angular/core';
import { ModalRujukPenyeliaComponent } from '../modal-rujuk-penyelia/modal-rujuk-penyelia.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  CardModule,
  GridModule,
  ButtonModule
} from '@coreui/angular';
import { Router } from '@angular/router';
import { data } from './pasport';
import { DomSanitizer } from '@angular/platform-browser';

// Interface for form data structure
interface FormData {
  // noDocument?: string;
  // noIdentification?: string;
  // dateIssued?: string;
  // expiryDate?: string;
  // age?: string;
  // nationality?: string;
  // issuingCountry?: string;
  // photoUrl?: string;
  Type?: string;
  Name?: string;
  Gender?: string;
  IssueState?: string;
  Nationality?: string;
  DOB?: string;
  DocNo?: string;
  DateIssue?: string;
  DateExpiry?: string;
  RemainderTerm?: string;
  Height?: string;
  PersonalNo?: string;
  Age?: string;
  Result?: string;
  ChipType?: string;
  DSCertIssue?: string;
  Authority?: string;
  ScanID?: string;
  EPassport?: string;
  FRR?: string;
  DPImg?: string;
}

@Component({
  selector: 'app-maklumat-profil-pengembara-penyelia',
  imports: [
    CommonModule,
    FormsModule,
    CardModule,      // CoreUI Card components
    GridModule,      // CoreUI Grid system
    ButtonModule,    // CoreUI Button components
    ModalRujukPenyeliaComponent],
  templateUrl: './maklumat-profil-pengembara-penyelia.component.html',
  styleUrl: './maklumat-profil-pengembara-penyelia.component.scss'
})
export class MaklumatProfilPengembaraPenyeliaComponent {
  @ViewChild(ModalRujukPenyeliaComponent) modal!: ModalRujukPenyeliaComponent;
  hover: boolean = false; // ✅ Declare the property
  // Form data object matching template bindings
  formData: FormData = {
    // noDocument: 'A0000002',
    // noIdentification: '980330025489',
    // dateIssued: '20 Januari 1992',
    // expiryDate: '20 Januari 2028',
    // age: '26',
    // nationality: 'MYS',
    // issuingCountry: 'MYS - Malaysia',
    // photoUrl: '', 
    Type: 'P',
    Name: 'MATSUI OSAKA',
    Gender: 'M',
    IssueState: 'JPN',
    Nationality: 'JPN',
    DOB: '1989-09-19',
    DocNo: 'JP7785429',
    DateIssue: '',
    DateExpiry: '2027-05-09',
    RemainderTerm: '-1',
    Height: '180',
    PersonalNo: '980330025489',
    Age: '35',
    Result: 'PASS',
    ChipType: 'IA',
    DSCertIssue: 'MY',
    Authority: '',
    ScanID: '20241001_040422715_OSMOND-R218630',
    EPassport: 'Y',
    FRR: '70',
    DPImg: data
  };

  getImageFromBase64(base64: any, format: string = "jpeg"): any {
    return this.sanitizer
      .bypassSecurityTrustResourceUrl(`data:image/${format};base64,${base64}`);
    ;
  }

  constructor(private router: Router,
    private sanitizer: DomSanitizer
  ) { }

  // Open modal method
  openModal(): void {
    this.modal.openModal();
  }

  openDetails() {
    this.router.navigate(
      ['/ibc/semakan-dan-tindakan-penyelia/maklumat-profil-pegawai'],
      {
        queryParams: {
          visitorType: this.formData.Type,
          docType: this.formData.Type,
          docNo: this.formData.DocNo,
          kpNo: this.formData.PersonalNo
        }
      }
    );
  }



  // Handle decision from modal
  handleDecision(event: any): void {
    console.log('Decision received:', event);

    // Handle different decision types
    switch (event.action) {
      case 'approve':
        this.handleApproval(event);
        break;
      case 'reject':
        this.handleRejection(event);
        break;
      case 'refer':
        this.handleReferral(event);
        break;
      default:
        console.log('Unknown decision action:', event.action);
    }
  }

  // Handle approval action
  private handleApproval(event: any): void {
    console.log('Processing approval...', event);
    // Add your approval logic here
  }

  // Handle rejection action
  private handleRejection(event: any): void {
    console.log('Processing rejection...', event);
    // Add your rejection logic here
  }

  // Handle referral action
  private handleReferral(event: any): void {
    console.log('Processing referral...', event);
    // Add your referral logic here
  }

  // Print functionality
  printPage(): void {
    window.print();
  }

  // Method to load form data from service/API
  loadFormData(data: FormData): void {
    this.formData = { ...this.formData, ...data };
  }

  // Method to update photo
  // updatePhoto(photoUrl: string): void {
  //   this.formData.photoUrl = photoUrl;
  // }
}
