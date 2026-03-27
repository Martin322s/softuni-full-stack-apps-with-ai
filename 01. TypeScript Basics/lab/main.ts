import { Company } from "./company";
import { Currency } from "./enum-utils";
import { LineItem } from "./line-item";
import { PaymentInfo } from "./payment-info";
import { Payment } from "./payments";

interface Invoice {
  invoiceNumber: string;
  date: string;
  taxEventDate: string;
  referenceDocument?: string;

  supplier: Company;
  client: Company;

  lineItems: LineItem[];

  subtotal: number;
  vat: number;
  total: number;
  currency: Currency;

  paymentInfo: PaymentInfo;
  payments: Payment[];
}

const supplier: Company = {
  name: "SoftUni Trade Ltd.",
  ein: "204567890",
  vat: "BG204567890",
  address: "15 Alexander Malinov Blvd, Sofia",
};

const client: Company = {
  name: "Tech Market AD",
  ein: "207654321",
  vat: "BG207654321",
  address: "8 Vitosha Blvd, Plovdiv",
};

const paymentInfo: PaymentInfo = {
  deliveryTerms: "Delivery within 3 business days",
  paymentTerms: "Bank transfer within 10 days",
  paymentDue: "2026-04-06",
  bank: "DSK Bank",
  iban: "BG80STSA93000012345678",
  bic: "STSABGSF",
};

const lineItems: LineItem[] = [
  {
    id: 1,
    code: "LAP-15",
    description: "Laptop 15-inch",
    quantity: 2,
    unit: "pcs",
    price: 1800,
    discountPercent: 5,
    priceWithDiscount: 1710,
    total: 3420,
  },
  {
    id: 2,
    code: "CAB-UTP",
    description: "Network cable",
    quantity: 20,
    unit: "m",
    price: 2.5,
    discountPercent: 0,
    priceWithDiscount: 2.5,
    total: 50,
  },
];

const currency: Currency = "BGN";

const payments: Payment[] = [
  {
    date: "2026-03-27",
    method: "Bank transfer",
    amount: 1500,
  },
  {
    date: "2026-03-30",
    method: "Bank transfer",
    amount: 1000,
  },
];

const invoice: Invoice = {
  invoiceNumber: "INV-2026-001",
  date: "2026-03-27",
  taxEventDate: "2026-03-27",
  referenceDocument: "PO-9981",
  supplier,
  client,
  lineItems,
  subtotal: 3470,
  vat: 694,
  total: 4164,
  currency,
  paymentInfo,
  payments,
};

const paidAmount = invoice.payments.reduce((sum, payment) => sum + payment.amount, 0);
const lineItemsTotal = invoice.lineItems.reduce((sum, item) => sum + item.total, 0);

const hasCompanies = invoice.supplier.name !== "" && invoice.client.name !== "";
const hasLineItems = invoice.lineItems.length > 0;
const totalsMatch = invoice.subtotal === lineItemsTotal;
const paymentIsValid = paidAmount <= invoice.total;

console.log("Supplier and client are connected:", hasCompanies);
console.log("Line items are attached to invoice:", hasLineItems);
console.log("Invoice subtotal matches line items:", totalsMatch);
console.log("Payments are valid:", paymentIsValid);
console.log("Invoice object:", invoice);