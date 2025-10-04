export interface DocumentResponse {
  txnCD: string;
  attachName: string;
  seq: string;
  recSts: string;
  createID: string;
  createDate: string;
  updateID: string | null;
  updateDate: string | null;
  uid: string;
}
