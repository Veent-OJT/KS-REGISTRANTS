// types.ts
export interface Ticket {
  id: string;
  name: string;
  price: number;
  available: number;
  sold: number;
}

export interface Voucher {
  id: string;
  code: string;
  discount: number;
  maxUses: number;
  used: number;
}
