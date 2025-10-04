import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { RouterTestingModule } from '@angular/router/testing';

import { SenaraiGantianTugasComponent } from './senarai-gantian-tugas.component';

// CoreUI components
import { CardModule, BadgeModule, ButtonModule, FormModule, GridModule, ListGroupModule, ProgressModule, NavModule } from '@coreui/angular';

describe('PermohonanGantianTugasComponent', () => {
  let component: SenaraiGantianTugasComponent;
  let fixture: ComponentFixture<SenaraiGantianTugasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        SenaraiGantianTugasComponent,
        CommonModule,
        ReactiveFormsModule,
        RouterTestingModule,
        CardModule,
        BadgeModule,
        ButtonModule,
        FormModule,
        GridModule,
        ListGroupModule,
        ProgressModule,
        NavModule,
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(SenaraiGantianTugasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });


});