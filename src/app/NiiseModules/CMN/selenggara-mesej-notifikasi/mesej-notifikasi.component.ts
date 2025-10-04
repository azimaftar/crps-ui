import { Component, OnInit, ViewChild, TemplateRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardModule, GridModule } from '@coreui/angular';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { TambahBaruComponent } from './tambahbaru/tambahbaru.component';
import { DataEmptyComponent } from './notification/data-empty.component';
import { PengaktifanComponent } from './pengaktifan/pengaktifan.component';

import { MesejNotifikasiService } from './mesej-notifikasi.service';

@Component({
  selector: 'app-mesej-notifikasi',
  templateUrl: './mesej-notifikasi.component.html',
  styleUrl: './mesej-notifikasi.component.scss',
  standalone: true,
  imports: [
    CommonModule,
    CardModule,
    GridModule,
    NgxDatatableModule,
    TambahBaruComponent,
    DataEmptyComponent,
    PengaktifanComponent,
    FormsModule,
  ],
})
export class MesejNotifikasiComponent implements OnInit {
  allRows: any[] = [];
  pagedRows: any[] = [];
  columns: any[] = [];
  selectedMessageType: string = '';

  pageSize = 10;
  pageNumber = 0;
  totalCount = 0;

  messageTypes: any[] = [];
  messageTypeMap: { [key: number]: string } = {};

  messageError: any[] = [];
  messageErrorMap: { [key: number]: string } = {};

  // errorTypeMap: { [key: number]: string } = {
  //   1: 'Pop-Up',
  //   2: 'Footer',
  //   3: 'Field',
  //   4: 'Screen',
  // };

  statusMap: { [key: number]: string } = {
    0: 'Aktif',
    1: 'Tidak Aktif',
  };

  @ViewChild('actionTemplate', { static: true }) actionTemplate!: TemplateRef<any>;
  @ViewChild('numberTemplate', { static: true }) numberTemplate!: TemplateRef<any>;
  @ViewChild('messageTypeTemplate', { static: true }) messageTypeTemplate!: TemplateRef<any>;
  @ViewChild('errorTypeTemplate', { static: true }) errorTypeTemplate!: TemplateRef<any>;
  @ViewChild('statusTemplate', { static: true }) statusTemplate!: TemplateRef<any>;
  @ViewChild('descriptionTextareaTemplate', { static: true }) descriptionTextareaTemplate!: TemplateRef<any>;
  @ViewChild('tambahbaru') tambahbaruComponent!: TambahBaruComponent;
  @ViewChild('dataempty') DataEmptyComponent!: DataEmptyComponent;
  @ViewChild('pengaktifan') PengaktifanComponent!: PengaktifanComponent;

  constructor(private mesejService: MesejNotifikasiService, private router: Router) { }

  ngOnInit(): void {
    this.loadMessageTypes();
    this.loadMessageError();
    this.loadAllMessages();


    this.columns = [
      { name: 'No', minWidth: 40, maxWidth: 50, cellTemplate: this.numberTemplate },
      { name: 'Kod Mesej Notifikasi', prop: 'codeMsg', width: 120 },
      { name: 'Jenis Mesej', prop: 'typeMsg', width: 100, cellTemplate: this.messageTypeTemplate },
      {
        name: 'Keterangan Mesej/Notifikasi',
        prop: 'dtlMsg',
        width: 450,
        cellTemplate: this.descriptionTextareaTemplate,
      },
      { name: 'Jenis Ralat', prop: 'typError', width: 100, cellTemplate: this.errorTypeTemplate },
      { name: 'Status', prop: 'status', width: 100, cellTemplate: this.statusTemplate },
      { name: 'Tindakan', cellTemplate: this.actionTemplate, width: 100 },
    ];
  }



  loadAllMessages() {
    this.mesejService.getAllMessages().subscribe(response => {
      this.allRows = response.data;
      this.totalCount = response.data.length;
      this.setPage({ offset: this.pageNumber });
    });
  }

