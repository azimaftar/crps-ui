import { Component, OnInit, computed, signal, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import {
  CardModule,
  GridModule,
  CarouselModule,
  CarouselComponent,
  CarouselControlComponent,
  CarouselInnerComponent,
  CarouselItemComponent,
  ProgressComponent,
  WidgetStatBComponent,
  TemplateIdDirective,
  WidgetStatCComponent,
} from '@coreui/angular';
import { IconDirective, IconSetService } from '@coreui/icons-angular';
import { cilChartPie } from '@coreui/icons';

@Component({
  selector: 'app-pengurusan-parameter-aplikasi',
  templateUrl: './pengurusan-parameter-aplikasi.component.html',
  styleUrl: './pengurusan-parameter-aplikasi.component.scss',
  standalone: true,
  imports: [
    CardModule,
    GridModule,
    CarouselModule,
    CarouselComponent,
    CarouselInnerComponent,
    CarouselItemComponent,
    CarouselControlComponent,
    ProgressComponent,
    WidgetStatBComponent,
    TemplateIdDirective,
    WidgetStatCComponent,
    IconDirective,
    RouterLink,
  ],
})
export class PengurusanParameterAplikasiComponent implements OnInit {
  static title: string = 'Pengurusan Parameter Aplikasi';
  public iconSet = inject(IconSetService);

  constructor() {
    this.iconSet.icons = {
      cilChartPie
    };
  }

  slides: any[] = new Array(3).fill({
    id: -1,
    src: '',
    title: '',
    subtitle: '',
  });

  ngOnInit(): void {
    this.slides[0] = {
      src: './assets/images/angular.jpg',
    };
    this.slides[1] = {
      src: './assets/images/react.jpg',
    };
    this.slides[2] = {
      src: './assets/images/vue.jpg',
    };
  }

  value = signal<number>(75.9);
  valuePercent = computed(() => `${this.value()}%`);
}
