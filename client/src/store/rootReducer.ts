import { combineReducers } from '@reduxjs/toolkit';
import customerReducer from '../features/customer/slices/customerSlice';
import authReducer from '../features/auth/slices/authSlice'
const rootReducer = combineReducers({
  auth: authReducer,
  customer: customerReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
