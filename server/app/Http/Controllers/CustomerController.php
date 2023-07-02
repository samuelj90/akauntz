<?php

namespace App\Http\Controllers;

use App\Models\Customer;
use Illuminate\Http\Request;

class CustomerController extends Controller
{
    public function index()
    {
        // Retrieve all customers
        $customers = Customer::all();

        return response()->json($customers);
    }

    public function store(Request $request)
    {
        // Validate and create a new customer
        $validatedData = $request->validate([
            'name' => 'required|max:128',
            'address' => 'required',
            'email' => 'required|email|max:256',
            'phone' => 'required|max:16',
            'last_modified_date' => 'nullable|date',
            'last_modified_by' => 'nullable|integer',
            'created_date' => 'required|date',
            'created_by' => 'required|integer',
        ]);

        $customer = Customer::create($validatedData);

        return response()->json($customer, 201);
    }

    public function show($id)
    {
        // Retrieve a specific customer
        $customer = Customer::findOrFail($id);

        return response()->json($customer);
    }

    public function update(Request $request, $id)
    {
        // Validate and update a customer
        $validatedData = $request->validate([
            'name' => 'required|max:128',
            'address' => 'required',
            'email' => 'required|email|max:256',
            'phone' => 'required|max:16',
            'last_modified_date' => 'nullable|date',
            'last_modified_by' => 'nullable|integer',
            'created_date' => 'required|date',
            'created_by' => 'required|integer',
        ]);

        $customer = Customer::findOrFail($id);
        $customer->update($validatedData);

        return response()->json($customer);
    }

    public function destroy($id)
    {
        // Delete a customer
        $customer = Customer::findOrFail($id);
        $customer->delete();

        return response()->json(['message' => 'Customer deleted']);
    }
}
