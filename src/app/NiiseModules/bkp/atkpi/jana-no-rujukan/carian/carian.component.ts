import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-carian',
  imports: [FormsModule, CommonModule],
  templateUrl: './carian.component.html',
  styleUrls: [
    '../../atkpi.component.scss'
  ]
})
export class CarianComponent {

  searchDocumentName: string = '';
  searchDate: string = '';

  // This would typically be populated from a backend API
  referenceList: any[] = [
    {
      id: 1,
      referenceNumber: 'BIL 01 2025',
      documentName: 'Pelaksanaan Sistem E-Visa Tenaga Kerja Asing',
      date: '2025-08-01'
    }
  ];

  // For now, just log search parameters (simulate search logic)
  search(): void {
    console.log('Searching for:', this.searchDocumentName, this.searchDate);

    // In a real app, you'd call a service to get results based on the search fields
    // Example:
    // this.yourService.searchDocuments(this.searchDocumentName, this.searchDate).subscribe(results => {
    //   this.referenceList = results;
    // });
  }

  update(): void {
    console.log('Kemaskini clicked');
    // Logic to edit the document or redirect to update form
  }

  download(): void {
    console.log('Muat Turun clicked');
    // Logic to download the document (could trigger file download via service)
  }

  view(): void {
    console.log('View clicked');
    // Logic to open/view the document in a new tab or modal
  }

}
