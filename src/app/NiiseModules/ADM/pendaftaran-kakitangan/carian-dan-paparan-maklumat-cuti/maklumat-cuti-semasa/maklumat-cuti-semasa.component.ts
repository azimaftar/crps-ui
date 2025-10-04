import { 
  Component,
  ElementRef,
  OnInit,
  QueryList,
  ViewChildren,

 } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';
import {
  CardModule,
  NavModule,
  GridModule,
  SidebarBrandComponent,
  ModalModule,
} from '@coreui/angular';
import {maklumatCutiSemasa, maklumatCutiSemasaService
  ,maklumatCutiSemasaRequest
} from '../../../../../core/services/adm-services/maklumat-cuti-semasa-service';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-maklumat-cuti-semasa',
  imports: [
    CommonModule,
    CardModule,
    GridModule,
    NavModule,
    ModalModule,
    FormsModule,
  ],
  templateUrl: './maklumat-cuti-semasa.component.html',
  styleUrl: './maklumat-cuti-semasa.component.scss',
})
export class MaklumatCutiSemasaComponent implements OnInit{

  currentMainStep = 1; 
  currentSubStep = 1; 

  // Structured breadcrumb data
     mainSteps = [
    { mainStep: 1, mainLabel: 'Maklumat Cuti' }
  ];

   subSteps = [
    { mainStep: 1, subStep: 1, subLabel: 'Maklumat Cuti Semasa' },
    { mainStep: 1, subStep: 2, subLabel: 'Sejarah Cuti' }
  ];

  // Staff Profile Field
  readonlyField: boolean = true;

  tableData : any;

  HantarMaklumatCarian= false;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private MaklumatCutiSemasaService: maklumatCutiSemasaService) {

      this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe(() => {
        window.scrollTo(0, 0);
      });
     }

  @ViewChildren('subButton') subButtons!: QueryList<
  ElementRef<HTMLButtonElement>
  >;

  ngOnInit(): void {
    // this.findCurrentSubButtonScroll();
    this.loadMaklumatCutiSemasa();
    // window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  loadMaklumatCutiSemasa() {
    const request: maklumatCutiSemasaRequest = { stfMstrUid: 'UID0001', year: 2025 };
    this.MaklumatCutiSemasaService.getMaklumatCutiSemasa(request)
      .subscribe({
        next: (data) => {
          console.log('API response:', data.data);
          this.tableData = data.data;
        },
        error: (err) => {
          console.error('Error fetching leave history', err);
        }
      });
  }

  next(){
    this.router.navigate(['./adm/pendaftaran-kakitangan/carian-dan-paparan-maklumat-cuti/sejarah-cuti']);
  }

  onSubStepClick(section: any): void {
  this.currentMainStep = section.mainStep;
  this.currentSubStep = section.subStep;

    // Navigate directly
    if (section.mainStep === 1 && section.subStep === 1) {
      this.router.navigate([
        '/adm/pendaftaran-kakitangan/carian-dan-paparan-maklumat-cuti/maklumat-cuti-semasa'
      ]);
    }
    if (section.mainStep === 1 && section.subStep === 2) {
      this.router.navigate([
        '/adm/pendaftaran-kakitangan/carian-dan-paparan-maklumat-cuti/sejarah-cuti'
      ]);
    }
  }

}
