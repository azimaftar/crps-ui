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

// Define the CalendarEvent interface at the top
interface CalendarEvent {
  startDate: Date;
  endDate: Date;
  eventName: string;
}

@Component({
  selector: 'kemaskini-nyahaktif-data-takwim',
  templateUrl: './kemaskini-nyahaktif-data-takwim.component.html',
  styleUrls: ['./kemaskini-nyahaktif-data-takwim.component.scss'],
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
export class kemaskiniNyahaktifTakwimComponent implements OnInit {
  static title: string = 'Kemaskini/Nyahaktif Data Takwim';
  currentDate: Date = new Date();
  // Ensure the type includes events

  daysInMonth: {
    date: Date;
    isHoliday: boolean;
    holidayName?: string;
    events?: CalendarEvent[]
  }[] = [];

  holidays: { date: string; name: string }[] = [];
  selectedDate: Date | null = null;
  holidayName: string = '';
  daysOfWeek: string[] = ['ISNIN', 'SELASA', 'RABU', 'KHAMIS', 'JUMAAT', 'SABTU', 'AHAD'];
  private hd = new Holidays('MY');
  selectedRegion: string = '';
  showModal: boolean = false;
  newEvent: { startDate: string; endDate: string; eventName: string } = {
    startDate: '',
    endDate: '',
    eventName: '',
  };
  showSCutiModal: boolean = false;
  deactivateModal: boolean = false;
  
  events: CalendarEvent[] = [];
  showAddModal: boolean = false;
  kemaskiniBerjaya: boolean = false;
  newHoliday: { type: string; name: string } = {
    type: 'Cuti Umum',
    name: '',
  };

  ngOnInit() {
    this.loadHolidays();
    this.generateCalendar();
  }

  loadHolidays() {
    const currentYear = this.currentDate.getFullYear();
    const holidays = this.hd.getHolidays(currentYear);
    this.holidays = holidays
      .filter(h => h.type === 'public')
      .map(h => ({
        date: h.date.split(' ')[0],
        name: h.name
      }));
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
      const holiday = this.holidays.find((h) => h.date === dateStr);
      const eventsOnDate = this.events.filter(
        (event) =>
          new Date(event.startDate) <= date && new Date(event.endDate) >= date
      );
      this.daysInMonth.push({
        date,
        isHoliday: !!holiday,
        holidayName: holiday ? holiday.name : undefined,
        events: eventsOnDate, // Should now be recognized
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

  openModal(day: { date: Date; isHoliday: boolean; holidayName?: string; events?: CalendarEvent[] }) {
    if (day.date.getMonth() !== this.currentDate.getMonth()) return;
    this.selectedDate = day.date;
    const dateStr = day.date.toISOString().split('T')[0];
    this.newEvent.startDate = dateStr;
    this.newEvent.endDate = dateStr;
    this.newEvent.eventName = '';
    this.showSCutiModal = true;
  }

  getHolidaysForSelectedDated(): { name: string; type: string }[] {
    if (!this.selectedDate) return [];

    const dateStr = this.selectedDate.toISOString().split('T')[0];
    const holidays = this.holidays.filter((h) => h.date === dateStr);

    return holidays.map((h) => ({
      name: h.name,
      type: 'Cuti Umum',
    }));
  }

  saveEvent() {
    if (!this.newEvent.eventName || !this.newEvent.startDate || !this.newEvent.endDate) return;

    const event: CalendarEvent = {
      startDate: new Date(this.newEvent.startDate),
      endDate: new Date(this.newEvent.endDate),
      eventName: this.newEvent.eventName,
    };
    this.events.push(event);
    this.showSCutiModal = false;
    this.generateCalendar();
  }

  cancelEvent() {
    this.showSCutiModal = false;
    this.newEvent = { startDate: '', endDate: '', eventName: '' };
  }

  tutupModal() {
    this.showSCutiModal = false;
    this.selectedDate = null;
  }

    tambahCuti() {
    this.showSCutiModal = false;
    this.showAddModal = true;
  }

deactivate(){
  this.showSCutiModal = false;
  this.deactivateModal = true;
}

isSameDate(date1: Date, date2: Date | null): boolean {
  if (!date1 || !date2) return false;
  const d1 = new Date(date1);
  const d2 = new Date(date2);
  return (
    d1.getFullYear() === d2.getFullYear() &&
    d1.getMonth() === d2.getMonth() &&
    d1.getDate() === d2.getDate()
  );
}

hasHolidayOnSelectedDate(): boolean {
  return this.daysInMonth.some(
    (day) => day.isHoliday && this.isSameDate(day.date, this.selectedDate)
  );
}


kemasKiniModal(day: { date: Date; holidayName?: string; isHoliday: boolean }): void {
  this.selectedDate = day.date;
  this.newHoliday = {
    name: day.holidayName || '',
    type: 'Cuti Umum'
  };
  this.showSCutiModal = false;
  this.showAddModal = true;
}


  getMonthName(): string {
    return this.currentDate
      .toLocaleString('ms-MY', { month: 'long', year: 'numeric' })
      .toUpperCase();
  }

  // getHolidayDetails(): string {
  //   if (!this.selectedDate) return 'Select a date to view details';
  //   const dateStr = this.selectedDate.toISOString().split('T')[0];
  //   const holiday = this.holidays.find(h => h.date === dateStr);
  //   return holiday ? holiday.name : 'No public holiday on this date';
  // }

  search() {
    console.log('Search triggered for:', this.selectedRegion);
  }

  eLibrary() {
    this.currentDate = new Date(
      this.currentDate.getFullYear(),
      this.currentDate.getMonth() + 1,
      1
    );
    this.generateCalendar();
  }
  openSCutiModal(day: {date: Date; isHoliday: boolean; holidayName?: string; events?: CalendarEvent[];}) {
    if (day.date.getMonth() !== this.currentDate.getMonth()) return;
    this.selectedDate = day.date;
    this.holidayName = day.holidayName || '';
    this.showSCutiModal = true;
  }


  closeModalOkay(){
    this.kemaskiniBerjaya = false;
  }
  

  backToMain(){
    this.deactivateModal = false;
  }


  backToMai(){
    this.deactivateModal = false;
    this.showSCutiModal = true;
  }

  saveHoliday2() {
    if (!this.newHoliday.name) {
      alert('Sila masukkan keterangan cuti');
      return;
    }else{
      this.showAddModal = false;
      this.kemaskiniBerjaya = true;
    }
  }

  cancelAddHoliday2() {
    this.showAddModal = false;
    this.showSCutiModal = true;
    this.newHoliday = { type: 'Cuti Umum', name: '' };
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



}
