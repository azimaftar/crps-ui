export interface MaritalStatus {
  mrgCode: string;
  mrgBmDesc: string;
  mrgBiDesc: string;
}

export interface genderList{
  sexCD: number;
  sexBMDesc: string;
  sexBIDesc: string;
}

export interface stateList{
  stateCode: string;
  stateBM: string;
  stateBI: string;
}

export interface ctryList{
  wrldSTACode: string;
  wrldSTADesc: string;
}

export interface jimList{
  brchCode: number;
  brchShortName: string;
  ctrCode: string;
  ctryDesc: string;
  brchBMDesc: string;
}

export interface Religion{
  r018_religion_bmdesc: string;
  r018_religion_bidesc: string;
  r018_jpn_ref_cd: number;
}

export interface sequenceNumber{
  seqNo: number;
  seqName: string;
  prefix1: string;
  prefix2: string;
  prefix3: string;
}

