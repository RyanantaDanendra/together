<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;

class ticketController extends Controller
{
    public function buyPage() {
        return Inertia::render('Buy');
    }
}
