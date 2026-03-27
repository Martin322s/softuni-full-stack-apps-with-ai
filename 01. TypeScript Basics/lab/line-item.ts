import { Unit } from "./enum-utils";

export interface LineItem {
  id: number;
  code: string;
  description: string;

  quantity: number;
  unit: Unit;

  price: number;
  discountPercent: number;

  priceWithDiscount: number;
  total: number;
}
