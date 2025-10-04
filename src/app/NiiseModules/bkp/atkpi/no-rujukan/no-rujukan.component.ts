import { Component } from '@angular/core';

@Component({
  selector: 'app-no-rujukan',
  imports: [],
  templateUrl: './no-rujukan.component.html',
  styleUrls: ['../../bkp.scss']
})
export class NoRujukanComponent {

  // Initial values for the form
  jenisDokumen: string = '';
  nomborBilangan: string = 'BIL 01';
  tahunDikeluarkan: string = '2025';

  // Method for 'Jana' button click
  onJana(): void {
    console.log('Jana clicked');
    // Implement your logic to generate the document number here
    this.nomborBilangan = 'BIL ' + (Math.floor(Math.random() * 100) + 1).toString().padStart(2, '0');
    console.log('Generated Number: ', this.nomborBilangan);
  }

  // Method for 'Hantar' button click
  onHantar(): void {
    console.log('Hantar clicked');
    // Implement your logic for sending the document or form here
    alert('Dokumen telah dihantar!');
  }

  // Method for 'Simpan' button click
  onSimpan(): void {
    console.log('Simpan clicked');
    // Implement your logic for saving the document or form here
    alert('Dokumen telah disimpan!');
  }

}
