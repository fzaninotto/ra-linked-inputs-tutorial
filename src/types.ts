export interface Category {
  id: number;
  name: string;
}

export interface Customer {
  id: number;
  first_name: string;
  last_name: string;
  email: string;
}

export interface Order {
  id: number;
  reference: string;
  date: Date;
  customer_id: number;
  basket: any[];
  total_ex_taxes: number;
  delivery_fees: number;
  tax_rate: number;
  taxes: number;
  total: number;
  status: "ordered" | "delivered" | "cancelled";
  returned: boolean;
}
