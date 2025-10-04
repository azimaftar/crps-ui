import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FormDataService {
  private formData: any = null;

  setFormData(data: any): void {
    this.formData = data;
  }

/*************  ✨ Windsurf Command 🌟  *************/
  getFormData(): any {
    return this.formData;
  }
/*******  a1d9f36a-3ec4-4610-997b-932908c62ad3  *******/

  clearFormData(): void {
    this.formData = null;
  }
}
