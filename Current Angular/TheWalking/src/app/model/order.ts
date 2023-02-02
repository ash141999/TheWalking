import { Customer } from "./customer";
import { Product } from "./product";

export class Order {
    orderId: number;
    product: Product;
    customer: Customer;
    purchaseDate: Date;
    quantity: number;
    totalAmount: number;
}
