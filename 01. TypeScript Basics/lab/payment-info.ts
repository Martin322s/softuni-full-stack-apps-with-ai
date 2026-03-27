export interface PaymentInfo {
  deliveryTerms: string;
  paymentTerms: string;
  paymentDue: string;

  bank: string;
  iban: string;
  bic: string;
}
