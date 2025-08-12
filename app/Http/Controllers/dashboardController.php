<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Models\User;
use App\Models\Order;
use App\Models\Reciept;
use App\Models\batch19Image;

class dashboardController extends Controller
{
    public function index() {
        $users = User::count();
        $orders = Order::count();
        $payments = Reciept::count();
        $images = batch19Image::count();

        return Inertia::render('Dashboard', [
            'users' => $users,
            'orders' => $orders,
            'payments' => $payments,
            'images' => $images
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

    // update attendence funciton
    public function update(Request $request, $id) {
        $validatedData = $request->validate([
            'attendence' => 'required'
        ]);

        $order = Order::find($id);

        $order->update($validatedData);

        if($request->attendence == "no") {
            $order->update([
                'allergy' => '-'
            ]);
        }

        $order->save();

        return back()->with("updateSuccess", "Attendence Updated Successfully");
    }

    // add allergy
    public function add($id, Request $request) {
        $validatedData = $request->validate([
            'allergy' => 'string|max:50'
        ]);

        $order = Order::find($id);

        $order->update($validatedData);

        $order->save();

        return back()->with("success", "Attendence Updated Successfully");
    }

    public function paymentsPage() {
         $payments = Reciept::orderBy('id')->with('user:id,name')->get();

        return Inertia::render('Dashboard/Payments', [
            'payments' => $payments,
        ]);
    }
}
