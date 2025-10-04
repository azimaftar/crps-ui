import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';

export interface Holiday {
  id?: number;
  name: string;
  startDate: string;
  endDate: string;
  region: string;
}

@Injectable({ providedIn: 'root' })
export class HolidayService {
  private mockHolidays: Holiday[] = [
    { id: 1, name: 'Hari Kebangsaan', startDate: '2025-08-31', endDate: '2025-08-31', region: 'putrajaya' },
    { id: 2, name: 'Hari Raya Aidilfitri', startDate: '2025-04-01', endDate: '2025-04-02', region: 'putrajaya' },
    { id: 3, name: 'Hari Buruh', startDate: '2025-05-01', endDate: '2025-05-01', region: 'selangor' },
  ];

  private idCounter = 4;

  getHolidays(year: number, region: string): Observable<Holiday[]> {
    const result = this.mockHolidays.filter(
      (h) => h.region === region && new Date(h.startDate).getFullYear() === year
    );
    return of(result).pipe(delay(300));
  }

  getHolidayFromDate(date: string): Observable<Holiday[]> {
    const result = this.mockHolidays.filter((h) => h.startDate === date);
    return of(result).pipe(delay(200));
  }

  createHoliday(holiday: Holiday): Observable<Holiday> {
    const newHoliday = { ...holiday, id: this.idCounter++ };
    this.mockHolidays.push(newHoliday);
    return of(newHoliday).pipe(delay(200));
  }

  updateHoliday(id: number, updatedHoliday: Holiday): Observable<Holiday> {
    const index = this.mockHolidays.findIndex((h) => h.id === id);
    if (index > -1) {
      this.mockHolidays[index] = { ...updatedHoliday, id };
    }
    return of(this.mockHolidays[index]).pipe(delay(200));
  }
}
