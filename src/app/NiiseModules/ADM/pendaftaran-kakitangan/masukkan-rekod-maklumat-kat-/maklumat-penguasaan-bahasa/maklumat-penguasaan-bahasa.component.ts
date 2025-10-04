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
  selector: 'app-maklumat-penguasaan-bahasa',
  templateUrl: './maklumat-penguasaan-bahasa.component.html',
  styleUrl: './maklumat-penguasaan-bahasa.component.scss',
  standalone: true,
  imports: [
    CommonModule,
    CardModule,
    GridModule,
    NavModule,
    ModalModule,
    FormsModule,
    // SidebarBrandComponent,
    // NgOptimizedImage,
    // <-- Correctly import only NavModule
  ],
})
export class MaklumatPenguasaanBahasaComponent implements OnInit{
  // Current active step tracking
  currentMainStep = 1; // Main step (1,2,3,4,5,6)
  currentSubStep = 1.5; // Sub step (1-15)

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
  readonlyField: boolean = false;

  documentType: string = '';
  
  maklumatPenguasaanBahasa1 = {
    jenisBahasa1: 'Bahasa Inggeris',
    jenisBahasa2: 'Bahasa Melayu',
    jenisBahasa3: 'Bahasa Perancis',
    jenisBahasa4: '',

    tahapKemahiranTulisan1: 'Cemerlang',
    tahapKemahiranTulisan2: 'Baik',
    tahapKemahiranTulisan3: '',
    tahapKemahiranTulisan4: '',

    tahapKemahiranLisan1: 'Cemerlang',
    tahapKemahiranLisan2: 'Baik',
    tahapKemahiranLisan3: '',
    tahapKemahiranLisan4: '',
  };

  constructor(private router: Router) { }

  next(): void {
  // Add your navigation logic here
    this.router.navigate(['./adm/pendaftaran-kakitangan/masukkan-rekod-maklumat-kat/maklumat-passport']);
  }

  back(): void {
  // Add your navigation logic here
    this.router.navigate(['./adm/pendaftaran-kakitangan/masukkan-rekod-maklumat-kat/maklumat-akedemik']);
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
