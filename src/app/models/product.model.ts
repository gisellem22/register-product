export class Product {
  product: string;
  date: string;
  origin: Address;
  destination: Address;
  route?: string;
}

export interface Address {
  address: string;
  lat: number;
  lng: number;
}
