import {PerlesenanKenderaanComponent} from "../../../app/_jpj-modules/portal-awam/perlesenan-kenderaan/perlesenan-kenderaan.component";
import {EmployeeComponent} from "../../../app/_jpj-modules/employee/employee.component";
import {SessionUtil} from "../../../app/_jpj-modules/core/utils/SessionUtil";
import {Dashboard2Component} from "../../../app/_jpj-modules/dashboard2/dashboard2.component";
import {DropdownComponent, SidebarComponent} from "@coreui/angular";
import {LoginComponent} from "../../../app/_jpj-modules/login/login.component";
import {RegisterComponent} from "../../../app/_jpj-modules/register/register.component";
import {NiiseEmployeeComponent} from "../../../app/NiiseModules/NiiseEmployee/niise-employee.component";
import {PassportComponent} from "../../../app/NiiseModules/portal-awam/passport/passport.component";

function getScreens(): any[] {

  let screenList: any[] = [];
  let screens: any[] = [];

  let type = SessionUtil.getItem("type");
  switch (type) {
    case 'kaunter':
      // screens.push(LoginComponent);
      // screens.push(RegisterComponent);
      // screens.push(Dashboard2Component);
      // screens.push(PerlesenanKenderaanComponent);
      // screens.push(EmployeeComponent);
      screens.push(Dashboard2Component);
      screens.push(NiiseEmployeeComponent);
      // screens.push(SidebarComponent);

      break;
    case 'awam':
      screens.push(PassportComponent);
      // screens.push(PerlesenanKenderaanComponent);
      // screens.push(NiiseEmployeeComponent);
      // screens.push(Dashboard2Component);
      break;
    case 'employee':
      // screens.push(EmployeeComponent);
      screens.push(NiiseEmployeeComponent);
      screens.push(Dashboard2Component);
      break;
    case 'partner':
      screens.push(Dashboard2Component);
      screens.push(NiiseEmployeeComponent);
      break;
    default:
      screens.push(Dashboard2Component);
      screens.push(NiiseEmployeeComponent);
      break;
  }

  if(screenList.length < 1) {
    for (const screen of screens) {
      if (Object.hasOwn(screen, 'title')) {
        screenList.push({title: screen.title, component: screen});
      } else {
        screenList.push({title: transformName(screen.name), component: screen});
      }
    }
  }
  return screenList;
}

function transformName<T extends string>(input: T): string {
  return input
    .replace(/^_+/, "")                         // Remove leading underscores
    .replace(/([a-z])([A-Z])/g, "$1 $2")        // Add space between camel case
    .replace(/([A-Z]+)([A-Z][a-z])/g, "$1 $2")  // Handle all-caps to normal
    .trim();                                    // Remove leading/trailing spaces
}


export function getAllScreens() {
  return getScreens();
}

