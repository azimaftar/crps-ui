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

@Component({
  selector: 'app-stepper',
  templateUrl: './stepper.component.html',
  styleUrl: './stepper.component.scss',
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

  // Current active step tracking
  @Input() currentMainStep = 1;
  @Input() currentSubStep = 1;

  // Main steps only
  mainSteps = [
    { mainStep: 1, mainLabel: 'Maklumat Pegawai' },
    { mainStep: 2, mainLabel: 'Maklumat Laporan Siasatan' },
    { mainStep: 3, mainLabel: 'Kemas Kini Maklumat Arahan' },
    { mainStep: 4, mainLabel: 'Sahkan Laporan Pemulangan/ Perampasan Kad Kuasa' },
    { mainStep: 5, mainLabel: 'Kemas Kini Status Pemulangan/ Perampasan Kad Kuasa' },
  ];

  //This is for sub scroll, finding where the current sub is.
  @ViewChildren('subButton') subButtons!: QueryList<
    ElementRef<HTMLButtonElement>
  >;

  ngOnInit(): void {
    this.findCurrentSubButtonScroll();
  }

  findCurrentSubButtonScroll() {
    setTimeout(() => {
      this.subButtons
        .find(
          (_, i) =>
            this.mainSteps[i].mainStep === this.currentMainStep
        )
        ?.nativeElement.scrollIntoView({ inline: 'start' });
    });
  }

  //this is for stepper auto assign path
  navigatePageStepper(path: String) {
    this.router.navigate([path]);
  }
}
