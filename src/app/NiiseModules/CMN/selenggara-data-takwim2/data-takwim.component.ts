import { Component, OnInit, LOCALE_ID } from '@angular/core';
import { CommonModule, formatDate, registerLocaleData } from '@angular/common';
import { CalendarEvent, CalendarView } from 'angular-calendar';
import { FormsModule } from '@angular/forms';
import localeMs from '@angular/common/locales/ms';
import { FullCalendarModule } from '@fullcalendar/angular';

import {
  CardModule,
  GridModule,
  ModalModule,
  ButtonModule,
  FormModule,
  
  
} from '@coreui/angular';
import { CalendarConfigModule } from './calender-config.module';
import { HolidayModalComponent } from './list-takwim/holiday-modal.component';

import { HttpClientModule } from '@angular/common/http';
import { TakwimHoliday, TakwimService } from './takwmin.service';

registerLocaleData(localeMs);

@Component({
  selector: 'app-selenggara-takwim',
  templateUrl: './data-takwim.component.html',
  styleUrls: ['./data-takwim.component.scss'],
  standalone: true,
  providers: [{ provide: LOCALE_ID, useValue: 'ms' }],
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    CardModule,
    GridModule,
    ModalModule,
    ButtonModule,
    FormModule,
    CalendarConfigModule,
    HolidayModalComponent,
    FullCalendarModule,
  ],
})
export class DataTakwimComponent implements OnInit {
  static title = 'Selenggara Takwim';

  view: CalendarView = CalendarView.Month;
  CalendarView = CalendarView;
  viewDate: Date = new Date();
  months = [
    'Januari', 'Februari', 'Mac', 'April', 'Mei', 'Jun',
    'Julai', 'Ogos', 'September', 'Oktober', 'November', 'Disember'
  ];

  years: number[] = [];

  selectedMonth: number = new Date().getMonth() + 1;
  selectedYear: number = new Date().getFullYear();


  selectedDate: Date | null = null;
  selectedRegion: string = '';
  showModal: boolean = false;

  holidays: { date: string; name: string }[] = [];
  modalHolidayDetails: TakwimHoliday[] = [];

  newEvent = {
    startDate: '',
    endDate: '',
    eventName: '',
    title: '',
  };

  events: CalendarEvent[] = [];

  private readonly regionMap: Record<string, { state: string; ctry: string }> = {
    selangor: { state: '10', ctry: 'MYS' },
    jakarta: { state: '01', ctry: 'IDN' },
    '': { state: '01', ctry: 'MYS' }, // default region
  };

  constructor(private takwimService: TakwimService) { }

  ngOnInit(): void {

    const currentYear = new Date().getFullYear();
    this.years = Array.from({ length: 11 }, (_, i) => currentYear - 5 + i);

    this.viewDate = new Date(this.selectedYear, this.selectedMonth - 1);
    this.loadHolidays(this.selectedYear, this.selectedMonth);
    // this.loadHolidays(this.viewDate.getFullYear());
  }


  loadHolidays(year: number, month: number): void {
    const region = this.regionMap[this.selectedRegion] || this.regionMap[''];
    const { state, ctry } = region;

    this.takwimService.getHolidays(state, ctry, month, year).subscribe({
      next: (response) => {
        const publicHolidays = response.data.filter((h) => h.holidayDetail);

        this.holidays = publicHolidays.map((h) => ({
          date: h.date,
          name: h.holidayDetail!,
        }));

        // Optional: assign each holiday a different color
        const colorPalette = [
          { primary: '#ad2121', secondary: '#FAE3E3' },
          { primary: '#1e90ff', secondary: '#D1E8FF' },
          { primary: '#e3bc08', secondary: '#FDF1BA' },
          { primary: '#3f51b5', secondary: '#C5CAE9' },
          { primary: '#009688', secondary: '#B2DFDB' },
          { primary: '#8e24aa', secondary: '#E1BEE7' },
        ];

        this.events = publicHolidays.map((h, index) => ({
          title: h.holidayDetail!,
          start: new Date(h.date),
          allDay: true,
          color: colorPalette[index % colorPalette.length],
        }));
      },
      error: (err) => {
        console.error('Failed to fetch holidays:', err);
      },
    });
  }

