import { Component, OnInit } from '@angular/core';
import {
  ColComponent,
  ContainerComponent,
  FormCheckInputDirective,
  FormCheckLabelDirective,
  RowComponent
} from "@coreui/angular";
import { LocalStorageUtil } from "../../../core/utils/LocalStorageUtil";

@Component({
  standalone: true,
  selector: 'app-dev-mode',
  templateUrl: './dev-mode-component.html',
  styleUrls: ['./dev-mode-component.scss'],
  imports: [
    ColComponent,
    ContainerComponent,
    FormCheckInputDirective,
    FormCheckLabelDirective,
    RowComponent
  ]
})
export class DevModeComponent implements OnInit {

  protected uat: boolean = false;
  protected dev: boolean = true;
  protected navSec: boolean = false;
  protected navBkp: boolean = false;
  protected navCmn: boolean = false;
  protected navIdm: boolean = false;
  protected navIbc: boolean = false;
  protected navAdm: boolean = false;
  protected navCoreui: boolean = false;
  protected navOthers: boolean = false;
  protected readonlyMode: boolean | undefined;

  ngOnInit(): void {


    function getItemIfExist(key: string, defaultValue: any): any {
      const item = LocalStorageUtil.getItem(key);
      if(item==null){
        LocalStorageUtil.setItem(key, defaultValue);
      }
      return item !== null ? item : defaultValue;
    }

    this.uat = getItemIfExist("uat", this.uat);
    this.dev = getItemIfExist("dev", this.dev);
    this.navSec = getItemIfExist("navSec", this.navSec);
    this.navBkp = getItemIfExist("navBkp", this.navBkp);
    this.navCmn = getItemIfExist("navCmn", this.navCmn);
    this.navIdm = getItemIfExist("navIdm", this.navIdm);
    this.navIbc = getItemIfExist("navIbc", this.navIbc);
    this.navAdm = getItemIfExist("navAdm", this.navAdm);
    this.navCoreui = getItemIfExist("navCoreui", this.navCoreui);
    this.navOthers = getItemIfExist("navOthers", this.navOthers);

    this.updateReadonlyMode();
  }


  onCheckboxChange(event: Event): void {
    const inputElement = event.target as HTMLInputElement;
    const checkboxId = inputElement.id;
    const isChecked = inputElement.checked;

    console.log(`Checkbox ID: ${checkboxId}, Checked: ${isChecked}`);

    LocalStorageUtil.setItem(checkboxId, isChecked);

    if (checkboxId === "dev" && isChecked) {
      LocalStorageUtil.setItem("uat", false);
      this.uat = false;
      this.dev = true;
    } else if (checkboxId === "uat" && isChecked) {
      LocalStorageUtil.setItem("dev", false);
      this.dev = false;
      this.uat = true;
    } else if (checkboxId === "dev") {
      this.dev = false;
    } else if (checkboxId === "uat") {
      this.uat = false;
    }

    this.updateReadonlyMode();
  }

  private updateReadonlyMode(): void {
    if (this.dev) {
      this.readonlyMode = false;
    } else if (this.uat) {
      this.readonlyMode = true;
    } else {
      this.readonlyMode = undefined;
    }
  }
}
