import { Component, ViewChild, ElementRef } from '@angular/core';
import { CommonModule } from '@angular/common'; //for *ngIf and *ngFor
import { FormsModule } from '@angular/forms';
import { ProgressFlowComponent } from '../progress-flow/progress-flow.component'; 
//import { CardModule, GridModule, ButtonModule, ModalModule } from '@coreui/angular';
import { Router } from '@angular/router';

interface Document {
  type: string;
  keterangan: string;
  fileName?: string;
  format?: string;
  file?: File;
}

@Component({
  selector: 'app-dokumen-sokongan',
  imports: [CommonModule, FormsModule, ProgressFlowComponent],
  templateUrl: './dokumen-sokongan.component.html',
  styleUrl: './dokumen-sokongan.component.scss'
})
export class DokumenSokonganComponent {

  private stepRoutes = [
      '/sec/pengesahan-cap-jari/kelulusan',
      '/sec/pengesahan-cap-jari/kelulusan/maklumat-permohonan',
      '/sec/pengesahan-cap-jari/kelulusan/dokumen-sokongan',
      '/sec/pengesahan-cap-jari/kelulusan/keputusan-permohonan',
      ];
    
      @ViewChild('fileInput') fileInput!: ElementRef<HTMLInputElement>;
    
      step = 3;
      activeTab: number = 1;
      currentUploadIndex: number = -1;
    
      // Document list with default entries
      documents: Document[] = [
        {
          type: 'borang',
          keterangan: 'Salinan Borang RJ2',
        },
        {
          type: 'gambar',
          keterangan: 'Salinan Gambar Sabjek',
        },
      ];
    
      // Confirmation
      confirmation: boolean = false;
      constructor(private router: Router) {}
    
      ngOnInit() {
        this.syncStepWithRoute();
      }
    
      resetForm(): void {
        this.documents = [
          {
            type: 'borang',
            keterangan: 'Salinan Borang RJ2',
          },
          {
            type: 'gambar',
            keterangan: 'Salinan Gambar Sabjek',
          },
        ];
      }
    
      submitForm(): void {
        // Handle form submission
        console.log('Documents:', this.documents);
      }
    
      onStepChange(newStep: number) {
        this.step = newStep;
        this.navigateToStep();
      }
    
      private navigateToStep(): void {
        this.router.navigate([this.stepRoutes[this.step - 1]]).then(() => {
          window.scrollTo(0, 0);
        });
      }
    
      previousStep(): void {
        if (this.step > 1) {
          this.step--;
          this.router.navigate([this.stepRoutes[this.step - 1]]).then(() => {
            window.scrollTo(0, 0);
          });
        }
      }
    
      nextStep(): void {
        if (this.step < this.stepRoutes.length) {
          this.router.navigate([this.stepRoutes[this.step]]).then(() => {
            this.step++;
          });
        }
      }
    
      private syncStepWithRoute(): void {
        const currentPath = this.router.url.split('?')[0]; // Ignore query params
        const currentStep = this.stepRoutes.indexOf(currentPath);
        this.step = currentStep >= 0 ? currentStep + 1 : 1;
      }
    
      // Document-related methods
      addDocument(): void {
        this.documents.push({
          type: 'custom',
          keterangan: '',
        });
      }
    
      uploadFile(index: number): void {
        this.currentUploadIndex = index;
        this.fileInput.nativeElement.click();
      }
    
      onFileSelected(event: any): void {
        const file = event.target.files[0];
        if (file && this.currentUploadIndex >= 0) {
          // Check file size (10MB limit)
          if (file.size > 10 * 1024 * 1024) {
            alert('Saiz fail melebihi 10MB. Sila pilih fail yang lebih kecil.');
            return;
          }
    
          // Update document with file information
          this.documents[this.currentUploadIndex].fileName = file.name;
          this.documents[this.currentUploadIndex].format = this.getFileExtension(
            file.name
          ).toUpperCase();
          this.documents[this.currentUploadIndex].file = file;
    
          // Reset the file input
          this.fileInput.nativeElement.value = '';
          this.currentUploadIndex = -1;
        }
      }
    
      getFileExtension(filename: string): string {
        return filename.split('.').pop() || '';
      }
    
      getPlaceholder(type: string): string {
        switch (type) {
          case 'borang':
            return 'Salinan Borang RJ2';
          case 'gambar':
            return 'Salinan Gambar Sabjek';
          default:
            return 'Masukkan keterangan dokumen';
        }
      }
  
}
