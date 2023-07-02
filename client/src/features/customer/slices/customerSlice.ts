import { RootState } from '../../../store/rootReducer';
import { Customer } from '../models/customer';
import {
  createCustomer as createCustomerAPI,
  fetchCustomers as fetchCustomersAPI,
  updateCustomer as updateCustomerAPI,
  deleteCustomer as deleteCustomerAPI,
} from '../services/customerService';
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// Define the initial state
interface CustomerState {
  customers: Customer[];
  loading: boolean;
  error: string | null;
}

const initialState: CustomerState = {
  customers: [],
  loading: false,
  error: null,
};

// Define the thunk action creator for fetching customers
export const fetchCustomers = createAsyncThunk(
  'customer/fetchCustomers',
  async () => {
    try {
      const response = await fetchCustomersAPI();
      return response;
    } catch (error) {
      throw new Error('Failed to fetch customers');
    }
  }
);

// Define the thunk action creator for creating a customer
export const createCustomer = createAsyncThunk(
  'customer/createCustomer',
  async (customer: Customer) => {
    try {
      const response = await createCustomerAPI(customer);
      return response;
    } catch (error) {
      throw new Error('Failed to create customer');
    }
  }
);

// Define the thunk action creator for updating a customer
export const updateCustomer = createAsyncThunk(
  'customer/updateCustomer',
  async (customer: Customer) => {
    try {
      const response = await updateCustomerAPI(customer);
      return response;
    } catch (error) {
      throw new Error('Failed to update customer');
    }
  }
);

// Define the thunk action creator for deleting a customer
export const deleteCustomer = createAsyncThunk(
  'customer/deleteCustomer',
  async (customerId: number) => {
    try {
      await deleteCustomerAPI(customerId);
      return customerId;
    } catch (error) {
      throw new Error('Failed to delete customer');
    }
  }
);

// Define the customerSlice
const customerSlice = createSlice({
  name: 'customer',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    // Reducer for fetching customers
    builder.addCase(fetchCustomers.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(fetchCustomers.fulfilled, (state, action) => {
      state.loading = false;
      state.error = null;
      state.customers = action.payload;
    });
    builder.addCase(fetchCustomers.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message || 'Failed to fetch customers';
    });

    // Reducer for creating a customer
    builder.addCase(createCustomer.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(createCustomer.fulfilled, (state, action) => {
      state.loading = false;
      state.error = null;
      state.customers.push(action.payload);
    });
    builder.addCase(createCustomer.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message || 'Failed to create customer';
    });

    // Reducer for updating a customer
    builder.addCase(updateCustomer.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(updateCustomer.fulfilled, (state, action) => {
      state.loading = false;
      state.error = null;
      const updatedCustomer = action.payload;
      const index = state.customers.findIndex(
        (customer) => customer.id === updatedCustomer.id
      );
      if (index !== -1) {
        state.customers[index] = updatedCustomer;
      }
    });
    builder.addCase(updateCustomer.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message || 'Failed to update customer';
    });

    // Reducer for deleting a customer
    builder.addCase(deleteCustomer.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(deleteCustomer.fulfilled, (state, action) => {
      state.loading = false;
      state.error = null;
      const deletedCustomerId = action.payload;
      state.customers = state.customers.filter(
        (customer) => customer.id !== deletedCustomerId
      );
    });
    builder.addCase(deleteCustomer.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message || 'Failed to delete customer';
    });
  },
});

// Export the actions and reducer
export const customerActions = customerSlice.actions;
export default customerSlice.reducer;

// Define the selectors
export const selectCustomers = (state: RootState) => state.customer.customers;
export const selectLoading = (state: RootState) => state.customer.loading;
export const selectError = (state: RootState) => state.customer.error;