  loadMessageTypes() {
    this.mesejService.getMessageTypes().subscribe(
      (data) => {
        this.messageTypes = data;
        data.forEach(item => this.messageTypeMap[item.codeMsgType] = item.descBITypeMsg);
      },
      (error) => console.error('Failed to load message types', error)
    );
  }
  loadMessageError() {
    this.mesejService.getMessageError().subscribe(
      (data) => {
        this.messageError = data;
        data.forEach(item => this.messageErrorMap[item.codeMsgError] = item.descBIErrorMsg);
      },
      (error) => console.error('Failed to load message types', error)
    );
  }

  onSearch(id: string, selectedMessageType: string) {
    this.mesejService.getAllMessages({ codeMsg: id, typeMsg: selectedMessageType }).subscribe({
      next: (response) => {
        if (Array.isArray(response.data) && response.data.length > 0) {
          this.allRows = response.data;
          this.totalCount = response.data.length;
          this.setPage({ offset: this.pageNumber });
        } else {
          this.DataEmptyComponent.open(response.message || 'Tiada data dijumpai.', 'error');
          this.allRows = [];
          this.totalCount = 0;
          this.setPage({ offset: this.pageNumber });
        }
      },
      error: (err) => {
        console.error('Error retrieving messages:', err);
        this.DataEmptyComponent.open('Ralat semasa mendapatkan data. Sila cuba lagi.', 'error');
        this.allRows = [];
        this.totalCount = 0;
        this.setPage({ offset: this.pageNumber });
      }
    });
  }


  onUpdate(row: any) {
    this.tambahbaruComponent.open(row);
  }

  onDeactivate(row: any) {
    this.PengaktifanComponent.open(row);
  }

  openModal() {
    this.tambahbaruComponent.open();
  }

  handleSave(event: { data: any; isEditMode: boolean }) {
    const { data, isEditMode } = event;
    const now = new Date().toISOString();

    if (isEditMode) {
      const updatePayload = { ...data, updateId: 12345, updateDate: now };
      this.mesejService.updateMessage(data.uidCode, updatePayload).subscribe({
        next: (updated) => {
          this.DataEmptyComponent.open(updated?.message, 'success');
          this.loadAllMessages();
        },
        error: (err) => {
          this.DataEmptyComponent.open(err.error.message, 'error');
        }
      });
    } else {
      const createPayload = { ...data, createId: 12345, createDate: now };
      this.mesejService.createMessage(createPayload).subscribe({
        next: (created) => {
          this.DataEmptyComponent.open(created?.message, 'success');
          this.loadAllMessages();
        },
        error: (err) => {
          this.DataEmptyComponent.open(err.error.message, 'error');
        }
      });
    }
  }

  setPage(pageInfo: any) {
    this.pageNumber = pageInfo.offset;
    const start = this.pageNumber * this.pageSize;
    this.pagedRows = this.allRows.slice(start, start + this.pageSize);
  }

  onPage(event: any) {
    this.setPage(event);
  }

  get totalPages(): number {
    return Math.ceil(this.totalCount / this.pageSize);
  }

  goToPreviousPage() {
    if (this.pageNumber > 0) {
      this.pageNumber--;
      this.setPage({ offset: this.pageNumber });
    }
  }

  goToNextPage() {
    if ((this.pageNumber + 1) < this.totalPages) {
      this.pageNumber++;
      this.setPage({ offset: this.pageNumber });
    }
  }

  onPageSizeChange(event: Event) {
    const newSize = +(event.target as HTMLSelectElement).value;
    this.pageSize = newSize;
    this.pageNumber = 0;
    this.setPage({ offset: this.pageNumber });
  }

  handleAktif(data: any) {
    const now = new Date().toISOString();
    const updateStatus = { ...data, updateId: 12345, updateDate: now };

    this.mesejService.updateStatus(data.uidCode, updateStatus).subscribe({
      next: () => {
        const statusText = data.status === '0' ? 'Mengaktifkan' : 'Menyahaktifkan';
        this.DataEmptyComponent.open(`Berjaya ${statusText}.`, 'success');
        this.loadAllMessages();
      },
      error: (err) => {
        this.DataEmptyComponent.open('Gagal Mengaktifkan.', 'error');
      }
    });
  }
}
