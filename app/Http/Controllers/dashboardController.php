<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Models\User;
use App\Models\Order;
use App\Models\Reciept;

class dashboardController extends Controller
{
    public function index() {
        $users = User::count();
        $orders = Order::count();
        $payments = Reciept::count();

        return Inertia::render('Dashboard', [
            'users' => $users,
            'orders' => $orders,
            'payments' => $payments
        ]);
    }

    public function users() {
        $users = User::all();

        return Inertia::render('Dashboard/Users', [
            'users' => $users
        ]);
    }

    public function orders() {
        $orders = Order::orderBy('id')->with('user:id,name')->get();

        return Inertia::render('Dashboard/Orders', [
            'orders' => $orders,
        ]);
    }
}
