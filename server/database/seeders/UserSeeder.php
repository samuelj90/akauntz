<?php
namespace Database\Seeders;
use Illuminate\Database\Seeder;
use Illuminate\Support\Str;
use App\Models\User;


class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        User::create([
            'id' => null,
            'name' => 'John Doe',
            'email' => 'johndoe@example.com',
            'email_verified_at' => now(),
            'password' => bcrypt('password123'),
            'remember_token' => Str::random(10),
            'last_visit' => now(),
            'user_type' => 'regular',
            'user_status' => 'active',
            'created_by' => 1,
            'created_at' => now(),
            'updated_by' => 1,
            'updated_at' => now(),
        ]);
    }
}
