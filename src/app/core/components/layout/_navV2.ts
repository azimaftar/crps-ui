import {INavData} from "@coreui/angular";
import {idmNav} from "./navigations/idmNav";
import {admNav} from "./navigations/admNav";
import {navImigresenPartner} from "./navigations/agenciesNav";
import {bkpNav} from "./navigations/bkpNav";
import {cmnNav} from "./navigations/cmnNav";
import {msjNav} from "./navigations/msjNav";
import {ptemplatNav} from "./navigations/ptemplatNav";
import {dashNav} from "./navigations/dashNav";
import {dashNav2} from "./navigations/dashNav2";
import {dashNav3} from "./navigations/dashNav3";
import {secNav} from "./navigations/secNav";
import {ibcNav} from "./navigations/ibcNav";
import { testNav } from "./navigations/testNav";
import { testNav2 } from "./navigations/testNav2";
import { LocalStorageUtil } from "../../utils/LocalStorageUtil";
import {navModulesToBeCombined} from "./navigations/navModulesToBeCombined";
import {othersNav} from "./navigations/othersNav";
import {coreuiNav} from "./navigations/coreuiNav";
import { takwimNav } from "./navigations/takwimNav";
export function navV2Modules(): INavData[] {
  return [

    ...(LocalStorageUtil.getItem("navIbc")==true || LocalStorageUtil.getItem("uat")==true ? [ibcNav] : []),
    ...(LocalStorageUtil.getItem("navSec")==true || LocalStorageUtil.getItem("uat")==true ? [secNav] : []),
    ...(LocalStorageUtil.getItem("navBkp")==true || LocalStorageUtil.getItem("uat")==true ? [bkpNav] : []),
    ...(LocalStorageUtil.getItem("navCmn")==true || LocalStorageUtil.getItem("uat")==true ? [cmnNav, msjNav, ptemplatNav, dashNav, dashNav2, dashNav3, takwimNav, testNav, testNav2] : []),
    ...(LocalStorageUtil.getItem("navIdm")==true || LocalStorageUtil.getItem("uat")==true ? [idmNav] : []),
    ...(LocalStorageUtil.getItem("navAdm")==true || LocalStorageUtil.getItem("uat")==true ? [admNav] : []),
    ...(LocalStorageUtil.getItem("navOthers")==true ? [navModulesToBeCombined] : []),
    ...(LocalStorageUtil.getItem("navOthers")==true ? [othersNav] : []),
    ...(LocalStorageUtil.getItem("navCoreui")==true ? [coreuiNav] : []),
    // ...[ibcNav],
    // ...[secNav],
    // ...[idmNav],
    // ...[admNav],
    // ...navImigresenPartner,
    // ...[bkpNav],
    // ...[cmnNav],
    // ...[msjNav],
    // ...[dashNav]
    // ...[dashNav2]
    // ...[dashNav3]
  ]
}
