import {
  Component,
  ElementRef,
  Input,
  OnInit,
  QueryList,
  ViewChildren,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  CardModule,
  NavModule,
  GridModule,
  ModalModule,
} from '@coreui/angular';
import { Router } from '@angular/router';

// Define types for better structure
interface SubStep {
  subStep: number;
  subLabel: string;
}

interface Step {
  mainStep: number;
  mainLabel: string;
  subSteps: SubStep[];
}

@Component({
  selector: 'app-stepper',
  templateUrl: './stepper.component.html',
  styleUrls: ['./stepper.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
    CardModule,
    GridModule,
    NavModule,
    ModalModule,
    FormsModule,
  ],
})
export class StepperComponent implements OnInit {
  constructor(private router: Router) {}

  @Input() currentMainStep = 1;
  @Input() currentSubStep = 1;

  // Main steps (each must have subSteps, even if empty)
  mainSteps: Step[] = [
    { mainStep: 1, mainLabel: 'Maklumat Pemohon', subSteps: [] },
    { mainStep: 2, mainLabel: 'Maklumat Laporan Kehilangan Kad Kuasa', subSteps: [] },
    { mainStep: 3, mainLabel: 'Dokumen Sokongan - Laporan Polis', subSteps: [] },
    { mainStep: 4, mainLabel: 'Sahkan Laporan Kehilangan Kad Kuasa', subSteps: [] },
    { mainStep: 5, mainLabel: 'Laporan Siasatan Kehilangan Kad Kuasa', subSteps: [],},
    { mainStep: 6, mainLabel: 'Sahkan Laporan Siasatan Kehilangan Kad Kuasa', subSteps: [],},
    { mainStep: 7, mainLabel: 'Luluskan Laporan Kehilangan Kad Kuasa', subSteps: [],},
        // Add more substeps if needed
        // { subStep: 2, subLabel: 'Dokumen Tambahan' },
      
  ];

  @ViewChildren('subButton') subButtons!: QueryList<ElementRef<HTMLButtonElement>>;

  ngOnInit(): void {
    this.findCurrentSubButtonScroll();
  }

  findCurrentSubButtonScroll() {
    setTimeout(() => {
      if (this.currentMainStep === 5) {
        const step5 = this.mainSteps.find(s => s.mainStep === 5);
        const subButton = this.subButtons.find(
          (_, i) => step5?.subSteps[i]?.subStep === this.currentSubStep
        );
        subButton?.nativeElement.scrollIntoView({
          inline: 'start',
          behavior: 'smooth',
        });
      }
    });
  }

  navigatePageStepper(path: string) {
    this.router.navigate([path]);
  }
}
