export interface User {
    user_id: number;
    username: string;
    password: string;
    email: string;
    phone_number: string;
    first_name: string;
    last_name: string;
    date_of_birth: string;  
    account_type: 'Admin' | 'Basic' | 'Premium'; 
  }
//   export interface Product {
//     id: number;
//     productName: string;
//     image: string;
//     price: string;
//     description: string;
//     review: string;
//     rate: number;
// }
export interface Product {
  id: number;
  productName: string;
  image: string;
  price: string;
  description: string;
  review: string;
  rate: number;
  quantity: number;
}

export interface PaymentData {
  cardNumber: string;
  expiryDate: string;
  cvv: string;
}