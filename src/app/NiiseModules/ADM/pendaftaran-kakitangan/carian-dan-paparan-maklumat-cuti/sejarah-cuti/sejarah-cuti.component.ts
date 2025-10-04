import { 
  Component,
  ElementRef,
  OnInit,
  QueryList,
  ViewChildren,

 } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import {
  CardModule,
  NavModule,
  GridModule,
  SidebarBrandComponent,
  ModalModule,
} from '@coreui/angular';
import { LeaveHistoryService, LeaveHistoryRequest , LeaveHistoryResponse } from '../../../../../services/LeaveHistoryservice/LeaveHistoryService';

@Component({
  selector: 'app-sejarah-cuti',
  imports: [
    CommonModule,
    CardModule,
    GridModule,
    NavModule,
    ModalModule,
    FormsModule
  ],
  templateUrl: './sejarah-cuti.component.html',
  styleUrl: './sejarah-cuti.component.scss'
})
export class SejarahCutiComponent implements OnInit{

  currentMainStep = 1; 
  currentSubStep = 2; 

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

  tableData: any;

  HantarMaklumatCarian= false;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private leaveHistoryService: LeaveHistoryService
  ){ }

  @ViewChildren('subButton') subButtons!: QueryList<
  ElementRef<HTMLButtonElement>
  >;

  ngOnInit(): void {
    // const stfMstrUid = this.route.snapshot.paramMap.get('stfMstrUid') || '';
  
      // if (stfMstrUid) {
        this.loadLeaveHistory();
    // }

  }

  loadLeaveHistory() {
    const request: LeaveHistoryRequest = { stfMstrUid: 'UID0001' };
    this.leaveHistoryService.getLeaveHistoryByUid(request)
      .subscribe({
        next: (data) => {
          console.log('API response:', data.data); // See exactly what backend sends
          this.tableData = data.data;
        },
        error: (err) => {
          console.error('Error fetching leave history', err);
        }
      });
  }

  back(){
    this.router.navigate(['./adm/pendaftaran-kakitangan/carian-dan-paparan-maklumat-cuti/maklumat-cuti-semasa']);
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
