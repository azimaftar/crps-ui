import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardModule, ColComponent, ContainerComponent, FormModule, GridModule, RowComponent } from '@coreui/angular';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

interface CalendarRow {
  day: string;
  months: { prev: string; current: string }[];
  pg: string;
  ptg: string;
  mlm: string;
  rehat1: string;
  rehat2: string;
}

interface MonthColumn {
  monthName: string;
  monthIndex: number;
  type: 'month';
}

interface FormData {
  bilanganSyif: number;
  bilanganKumpulan: number;
  syifTimes: { start: string; end: string }[];
  kumpulan: string[];
  kumpulanPertama: string;
  tarikhMulaRoster: string;
  tarikhAkhirRoster: string;
}

@Component({
  selector: 'app-jadual-roster',
  standalone: true,
  imports: [CommonModule, ContainerComponent, FormsModule,
    FormModule,
    GridModule,
    CardModule,
    RowComponent,
    ColComponent],
  templateUrl: './jadual-roster.component.html',
  styleUrls: [
    '../../../../../bkp.scss',
    '../../../../pengurusan-roaster.component.scss'
  ]
})
export class JadualRosterComponent implements OnInit {
  cawangan: string = 'Kuala Lumpur International Airport';
  bahagian: string = 'Bahagian Pengurusan Operasi Inginesen';
  unit: string = 'Unit Pemeriksaan Latioan Masuk';

  months = ['JAN', 'FEB', 'MAC', 'APR', 'MEI', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'];
  days = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];

  calendarData: CalendarRow[] = [];
  monthColumns: MonthColumn[] = [];
  currentYear = new Date().getFullYear();
  selectedCells: Set<string> = new Set();

  // Dynamic shift patterns based on form data
  shiftPatterns: { [dayOfWeek: number]: { pg: string; ptg: string; mlm: string; rehat1: string; rehat2: string } } = {};

  // Form data from previous page
  formData!: FormData;

  constructor(
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.getFormData();
    this.generateMonthColumns();
    this.generateShiftPatterns();
    this.generateCalendarData();
  }

  getFormData(): void {
    // Try to get data from navigation state first
    const navigation = this.router.getCurrentNavigation();
    if (navigation?.extras?.state) {
      this.formData = navigation.extras.state as FormData;
    } else {
      // Fallback to query params
      const queryData = this.route.snapshot.queryParams['data'];
      if (queryData) {
        this.formData = JSON.parse(queryData);
      } else {
        // Default data if nothing received (for testing)
        this.formData = {
          bilanganSyif: 3,
          bilanganKumpulan: 4,
          syifTimes: [
            { start: '08:00', end: '11:00' },
            { start: '11:00', end: '17:00' },
            { start: '17:00', end: '23:00' }
          ],
          kumpulan: ['A', 'B', 'C', 'D'],
          kumpulanPertama: 'B',
          tarikhMulaRoster: new Date().toISOString().split('T')[0],
          tarikhAkhirRoster: new Date().toISOString().split('T')[0]
        };
      }
    }
    console.log('Form data received:', this.formData);
  }

  generateMonthColumns(): void {
    this.monthColumns = this.months.map((month, index) => ({
      monthName: month,
      monthIndex: index,
      type: 'month'
    }));
  }

  generateShiftPatterns(): void {
  const { kumpulan, kumpulanPertama } = this.formData;

  // Find index of first group
  const firstGroupIndex = kumpulan.indexOf(kumpulanPertama);

  // Generate unique pattern for each day of the week
  for (let dayOfWeek = 0; dayOfWeek < 7; dayOfWeek++) {
    // Calculate rotation based on day index
    const rotationOffset = dayOfWeek;

    // Create rotated groups array with explicit type
    const rotatedGroups: string[] = [];
    for (let i = 0; i < kumpulan.length; i++) {
      const index = (firstGroupIndex + rotationOffset + i) % kumpulan.length;
      rotatedGroups.push(kumpulan[index]);
    }

    // Assign groups according to the specified format: ptg → rehat2 → rehat1 → pg/mlm
    this.shiftPatterns[dayOfWeek] = {
      ptg: rotatedGroups[0],    // First group -> ptg
      rehat2: rotatedGroups[1], // Second group -> rehat2
      rehat1: rotatedGroups[2], // Third group -> rehat1
      pg: rotatedGroups[3] || rotatedGroups[0], // Fourth group or rotate back
      mlm: rotatedGroups[3] || rotatedGroups[0]  // Same as pg
    };
  }
}

