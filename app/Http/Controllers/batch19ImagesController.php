<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Models\batch19Image;

class batch19ImagesController extends Controller
{
    public function index() {
        $images = batch19Image::All();

        return Inertia::render('Images', [
            'images' => $images,
        ]);
    }

    public function dashboardPage() {
        $images = batch19Image::All();

        return Inertia::render('Dashboard/Images', [
            'images' => $images
        ]);
    }

    public function upload(Request $request) {
        $validatedData = $request->validate([
            "image" => "required|mimes:jpg,png,jpeg"
        ]);

        if($request->hasFile('image')) {
            $path = $request->file('image')->store('image', 'public');
        } else {
            return redirect()->back()->with(["error" => "Image file is required"]);
        }

        batch19Image::create([
            'image' => $path
        ]);
    }
}
