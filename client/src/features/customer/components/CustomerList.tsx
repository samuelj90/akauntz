import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCustomers, selectCustomers } from '../slices/customerSlice';
import { ThunkDispatch } from 'redux-thunk';
import { AnyAction } from 'redux';

const CustomerList: React.FC = () => {
  const dispatch: ThunkDispatch<any, any, AnyAction> = useDispatch()
  const customers = useSelector(selectCustomers);

  useEffect(() => {
    dispatch(fetchCustomers());
  }, [dispatch]);

  return (
    <div className="container mx-auto">
      <h1 className="text-2xl font-bold mb-4">Customer List</h1>
      <ul className="grid grid-cols-2 gap-4">
        {customers.map((customer) => (
          <li
            key={customer.id}
            className="bg-gray-100 p-4 rounded shadow hover:bg-gray-200"
          >
            <h2 className="text-xl font-semibold">{customer.name}</h2>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CustomerList;