 getShiftForDay(dayOfWeek: number, shiftType: 'pg' | 'ptg' | 'mlm' | 'rehat1' | 'rehat2'): string {
  const pattern = this.shiftPatterns[dayOfWeek];
  return pattern ? pattern[shiftType] : '-';
}

  generateCalendarData(): void {
    this.calendarData = [];
    const maxWeeks = 4;

    for (let week = 0; week < maxWeeks; week++) {
      for (let dayOfWeek = 0; dayOfWeek < 7; dayOfWeek++) {
        const dayName = this.days[dayOfWeek];
        const row: CalendarRow = {
          day: dayName,
          months: [],
          pg: this.getShiftForDay(dayOfWeek, 'pg'),
          ptg: this.getShiftForDay(dayOfWeek, 'ptg'),
          mlm: this.getShiftForDay(dayOfWeek, 'mlm'),
          rehat1: this.getShiftForDay(dayOfWeek, 'rehat1'),
          rehat2: this.getShiftForDay(dayOfWeek, 'rehat2')
        };

        for (let monthIndex = 0; monthIndex < 12; monthIndex++) {
          const monthData = { prev: '', current: '' };
          const firstDay = new Date(this.currentYear, monthIndex, 1);
          const firstWeekday = firstDay.getDay();
          const daysInMonth = new Date(this.currentYear, monthIndex + 1, 0).getDate();

          // Calculate date position for this week and day
          const dateNum = (week * 7) + dayOfWeek - firstWeekday + 1;

          // Handle current month dates
          if (dateNum >= 1 && dateNum <= daysInMonth) {
            monthData.current = dateNum.toString();
          }

          // Handle previous month dates
          if (dateNum < 1) {
            const prevMonth = monthIndex === 0 ? 11 : monthIndex - 1;
            const prevYear = monthIndex === 0 ? this.currentYear - 1 : this.currentYear;
            const prevMonthDays = new Date(prevYear, prevMonth + 1, 0).getDate();
            monthData.prev = (prevMonthDays + dateNum).toString();
          }

          row.months.push(monthData);
        }

        // Handle next month's dates that appear in current month's grid
        for (let monthIndex = 0; monthIndex < 11; monthIndex++) {
          const dateNum = (week * 7) + dayOfWeek - new Date(this.currentYear, monthIndex, 1).getDay() + 1;
          const daysInMonth = new Date(this.currentYear, monthIndex + 1, 0).getDate();

          if (dateNum > daysInMonth) {
            const nextMonthDate = dateNum - daysInMonth;
            row.months[monthIndex + 1].prev = nextMonthDate.toString();
            row.months[monthIndex].current = '';
          }
        }

        this.calendarData.push(row);
      }
    }
  }

  isCellEmpty(row: CalendarRow, colIndex: number, type: 'prev' | 'current'): boolean {
    if (type === 'prev') {
      return row.months[colIndex].prev === '';
    } else {
      return row.months[colIndex].current === '';
    }
  }

  onCellClick(rowIndex: number, colIndex: number, type: 'prev' | 'current'): void {
    const cellId = `${rowIndex}-${colIndex}-${type}`;
    if (this.selectedCells.has(cellId)) {
      this.selectedCells.delete(cellId);
    } else {
      this.selectedCells.add(cellId);
    }
  }

  isCellSelected(rowIndex: number, colIndex: number, type: 'prev' | 'current'): boolean {
    return this.selectedCells.has(`${rowIndex}-${colIndex}-${type}`);
  }

  isDateCellHighlighted(row: CalendarRow, colIndex: number): boolean {
    return false;
  }
}
