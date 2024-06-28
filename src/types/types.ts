export interface User {
    user_id: number;
    username: string;
    password: string;
    email: string;
    phone_number: string;
    first_name: string;
    last_name: string;
    date_of_birth: string; // Change to Date if parsing is required
    account_type: 'Admin' | 'Basic' | 'Premium'; // Adjust as per your data
  }
  export interface Product {
    id: number;
    productName: string;
    image: string;
    price: string;
    description: string;
    review: string;
    rate: number;
}