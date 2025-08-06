<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;

class batch19ImagesController extends Controller
{
    public function index() {
        return Inertia::render('Images');
    }
}
