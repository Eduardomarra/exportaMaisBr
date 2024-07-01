export interface Product {
  id: number;
  product: string;
  period: {
    month: number;
    year: number;
    amount: number;
  };
}
