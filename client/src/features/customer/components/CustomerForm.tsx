import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { createCustomer } from "../slices/customerSlice";
import { ThunkDispatch } from "redux-thunk";
import { AnyAction } from "redux";
import { Customer } from "../models/customer";

const CustomerForm: React.FC = () => {
  const dispatch: ThunkDispatch<Customer, Customer, AnyAction> = useDispatch();
  const [name, setName] = useState("");

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    dispatch(createCustomer({ name }));
    setName("");
  };

  return (
    <form onSubmit={handleFormSubmit}>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button type="submit">Add Customer</button>
    </form>
  );
};

export default CustomerForm;
