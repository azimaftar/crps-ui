import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {
  ContainerComponent,
  RowComponent,
  ColComponent,
} from '@coreui/angular';
import { CommonModule } from '@angular/common';

interface ScheduleDay {
  date: Date;
  dayName: string;
  assignments: string[];
  offDuty: string;
}

interface ShiftTime {
  start: string;
  end: string;
}

interface FormData {
  bilanganSyif: number;
  bilanganKumpulan: number;
  syifTimes: ShiftTime[];
  kumpulan: string[];
  kumpulanPertama: string;
  tarikhMulaRoster: string;
  tarikhAkhirRoster: string;
}

@Component({
  selector: 'app-jadual2-syif3-kumpulan',
  standalone: true,
  imports: [ContainerComponent, RowComponent, ColComponent, CommonModule],
  templateUrl: './jadual2-syif3-kumpulan.component.html',
  styleUrls: [
    '../../../../../bkp.scss',
    './jadual2-syif3-kumpulan.component.scss'
  ]
})
export class Jadual2Syif3KumpulanComponent implements OnInit {
  formData!: FormData;
  schedule: ScheduleDay[] = [];
  shiftHeaders: string[] = [];
  daysInRange: { date: Date; dayName: string }[] = [];

  constructor(private router: Router, private route: ActivatedRoute) {}

  ngOnInit() {
    const navigation = this.router.getCurrentNavigation();
    this.formData =
      navigation?.extras?.state ||
      JSON.parse(this.route.snapshot.queryParams['data'] || '{}');

    if (!this.formData.bilanganSyif) {
      console.error('Invalid form data received');
      this.router.navigate(['/previous-page']);
      return;
    }

    this.generateSchedule();
  }

  generateSchedule() {
    this.shiftHeaders = this.formData.syifTimes.map(
      (time: ShiftTime) =>
        `${this.formatTime(time.start)} - ${this.formatTime(time.end)}`
    );

    this.daysInRange = this.getDaysInRange(
      new Date(this.formData.tarikhMulaRoster),
      new Date(this.formData.tarikhAkhirRoster)
    );

    this.schedule = this.daysInRange.map((day, dayIndex) => {
      const rotationPattern = this.calculateRotation(dayIndex);
      return {
        date: day.date,
        dayName: day.dayName,
        assignments: rotationPattern.assignments,
        offDuty: rotationPattern.offDuty,
      };
    });
  }

  calculateRotation(dayIndex: number): {
    assignments: string[];
    offDuty: string;
  } {
    const { kumpulan, kumpulanPertama, bilanganSyif } = this.formData;

    // Calculate which 2-day block we're in (0, 1, or 2)
    const rotationBlock = Math.floor(dayIndex / 2) % 3;

    // Get the index of kumpulan pertama
    const pertamaIndex = kumpulan.indexOf(kumpulanPertama);
    let shift1 = '';
    let shift2 = '';
    let offDuty = '';

    // Apply the CORRECT rotation pattern
    if (rotationBlock === 0) {
      // ABC pattern - kumpulan pertama (B) should be in shift 2
      shift1 = kumpulan[(pertamaIndex - 1 + kumpulan.length) % kumpulan.length]; // A
      shift2 = kumpulan[pertamaIndex]; // B (kumpulan pertama)
      offDuty = kumpulan[(pertamaIndex + 1) % kumpulan.length]; // C
    } else if (rotationBlock === 1) {
      // BCA pattern - kumpulan pertama (B) should be in shift 1
      shift1 = kumpulan[pertamaIndex]; // B (kumpulan pertama)
      shift2 = kumpulan[(pertamaIndex + 1) % kumpulan.length]; // C
      offDuty =
        kumpulan[(pertamaIndex - 1 + kumpulan.length) % kumpulan.length]; // A
    } else {
      // CAB pattern - kumpulan pertama (B) should be in cuti
      shift1 = kumpulan[(pertamaIndex + 1) % kumpulan.length]; // C
      shift2 = kumpulan[(pertamaIndex - 1 + kumpulan.length) % kumpulan.length]; // A
      offDuty = kumpulan[pertamaIndex]; // B (kumpulan pertama)
    }

    // Return assignments based on number of shifts
    return {
      assignments: [shift1, shift2],
      offDuty: offDuty,
    };
  }

  formatTime(timeString: string): string {
    const [hours, minutes] = timeString.split(':');
    const period = +hours >= 12 ? 'PM' : 'AM';
    const hours12 = +hours % 12 || 12;
    return `${hours12}:${minutes} ${period}`;
  }

  getDaysInRange(
    startDate: Date,
    endDate: Date
  ): { date: Date; dayName: string }[] {
    const days = [];
    const currentDate = new Date(startDate);

    while (currentDate <= endDate) {
      days.push({
        date: new Date(currentDate),
        dayName: this.getDayName(currentDate.getDay()),
      });
      currentDate.setDate(currentDate.getDate() + 1);
    }

    return days;
  }

  getDayName(dayIndex: number): string {
    const days = [
      'Ahad',
      'Isnin',
      'Selasa',
      'Rabu',
      'Khamis',
      'Jumaat',
      'Sabtu',
    ];
    return days[dayIndex];
  }
}
