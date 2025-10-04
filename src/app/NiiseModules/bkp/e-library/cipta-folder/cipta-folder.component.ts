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
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-cipta-folder',
  standalone: true,
  imports: [
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
  templateUrl: './cipta-folder.component.html',
  styleUrls: ['../../bkp.scss'],
})
export class CiptaFolderComponent {
  
  folderForm: FormGroup;

  constructor(private fb: FormBuilder, private router: Router) {
    this.folderForm = this.fb.group({
      folder_name: ['', Validators.required]
    });
  }

 // Stepper props
  currentStep = 1;
  steps = [
    { number: 1, title: 'Cipta Folder', route: 'bkp/e-library/cipta-folder' },
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
  goToFolderWujud() {
    const folder_name = this.folderForm.value.folder_name;
    // navigate and send folder name via query params
    this.router.navigate(['/bkp/e-library/folder-wujud'], { queryParams: { folder: folder_name } });
  }
  
}
