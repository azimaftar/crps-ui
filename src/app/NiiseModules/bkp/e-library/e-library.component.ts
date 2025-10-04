import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import {
  BorderDirective,
  ButtonDirective,
  CardBodyComponent,
  CardComponent,
  CardHeaderComponent,
  CardTextDirective,
  CardTitleDirective,
  ColComponent,
  RowComponent,
  ContainerComponent,
  DropdownComponent,
  DropdownItemDirective,
  DropdownMenuDirective,
  DropdownToggleDirective,
} from '@coreui/angular';
import { CommonModule } from '@angular/common';
import { ProgressFlowComponent } from './progress-flow/progress-flow.component';
import { FormBuilder, FormGroup, ReactiveFormsModule, FormsModule } from '@angular/forms';
import { SharedFolderService } from '../../../services/e-library/shared-folder.service';

@Component({
  selector: 'app-e-library',
  standalone: true,
  imports: [
    FormsModule,
    RowComponent,
    ColComponent,
    CardComponent,
    BorderDirective,
    CardHeaderComponent,
    CardBodyComponent,
    CardTitleDirective,
    CardTextDirective,
    ButtonDirective,
    ContainerComponent,
    DropdownComponent,
    DropdownToggleDirective,
    DropdownMenuDirective,
    DropdownItemDirective,
    RouterLink,
    CommonModule,
    ProgressFlowComponent,
    ReactiveFormsModule,
  ],
  templateUrl: './e-library.component.html',
  styleUrls: [
    '../bkp.scss'
  ]
})
export class ELibraryComponent {
  
  selectedFolder: string = '';

  constructor(private fb: FormBuilder, private router: Router, private sharedFolderService: SharedFolderService) {}

 // Stepper props
  currentStep = 1;
  steps = [
    { number: 1, title: 'Pilih Folder', route: 'bkp/e-library' },
    { number: 2, title: 'Muat Naik Fail', route: 'bkp/e-library/folder-wujud' },
    // { number: 3, title: 'Maklumat Terperinci', route: '' },
  ];

  isStepActive(stepNumber: number): boolean {
    return this.currentStep === stepNumber;
  }

   navigateTo(step: any) {
    this.currentStep = step.number;
    if (step.route) {
      this.router.navigate([step.route]);
    }
  }
  //end of stepper

  //navigate to other pages
  navNext(): void {
    if (this.selectedFolder) {
      this.sharedFolderService.setFolder(this.selectedFolder);
      this.router.navigate([
      'bkp/e-library/folder-wujud',
    ]);
  }
  }
  goCreate(): void {
    this.router.navigate([
      'bkp/e-library/cipta-folder',
    ]);
  }
}
