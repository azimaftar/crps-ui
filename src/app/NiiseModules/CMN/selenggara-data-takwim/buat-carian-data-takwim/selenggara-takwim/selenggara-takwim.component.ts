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

@Component({
  selector: 'app-selenggara-takwim',
  templateUrl: './selenggara-takwim.component.html',
  styleUrl: './selenggara-takwim.component.scss',
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
export class SelenggaraTakwimComponent implements OnInit {
  static title: string = 'Selenggara Takwim';
  isViewOnly: boolean = false;
  currentDate: Date = new Date();

  daysInMonth: {
    date: Date;
    isHoliday: boolean;
    holidayName?: string;
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
    const dateStr = day.date.toISOString().split('T')[0];
    this.newEvent.startDate = dateStr;
    this.newEvent.endDate = dateStr;
    this.newEvent.eventName = '';
    this.showModal = true;
  }

  saveEvent() {
    if (
      !this.newEvent.eventName ||
      !this.newEvent.startDate ||
      !this.newEvent.endDate
    )
      return;

    const event: CalendarEvent = {
      startDate: new Date(this.newEvent.startDate),
      endDate: new Date(this.newEvent.endDate),
      eventName: this.newEvent.eventName,
    };
    this.events.push(event);
    this.showModal = false;
    this.generateCalendar();
  }

  cancelEvent() {
    this.showModal = false;
    this.newEvent = { startDate: '', endDate: '', eventName: '' };
  }

  getMonthName(): string {
    return this.currentDate
      .toLocaleString('ms-MY', { month: 'long', year: 'numeric' })
      .toUpperCase();
  }

  getHolidayDetails(): string {
    if (!this.selectedDate) return 'Select a date to view details';
    const dateStr = this.selectedDate.toISOString().split('T')[0];
    const holiday = this.holidays.find((h) => h.date === dateStr);
    return holiday ? holiday.name : 'No public holiday on this date';
  }

  search() {
    console.log('Search triggered for:', this.selectedRegion);
    this.isViewOnly = true;
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
