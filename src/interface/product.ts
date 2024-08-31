export interface IProduct {
    description: any;
    id:number;
    name: string;
    image: string;
    price: number;
    category: string;
  }
  export type FormData = Pick<IProduct,'name'|'image'|'price'|'category'>
  // interfaces.ts
  export interface CartItem {
    id: number;
    name: string;
    price: number;
    quantity: number;
    image: string;
  }

  export interface CheckoutForm {
    name: string;
    address: string;
    email: string;
    paymentMethod: string;
  }
