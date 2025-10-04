import { CommonModule, NgTemplateOutlet } from '@angular/common';
import { Component, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ButtonCloseDirective, ButtonModule, CardBodyComponent, CardComponent, CardModule, GridModule, ModalBodyComponent, ModalComponent, ModalFooterComponent, ModalHeaderComponent, ModalTitleDirective, ModalToggleDirective, TableColorDirective, TableDirective } from '@coreui/angular';

//Services
import { SemakanEgateService } from '../../../../core/services/ibc-services/semakan-egate.service';
import { CoreuiModalComponent } from '../../../../core/components/coreui-modal/coreui-modal.component';

@Component({
  selector: 'app-semakan-status-egate',
  imports: [
    CommonModule,
    FormsModule,
    CardModule,
    GridModule,
    ButtonModule,
    CardBodyComponent,
    CardComponent,
    TableDirective,
    TableColorDirective,
    ModalToggleDirective,
    ModalComponent,
    ModalHeaderComponent,
    ModalTitleDirective,
    ButtonCloseDirective,
    ModalBodyComponent,
    // NgTemplateOutlet,
    ModalFooterComponent,
    CoreuiModalComponent
    //EgateMonitoringComponent
  ],
  templateUrl: './semakan-status-egate.component.html',
  styleUrl: './semakan-status-egate.component.scss'
})
export class SemakanStatusEgateComponent {
// selectedGate = '';
//   gates = ['Gate 2069', 'Gate 2719', 'Gate 1210'];

  egateData = [
    { id: 1, gateNo: 'Gate 2069', date: '22/04/2025', time: '12:09:12', status: 'Beroperasi' },
    { id: 2, gateNo: 'Gate 2719', date: '22/04/2025', time: '12:09:15', status: 'Beroperasi' },
    { id: 3, gateNo: 'Gate 1210', date: '22/04/2025', time: '23:56:00', status: 'Sekatan Pengembara' },
    { id: 4, gateNo: 'Gate 1240', date: '22/04/2025', time: '12:34:00', status: 'Sekatan Pengembara' }
  ];

  filteredData = [...this.egateData];

  // Pagination properties
  currentPage = 1;
  pageSize = 3;

  get paginatedData() {
    const start = (this.currentPage - 1) * this.pageSize;
    return this.filteredData.slice(start, start + this.pageSize);
  }

  get totalPages() {
    return Math.ceil(this.filteredData.length / this.pageSize);
  }

  nextPage() {
    if (this.currentPage < this.totalPages) {
      this.currentPage++;
    }
  }

  prevPage() {
    if (this.currentPage > 1) {
      this.currentPage--;
    }
  }

  search() {
    if (this.selectedGate) {
      const currentDate = new Date().toISOString().split('T')[0];

      this.egateService.checkStatus(this.branchCode, this.selectedGate, currentDate).subscribe({
        next: (response: any) => {
          console.log('Search API response:', response);

          if (response?.receivedStatus === 1) {
            const gate = {
              gateNo: response.eGateNo,
              status: this.mapStatus(response.status)
            };

            console.log('Checking', gate.gateNo);
            console.log('Checking:', gate.status);
            this.viewGateDetails(gate);  //Open Modal

          } else {
            console.warn('No gate data found in response.');
          }


        },
        error: (err) => {
          console.error('Search API failed:', err);
        }
      });

    } else {
      console.log('No gate selected.');

    }
  }

  showModal :boolean = false;
  selectedGateData: any = null;

  //Modal
  viewGateDetails(gate: any) {
    this.selectedGateData = gate;
    this.showModal = true; //buka modal
  }

  // CODE KHAI STARTS
  gates: string[] = [];
  selectedGate: string = '';
  readonly branchCode: string = 'KLIA01'; //hardcode value branch code

  constructor(private egateService: SemakanEgateService) { }

  // ngOnInit(): void {
  //   this.loadGates();
  // }
  ngOnInit(): void {
    this.loadGates();
    this.loadListEgate(); // Fetch listing from API on load
  }

  //getNoEgate
  loadGates() {
    this.egateService.getEgateNoByBranch(this.branchCode).subscribe({
      next: (response: any) => {
        //console.log('API response:', response);
        this.gates = response?.data?.map((item: any) => item.eGateNo) || [];
      },
      error: (err) => {
        //console.error('Failed to load gates:', err);
      }
    });
  }

  //getListEgate
  loadListEgate() {
    this.egateService.getListEgate(this.branchCode).subscribe({
      next: (response) => {
        //console.log('getListEgate response:', response);

        const data = response.data || [];

        // Map API response to table format
        // this.egateData = data.map((item: any, index: number) => ({

        //   id: index + 1,
        //   gateNo: item.eGateNo,
        //   date: this.formatDate(item.txnDate),
        //   time: this.formatTime(item.txnTime),
        //   status: this.mapStatus(item.status) // Optional: translate status codes
        // }));
        this.egateData = data.map((item: any, index: number) => {
          //console.log('Each item in response:', item); // ✅ CORRECT PLACE

          return {
            id: index + 1,
            gateNo: item.egateNo, //ingat 
            date: this.formatDate(item.txnDate),
            time: this.formatTime(item.txnTime),
            status: this.mapStatus(item.status)
          };
        });


        this.filteredData = [...this.egateData];
      },
      error: (err) => {
        //console.error('Failed to load list egate:', err);
      }
    });
  }

  showSuccessModal: boolean = false;

  // gateStatus method
  gateStatus(gateNo: string, status: string): void {
    const body = {
      n3xitBranch: this.branchCode,
      gateNo: gateNo,
      actionLoc: status,
      loginId: 'OFF999'
    };

    this.egateService.postPalangEgate(body).subscribe({
      next: (res) => {
        console.log('Success:', res);
        this.showModal = false;     // ✅ Close main modal
        this.showSuccessModal = true;   // ✅ Show success modal
      },
      error: (err) => {
        console.error('Error:', err);
      }
    });
  }

  // Optional: handle closing success modal
  handleSuccessModalClose() {
    this.showSuccessModal = false;
  }

  formatDate(dateTimeStr: string): string {
    const date = new Date(dateTimeStr);
    return date.toLocaleDateString('en-GB'); // e.g., 06/08/2025
  }

  formatTime(dateTimeStr: string): string {
    const date = new Date(dateTimeStr);
    return date.toLocaleTimeString('en-GB'); // e.g., 14:30:00
  }

  mapStatus(statusCode: string | number): string {
    switch (statusCode) {
      case 1:
      case '1':
        return 'Selesai';
      case 2:
      case '2':
        return 'Lebih Daripada Seorang dikesan';
      case 3:
      case '3':
        return 'Kegagalan Bekalan Kuasa';
        case 4:
      case '4':
        return 'Sekatan Biometrik eGate';
      case 5:
      case '5':
        return 'Sekatan Pengembara';
      case 6:
      case '6':
        return 'Beroperasi';
      default:
        return '';
    }
  }
}