<?php
namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Customer;

class CustomerSeeder extends Seeder
{
    public function run()
    {
        $customers = [
            [
                'name' => 'Customer 1',
                'address' => 'Address 1',
                'email' => 'customer1@example.com',
                'phone' => '1234567890',
                'updated_by' => 1,
                'created_by' => 1,
            ],
            [
                'name' => 'Customer 2',
                'address' => 'Address 2',
                'email' => 'customer2@example.com',
                'phone' => '9876543210',
                'updated_by' => 1,
                'created_by' => 1,
            ],
            // Add more customer entries as needed
        ];

        foreach ($customers as $customer) {
            Customer::create($customer);
        }
    }
}
