import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  CardModule,
  GridModule,
  ModalModule,
  ButtonModule,
  FormModule,
} from '@coreui/angular';
import { FormsModule } from '@angular/forms';
import Holidays from 'date-holidays';

interface CalendarEvent {
  startDate: Date;
  endDate: Date;
  eventName: string;
}

interface Holiday {
  date: Date;
  type: string;
  name: string;
}

@Component({
  selector: 'app-tambah-data-takwim',
  templateUrl: './tambah-data-takwim.component.html',
  styleUrl: './tambah-data-takwim.component.scss',
  standalone: true,
  imports: [
    CommonModule,
    CardModule,
    GridModule,
    FormsModule,
    ModalModule,
    ButtonModule,
    FormModule,
  ],
})
export class TambahDataTakwimComponent implements OnInit {
  static title: string = 'Tambah Data Takwim';
  isViewOnly: boolean = false;
  showConfirmationModal: boolean = false;
  currentDate: Date = new Date();
  customHolidays: Holiday[] = [];

  daysInMonth: {
    date: Date;
    isHoliday: boolean;
    holidayNames?: string[];
    events?: CalendarEvent[];
  }[] = [];
  holidays: { date: string; name: string }[] = [];
  selectedDate: Date | null = null;
  daysOfWeek: string[] = [
    'ISNIN',
    'SELASA',
    'RABU',
    'KHAMIS',
    'JUMAAT',
    'SABTU',
    'AHAD',
  ];
  private hd = new Holidays('MY');
  selectedRegion: string = '';
  showModal: boolean = false;
  newEvent: { startDate: string; endDate: string; eventName: string } = {
    startDate: '',
    endDate: '',
    eventName: '',
  };
  events: CalendarEvent[] = [];

  ngOnInit() {
    this.loadHolidays();
    this.generateCalendar();
  }

  loadHolidays() {
    const currentYear = this.currentDate.getFullYear();
    const holidays = this.hd.getHolidays(currentYear);
    this.holidays = holidays
      .filter((h) => h.type === 'public')
      .map((h) => ({
        date: h.date.split(' ')[0],
        name: h.name,
      }));

    this.generateCalendar();
  }

  generateCalendar() {
    const year = this.currentDate.getFullYear();
    const month = this.currentDate.getMonth();
    const firstDayOfMonth = new Date(year, month, 1);
    const lastDayOfMonth = new Date(year, month + 1, 0);
    const startingDay = firstDayOfMonth.getDay();
    const totalDays = lastDayOfMonth.getDate();

    this.daysInMonth = [];

    for (let i = 0; i < startingDay; i++) {
      this.daysInMonth.push({ date: new Date(), isHoliday: false });
    }

    for (let day = 1; day <= totalDays; day++) {
      const date = new Date(year, month, day);
      const dateStr = date.toISOString().split('T')[0];

      const publicHolidays = this.holidays.filter((h) => h.date === dateStr);

      const customHolidays = this.customHolidays.filter(
        (h) =>
          h.date.getDate() === date.getDate() &&
          h.date.getMonth() === date.getMonth() &&
          h.date.getFullYear() === date.getFullYear()
      );

      const allHolidayNames = [
        ...publicHolidays.map((h) => h.name),
        ...customHolidays.map((h) => h.name),
      ];

      const isHoliday = allHolidayNames.length > 0;

      const eventsOnDate = this.events.filter(
        (event) =>
          new Date(event.startDate) <= date && new Date(event.endDate) >= date
      );

      this.daysInMonth.push({
        date,
        isHoliday,
        holidayNames: allHolidayNames.length > 0 ? allHolidayNames : undefined,
        events: eventsOnDate,
      });
    }
  }

  previousMonth() {
    this.currentDate = new Date(
      this.currentDate.getFullYear(),
      this.currentDate.getMonth() - 1,
      1
    );
    this.generateCalendar();
  }

