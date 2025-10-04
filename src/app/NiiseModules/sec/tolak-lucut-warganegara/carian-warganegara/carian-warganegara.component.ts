import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { 
  GridModule, 
  ColComponent, 
  RowComponent,
  ButtonModule
} from '@coreui/angular';
import { ActivatedRoute, Router } from '@angular/router';

interface Subject {
  nama: string;
  noKP: string;
  status: string;
}

@Component({
  selector: 'app-carian-warganegara',
  templateUrl: './carian-warganegara.component.html',
  styleUrls: ['./carian-warganegara.component.scss'],
  standalone: true,
  imports: [
    CommonModule, 
    FormsModule, 
    RowComponent, 
    ColComponent,
    GridModule, 
    ButtonModule
  ],
})
export class CarianWarganegaraComponent implements OnInit {

  // Search form properties
  nama: string = '';
  noKadPengenalan: string = '';
  
  constructor(
    private router: Router,
    private route: ActivatedRoute
  ) {}

  // Default data
  private allSubjects: Subject[] = [
    { nama: 'Ahmad Bin Ali', noKP: '890211049901', status: 'BARU' },
    { nama: 'Siti Binti Hassan', noKP: '920515071234', status: 'BARU' }
  ];

  // Displayed subject list
  subjects: Subject[] = [...this.allSubjects];

  ngOnInit(): void {}

  // Search functionality
  onSearch(): void {
    console.log('Searching for:', { nama: this.nama, noKadPengenalan: this.noKadPengenalan });
    
    if (this.nama || this.noKadPengenalan) {
      this.subjects = this.allSubjects.filter(subject => 
        (!this.nama || subject.nama.toLowerCase().includes(this.nama.toLowerCase())) &&
        (!this.noKadPengenalan || subject.noKP.includes(this.noKadPengenalan))
      );
    } else {
      this.subjects = [...this.allSubjects];
    }
  }

  // Reset form & restore all subjects
  onSetSemula(): void {
    this.nama = '';
    this.noKadPengenalan = '';
    this.subjects = [...this.allSubjects];
  }

  permohonanBaru(): void {
    this.router.navigate(['../maklumat-sabjek'], { relativeTo: this.route });
  }

  Edit(): void {
    console.log('Edit button clicked');
  }

  Papar(): void {
    console.log('Papar button clicked');
    this.router.navigate(['./papar-sl'], {
      relativeTo: this.route
    });
  }
}