  dayClicked(event: any): void {
    const date: Date = event.day.date;
    this.selectedDate = date;

    const dateStr = formatDate(date, 'yyyy-MM-dd', 'en-US');
    const region = this.regionMap[this.selectedRegion] || this.regionMap[''];
    const { state, ctry } = region;
    this.showModal = false;

    this.takwimService.getTakwimByTarikh(dateStr, state, ctry).subscribe({
      next: (response) => {
        setTimeout(() => {
          this.modalHolidayDetails = response.data;
          this.newEvent = {
            startDate: dateStr,
            endDate: dateStr,
            title: this.getRegionName(this.selectedRegion),
            eventName: '',
          };
          this.showModal = true;
        });
      },
      error: (err) => {
        console.error('Error fetching holiday details by date:', err);
        setTimeout(() => {
          this.modalHolidayDetails = [];
          this.newEvent = {
            startDate: dateStr,
            endDate: dateStr,
            title: this.getRegionName(this.selectedRegion),
            eventName: '',
          };
          this.showModal = true;
        });
      },
    });
  }



  search(): void {
    this.viewDate = new Date(this.selectedYear, this.selectedMonth - 1);
    this.loadHolidays(this.selectedYear, this.selectedMonth);
  }



  private getRegionName(code: string): string {
    const displayMap: Record<string, string> = {
      selangor: 'Selangor, Malaysia',
      jakarta: 'Jakarta, Indonesia',
      '': 'Wilayah Persekutuan Putrajaya, Malaysia',
    };
    return displayMap[code] || code;
  }



  previousMonth(): void {
    this.viewDate = this.subMonth(this.viewDate);
    this.loadHolidays(this.viewDate.getFullYear(), this.viewDate.getMonth() - 1);
  }

  nextMonth(): void {
    this.viewDate = this.addMonth(this.viewDate);
    this.loadHolidays(this.viewDate.getFullYear(), this.viewDate.getMonth() + 1);
  }

  addMonth(date: Date): Date {
    const oldYear = this.viewDate.getFullYear();
    const newDate = new Date(date);
    newDate.setMonth(newDate.getMonth() + 1);

    this.viewDate = newDate;
    if (newDate.getFullYear() !== oldYear) {
      this.loadHolidays(newDate.getFullYear(), this.viewDate.getMonth() + 1);
    }

    return this.viewDate;
  }

  subMonth(date: Date): Date {
    const oldYear = this.viewDate.getFullYear();
    const newDate = new Date(date);
    newDate.setMonth(newDate.getMonth() - 1);

    this.viewDate = newDate;
    if (newDate.getFullYear() !== oldYear) {
      this.loadHolidays(newDate.getFullYear(), this.viewDate.getMonth() - 1);
    }

    return this.viewDate;
  }

  ////// not yet done
  saveEventHandler(eventData: typeof this.newEvent) {
    this.events.push({
      title: eventData.eventName,
      start: new Date(eventData.startDate),
      end: new Date(eventData.endDate),
      allDay: true,
      color: { primary: '#1ccc48ff', secondary: '#D1E8FF' },
    });

    this.showModal = false;
    this.newEvent = { startDate: '', endDate: '', eventName: '', title: '' };
    this.modalHolidayDetails = [];
  }

  cancelEventHandler() {
    this.showModal = false;
    this.newEvent = { startDate: '', endDate: '', eventName: '', title: '' };
    this.modalHolidayDetails = [];
  }

  // getHolidayDetails(): string {
  //   if (!this.selectedDate) return 'Sila pilih tarikh untuk maklumat cuti.';

  //   const dateStr = formatDate(this.selectedDate, 'yyyy-MM-dd', 'en-US');
  //   const holiday = this.holidays.find((h) => h.date === dateStr);
  //   return holiday ? holiday.name : 'Tiada cuti umum pada tarikh ini.';
  // }


}
