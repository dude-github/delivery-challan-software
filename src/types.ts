export interface Item {
  id: string;
  srNo: number;
  description: string;
  quantity: number;
  unit: string;
  remarks: string;
  hsnCode: string;
  uom: string;
  pricePerUnit: number;
  totalPrice: number;
}

export interface CompanyDetails {
  name: string;
  address: string;
  gstin: string;
  contactPerson: string;
  contactNumber: string;
  email: string;
}

export interface TransportDetails {
  name: string;
  gstin: string;
  vehicleType: string;
  vehicleNumber: string;
  lrNo: string;
  lrDate: string;
  eWayBillNumber: string;
}

export interface ChallanData {
  challanNo: string;
  date: string;
  psdOrderNumber: string;
  workOrderNumber: string;
  workOrderDate: string;
  from: CompanyDetails;
  to: CompanyDetails;
  items: Item[];
  transport: TransportDetails;
  deliveryTerms: string;
  transitInsurance: string;
  authorizedSignatory: string;
  code: string;
  totalAmount: number;
}