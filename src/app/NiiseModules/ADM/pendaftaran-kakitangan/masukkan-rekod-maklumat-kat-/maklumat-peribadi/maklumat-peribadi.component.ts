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
  selector: 'app-maklumat-peribadi',
  templateUrl: './maklumat-peribadi.component.html',
  styleUrl: './maklumat-peribadi.component.scss',
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

export class MaklumatPeribadiComponent implements OnInit{
  // Current active step tracking

  currentMainStep = 1;
  currentSubStep = 1.1;

  // Main steps only
  mainSteps = [
    { mainStep: 1, mainLabel: 'Profil' },
    { mainStep: 2, mainLabel: 'Tandatangan Digital' },
    { mainStep: 3, mainLabel: 'Biometrik' },
  ];

  documenttype:string='2';

  // Structured breadcrumb data
  // Sub-steps (flattened, with reference to parent mainStep)
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

  maklumatPeribadi = {
    NamaPegawai: 'John Alexander Smith',
    jenisDokumen: 'Passport',
    noDokumenID: 'N12345678',
    tarikhLahir: '15 Mac 1985',
    umur: '40',
    jantina: 'Lelaki',
    nomborSijilLahir: 'B1234567890',
    negeriLahir: 'New South Wales',
    statusWargaNegara: 'AUS',
    negara: 'Australia',
    bangsa: 'Caucasian',
    etnik: '',
    statusBumipuera: 'Tidak',
    agama: 'Christian',
    statusPerkahwinan: 'Bujang',
    alamat1: '15, Bennelong Creasent,',
    alamat2: 'Sydney Olympic Park,',
    alamat3: 'NSW',
    poskod: '2127',
    bandar: 'Sydney Olympic Park',
    negeri: 'New South Wales',
    nomborTelefonRumah: '',
    nomborTelefonPejabat: '',
    sambungan: '',
    nomborTelefonBimbit: '+61 422 123 456',
    alamatEmail: 'john.smith@imi.gov.my',
  };

  constructor(private router: Router) { }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  next(): void {
  // Add your navigation logic here
    this.router.navigate(['./adm/pendaftaran-kakitangan/masukkan-rekod-maklumat-kat/maklumat-perkhidmatan-dan-perjawatan']);
  }

    //This is for sub scroll, finding where the current sub is.
  @ViewChildren('subButton') subButtons!: QueryList<
    ElementRef<HTMLButtonElement>
  >;

  ngOnInit2(): void {
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
