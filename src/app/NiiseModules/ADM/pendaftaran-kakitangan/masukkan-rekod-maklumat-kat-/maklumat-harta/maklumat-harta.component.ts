import {
  Component,
  ElementRef,
  OnInit,
  QueryList,
  ViewChildren,
 } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  CardModule,
  NavModule,
  GridModule,
  SidebarBrandComponent,
  ModalModule,
} from '@coreui/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-maklumat-harta',
  imports: [
    CommonModule,
    CardModule,
    GridModule,
    NavModule,
    ModalModule,
    FormsModule,
  ],
  templateUrl: './maklumat-harta.component.html',
  styleUrl: './maklumat-harta.component.scss',
})
export class MaklumatHartaComponent implements OnInit{

  currentMainStep = 1; // Main step (1,2,3,4,5,6)
  currentSubStep = 10; // Sub step (1-15)

  // Structured breadcrumb data
   mainSteps = [
    { mainStep: 1, mainLabel: 'Profil' },
    { mainStep: 2, mainLabel: 'Tandatangan Digital' },
    { mainStep: 3, mainLabel: 'Biometrik' },
  ];

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

  maklumatHarta1 = {
    jenisHarta1: '',
    jenisHarta2: '',
    jenisHarta3: '',
    jenisHarta4: '',
    jenisHarta5: '',

    keteranganHarta1: '',
    keteranganHarta2: '',
    keteranganHarta3: '',
    keteranganHarta4: '',
    keteranganHarta5: '',

    tarikhDiisytiharkan1: '',
    tarikhDiisytiharkan2: '',
    tarikhDiisytiharkan3: '',
    tarikhDiisytiharkan4: '',
    tarikhDiisytiharkan5: '',

    sumberPerolehan1: '',
    sumberPerolehan2: '',
    sumberPerolehan3: '',
    sumberPerolehan4: '',
    sumberPerolehan5: '',

    nilaiHarta1: '',
    nilaiHarta2: '',
    nilaiHarta3: '',
    nilaiHarta4: '',
    nilaiHarta5: '',

    anggaranNilaiSemasa1: '',
    anggaranNilaiSemasa2: '',
    anggaranNilaiSemasa3: '',
    anggaranNilaiSemasa4: '',
    anggaranNilaiSemasa5: '',

    alamatHarta1: '',
    alamatHarta2: '',
    alamatHarta3: '',
    alamatHarta4: '',
    alamatHarta5: '',

    catatan1: '',
    catatan2: '',
    catatan3: '',
    catatan4: '',
    catatan5: '',
  };

  constructor(private router: Router) { }

  next(): void {
  // Add your navigation logic here
    this.router.navigate(['./adm/pendaftaran-kakitangan/masukkan-rekod-maklumat-kat/maklumat-ibu-bapa']);
  }

  back(): void {
  // Add your navigation logic here
    this.router.navigate(['./adm/pendaftaran-kakitangan/masukkan-rekod-maklumat-kat/maklumat-kegiatan-luar']);
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
