export type Company = {
  name: string;
  id: string;
  taxId: string;
  address: string;
  manager: string;
  iban: string;
};

export type Person = {
  name: string;
  id: string;
  address: string;
};

export type Client = Company | Person;

export type Currency = "BGN" | "EUR" | "USD";

export type Product = {
  name: string;
  price: number;
  currency: Currency;
  unit: string;
};

export type InvoiceItem = {
  product: Product;
  quantity: number;
  vatRate: number;
  valueWithoutVAT: number;
};

export type Invoice = {
  id: string;
  date: string;
  issuer: Company;
  recipient: Client;
  items: InvoiceItem[];
  amountSubtotal: number;
  vat: number;
  totalAmount: number;
  paid: boolean;
};
