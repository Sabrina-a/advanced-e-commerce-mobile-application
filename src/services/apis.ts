import axios from 'axios';

const API_URL = 'http://localhost:3000';

export const listProducts = async () => {
    console.log("fetch prod")
  try {
    const response = await axios.get(`http://localhost:3000/products`);
    return response.data;
  } catch (error) {
    console.error(error)
    throw error;
  }
};
  