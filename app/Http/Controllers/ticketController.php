<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;
use App\Models\Order;

class ticketController extends Controller
{
    public function buyPage() {
        return Inertia::render('Buy');
    }

    public function order(Request $request) {
        $userId = auth()->user()->id;

        $validatedData = $request->validate([
            "attendence" => "required",
            "allergy" => "required|string|max:50"
        ]);

        Order::create([
            'id_user' => $userId,
            'attendence' => $request->attendence,
            'allergy' => $request->allergy,
        ]);

        return redirect('/');
    }
}
