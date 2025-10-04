import {   
  Component,
  ElementRef,
  OnInit,
  QueryList,
  ViewChildren, 
} from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import {
  CardModule,
  NavModule,
  GridModule,
  SidebarBrandComponent,
  ModalModule,
} from '@coreui/angular';

@Component({
  selector: 'app-masukkan-sejarah-pekerjaan',
  imports: [
    CommonModule,
    CardModule,
    GridModule,
    NavModule,
    ModalModule,
    FormsModule,
  ],
  templateUrl: './masukkan-sejarah-pekerjaan.component.html',
  styleUrl: './masukkan-sejarah-pekerjaan.component.scss'
})
export class MasukkanSejarahPekerjaanComponent implements OnInit{

  currentMainStep = 1; // Main step (1,2,3,4,5,6)
  currentSubStep = 1.2; // Sub step (1-15)

  mainSteps = [
    { mainStep: 1, mainLabel: 'Profil' },
    { mainStep: 2, mainLabel: 'Tandatangan Digital' },
    { mainStep: 3, mainLabel: 'Biometrik' },
  ];

  // Structured breadcrumb data
     subSteps = [
    { mainStep: 1, subStep: 1.1, subLabel: 'Maklumat Peribadi' },
    { mainStep: 1, subStep: 1.2, subLabel: 'Perkhidmatan/Penjawatan' },
    { mainStep: 1, subStep: 1.3, subLabel: 'Penempatan' },
    { mainStep: 1, subStep: 1.4, subLabel: 'Akademik' },
    { mainStep: 1, subStep: 1.5, subLabel: 'Bahasa' },
    { mainStep: 1, subStep: 1.6, subLabel: 'Pasport' },
    { mainStep: 1, subStep: 1.7, subLabel: 'Anugerah' },
    { mainStep: 1, subStep: 1.8, subLabel: 'Akaun Bank' },
    { mainStep: 1, subStep: 1.9, subLabel: 'Kegiatan Luar' },
    { mainStep: 1, subStep: 1.10, subLabel: 'Harta' },
    { mainStep: 1, subStep: 1.11, subLabel: 'Ibu/Bapa' },
    { mainStep: 1, subStep: 1.12, subLabel: 'Pasangan' },
    { mainStep: 1, subStep: 1.13, subLabel: 'Tanggungan' },
    { mainStep: 1, subStep: 1.14, subLabel: 'Vaksin' },
    { mainStep: 1, subStep: 1.15, subLabel: 'Pakaian Seragam' },
  ];

  // Staff Profile Field
  readonlyField: boolean = true;

  sejarahPekerjaan = {
    namaMajikan: '',
    alamat1: '',
    alamat2: '',
    alamat3: '',
    negara: '',
    jawatan: '',
    bidangIndustri: '',
    tarikhMula: '',
    tarikhTamat: '',
  };

  constructor(private router: Router) { }

  next(): void {
  // Add your navigation logic here
    this.router.navigate(['./adm/pendaftaran-kakitangan/masukkan-rekod-maklumat-kat/maklumat-penempatan']);
  }

  back(): void {
  // Add your navigation logic here
    this.router.navigate(['./adm/pendaftaran-kakitangan/masukkan-rekod-maklumat-kat/maklumat-perkhidmatan-dan-perjawatan']);
  }
  
  @ViewChildren('subButton') subButtons!: QueryList<
    ElementRef<HTMLButtonElement>
  >;

  ngOnInit(): void {
    this.findCurrentSubButtonScroll();
  }

  findCurrentSubButtonScroll() {
    setTimeout(() => {
      this.subButtons
        .find(
          (_, i) =>
            this.subSteps[i].mainStep === this.currentMainStep &&
            this.subSteps[i].subStep === this.currentSubStep
        )
        ?.nativeElement.scrollIntoView({ inline: 'start' });
    });
  }

}
