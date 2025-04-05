<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;
use App\Models\Order;
use App\Models\Reciept;

class ticketController extends Controller
{
    public function buyPage() {
        $userId = auth()->user()->id;
        $bought = Order::where('id_user',$userId)->exists();
        $paid = Reciept::where('id_user', $userId)->exists();

        // check the user attendence
        $orderAttendence = Order::where('id_user', $userId)->pluck("attendence");

        return Inertia::render('Buy', [
            'bought' => $bought,
            'paid' => $paid,
            'orderAttendence' => $orderAttendence
        ]);
    }

    public function order(Request $request) {
        $userId = auth()->user()->id;

        $validatedData = $request->validate([
            "attendence" => "required",
            "allergy" => "nullable|string|max:50"
        ]);

        Order::create([
            'id_user' => $userId,
            'attendence' => $request->attendence,
            'allergy' => $request->allergy,
        ]);

        if($request->attendence == "no") {
            return redirect('/')->with('notAttend', "Rsvp Successfully Filled");
        } else {
            return redirect()->route('paymentPage')->with("success", "Ticket Booked Successfully");
        }

    }

    public function paymentPage() {
        $userId = auth()->user()->id;
        $bought = Order::where('id_user',$userId)->exists();
        $paid = Reciept::where('id_user', $userId)->exists();

        $orderAttendence = Order::where('id_user', $userId)->pluck("attendence");

        return Inertia::render('Payment', [
            'success' => session('success'),
            'bought' => $bought,
            'paid' => $paid,
            'orderAttendence' => $orderAttendence
        ]);
    }

    public function upload(Request $request) {
        $userId = auth()->user()->id;

        $validatedData = $request->validate([
            "image" => "required|mimes:jpg,png,jpeg"
        ]);

        if($request->hasFile('image')) {
            $path = $request->file('image')->store('image', 'public');
        } else {
            return redirect()->back()->with(["error" => "Image file is required"]);
        }

        Reciept::create([
            'id_user' => $userId,
            'image' => $path
        ]);

        return redirect('/')->with("success", "Reciept Uploaded successfully");
    }
}