  nextMonth() {
    this.currentDate = new Date(
      this.currentDate.getFullYear(),
      this.currentDate.getMonth() + 1,
      1
    );
    this.generateCalendar();
  }

  openModal(day: {
    date: Date;
    isHoliday: boolean;
    holidayName?: string;
    events?: CalendarEvent[];
  }) {
    if (day.date.getMonth() !== this.currentDate.getMonth()) return;
    this.selectedDate = day.date;
    this.showModal = true;
  }

  getMonthName(): string {
    return this.currentDate
      .toLocaleString('ms-MY', { month: 'long', year: 'numeric' })
      .toUpperCase();
  }

  getHolidayDetails(): string {
    if (!this.selectedDate) return 'Pilih tarikh untuk melihat butiran';

    const dateStr = this.selectedDate.toISOString().split('T')[0];
    const publicHolidays = this.holidays.filter((h) => h.date === dateStr);

    const customHolidays = this.customHolidays.filter(
      (h) => h.date.toISOString().split('T')[0] === dateStr
    );

    const allHolidays = [...publicHolidays, ...customHolidays];

    if (allHolidays.length === 0) return 'Tiada cuti pada tarikh ini';

    return allHolidays.map((h) => h.name).join(', ');
  }

  search() {
    console.log('Search triggered for:', this.selectedRegion);
    this.isViewOnly = true;
  }

  getModalTitle(): string {
    switch (this.selectedRegion) {
      case 'selangor':
        return 'SELANGOR, MALAYSIA';
      case 'jakarta':
        return 'JAKARTA, INDONESIA';
      default:
        return 'WILAYAH PERSEKUTUAN PUTRAJAYA, MALAYSIA';
    }
  }

  getHolidaysForSelectedDate(): { name: string; type: string }[] {
    if (!this.selectedDate) return [];

    const dateStr = this.selectedDate.toISOString().split('T')[0];

    const publicHolidays = this.holidays
      .filter((h) => h.date === dateStr)
      .map((h) => ({
        name: h.name,
        type: 'Cuti Umum',
      }));

    const customHolidays = this.customHolidays
      .filter((h) => h.date.toISOString().split('T')[0] === dateStr)
      .map((h) => ({
        name: h.name,
        type: h.type,
      }));

    return [...publicHolidays, ...customHolidays];
  }

  closeModal() {
    this.showModal = false;
    this.selectedDate = null;
  }

  showAddModal: boolean = false;
  newHoliday: { type: string; name: string } = {
    type: 'Cuti Umum',
    name: '',
  };

  tambahCuti() {
    this.showModal = false;
    this.showAddModal = true;
  }

  saveHoliday() {
    if (!this.newHoliday.name) {
      alert('Sila masukkan keterangan cuti');
      return;
    }
    if (!this.selectedDate) {
      alert('Tiada tarikh dipilih');
      return;
    }
    this.showAddModal = false;
    this.showConfirmationModal = true;
  }

  cancelAddHoliday() {
    this.showAddModal = false;
    this.showModal = true;
    this.newHoliday = { type: 'Cuti Umum', name: '' };
  }

  refreshHolidays() {
    this.loadHolidays();
    this.generateCalendar();
  }

  confirmSaveHoliday() {
    this.customHolidays.push({
      date: new Date(this.selectedDate!),
      type: this.newHoliday.type,
      name: this.newHoliday.name,
    });

    this.showConfirmationModal = false;
    this.showAddModal = false;
    this.showModal = true;
    this.newHoliday = { type: 'Cuti Umum', name: '' };

    this.generateCalendar();
  }

  cancelSaveHoliday() {
    this.showConfirmationModal = false;
    this.showAddModal = true;
  }

  eLibrary() {
    this.currentDate = new Date(
      this.currentDate.getFullYear(),
      this.currentDate.getMonth() + 1,
      1
    );
    this.generateCalendar();
  }
}
