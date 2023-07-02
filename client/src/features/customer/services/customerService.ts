import axios from '../../../api/axiosInstance';
import { Customer } from '../models/customer';



export const fetchCustomers = async (): Promise<Customer[]> => {
  const response = await axios.get('/customers'); // Replace with your API endpoint
  return response.data;
};

export const createCustomer = async (customer: Customer): Promise<Customer> => {
  const response = await axios.post('/customers', customer); // Replace with your API endpoint
  return response.data;
};

export const updateCustomer = async (customer: Customer): Promise<Customer> => {
  const response = await axios.put('/customers', customer); // Replace with your API endpoint
  return response.data;
};

export const deleteCustomer = async (customerId: number): Promise<Customer> => {
  const response = await axios.delete(`/customers/${customerId}`); // Replace with your API endpoint
  return response.data;
};
