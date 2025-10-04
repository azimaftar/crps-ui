import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ContainerComponent, RowComponent, ColComponent } from '@coreui/angular';
import { CommonModule } from '@angular/common';

interface FormData {
  bilanganSyif: number;
  bilanganKumpulan: number;
  syifTimes: { start: string; end: string }[];
  kumpulan: string[];
  kumpulanPertama: string;
  tarikhMulaRoster: string;
  tarikhAkhirRoster: string;
}

interface ScheduleDay {
  date: Date;
  dateStr: string;
  dayName: string;
  tugasan: string;
  petang: string;
  anjal: string;
  pagi: string;
  off: string;
}

@Component({
  selector: 'app-jadual3-syif2-kumpulan4',
  standalone: true,
  imports: [ContainerComponent, RowComponent, ColComponent, CommonModule],
  templateUrl: './jadual3-syif2-kumpulan4.component.html',
  styleUrls: [
    '../../../../../bkp.scss',
    './jadual3-syif2-kumpulan4.component.scss'
  ]
})
export class Jadual3Syif2Kumpulan4Component implements OnInit {
  formData!: FormData;
  scheduleDays: ScheduleDay[] = [];
  dates: { date: Date; dateStr: string; dayName: string }[] = [];

  constructor(
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.getFormData();
    this.generateSchedule();
  }

  getFormData(): void {
    const navigation = this.router.getCurrentNavigation();
    if (navigation?.extras?.state) {
      this.formData = navigation.extras.state as FormData;
    } else {
      const queryData = this.route.snapshot.queryParams['data'];
      if (queryData) {
        this.formData = JSON.parse(queryData);
      } else {
        // Default data for testing
        this.formData = {
          bilanganSyif: 2,
          bilanganKumpulan: 4,
          syifTimes: [
            { start: '08:00', end: '17:00' },
            { start: '13:00', end: '22:00' }
          ],
          kumpulan: ['A', 'B', 'C', 'D'],
          kumpulanPertama: 'C',
          tarikhMulaRoster: '2023-11-04',
          tarikhAkhirRoster: '2023-11-19'
        };
      }
    }
    console.log('Form data received:', this.formData);
  }

 generateSchedule(): void {
  this.dates = this.getDatesInRange(
    new Date(this.formData.tarikhMulaRoster),
    new Date(this.formData.tarikhAkhirRoster)
  );

  const { kumpulan, kumpulanPertama } = this.formData;

  this.scheduleDays = [];
  let nextPetang = kumpulanPertama;

  for (let i = 0; i < this.dates.length; i++) {
    const date = this.dates[i];
    const currentPetang = nextPetang;

    // Find index of current petang group
    const petangIndex = kumpulan.indexOf(currentPetang);

    // Calculate the other groups based on petang group
    const anjal = kumpulan[(petangIndex + 1) % kumpulan.length];
    const pagi = kumpulan[(petangIndex + 2) % kumpulan.length];
    const off = kumpulan[(petangIndex + 3) % kumpulan.length];

    // Set next day's petang to current day's off
    nextPetang = off;

    this.scheduleDays.push({
      date: date.date,
      dateStr: date.dateStr,
      dayName: date.dayName,
      tugasan: i % 2 === 0 ? 'RP' : 'FERI',
      petang: currentPetang,
      anjal: anjal,
      pagi: pagi,
      off: off
    });
  }
}

  getDatesInRange(startDate: Date, endDate: Date): { date: Date; dateStr: string; dayName: string }[] {
    const dates = [];
    const currentDate = new Date(startDate);
    const dayNames = ['AHAD', 'ISNIN', 'SELASA', 'RABU', 'KHAMIS', 'JUMAAT', 'SABTU'];

    while (currentDate <= endDate) {
      const dateStr = this.formatDate(currentDate);
      const dayName = dayNames[currentDate.getDay()];

      dates.push({
        date: new Date(currentDate),
        dateStr: dateStr,
        dayName: dayName
      });

      currentDate.setDate(currentDate.getDate() + 1);
    }

    return dates;
  }

  formatDate(date: Date): string {
    const day = date.getDate().toString().padStart(2, '0');
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    return `${day}/${month}`;
  }

  getDayName(date: Date): string {
    const days = ['AHAD', 'ISNIN', 'SELASA', 'RABU', 'KHAMIS', 'JUMAAT', 'SABTU'];
    return days[date.getDay()];
  }
}
