<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Auth\RegisteredUserController;
use App\Http\Controllers\Auth\AuthenticatedSessionController;
use App\Http\Controllers\Auth\PasswordResetLinkController;
use App\Http\Controllers\Auth\NewPasswordController;
use App\Http\Controllers\Auth\PasswordController;
use App\Http\Controllers\ticketController;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('Welcome');
})->name('home')->middleware('auth');

// login
Route::get("/login", [AuthenticatedSessionController::class, 'create'])->name('login');
Route::post("/login", [AuthenticatedSessionController::class, 'store']);

// register
Route::get("/register", [RegisteredUserController::class, 'create'] )->name('register');
Route::post("/register", [RegisteredUserController::class, 'store']);

// logout
Route::post("/logout", [AuthenticatedSessionController::class, 'destroy'])->name('logout');

// DASHBOARD
Route::get("/dashboard", function() {
    return Inertia::render('Dashboard');
})->name('dashboard');

// DASHBOARD EDIT PROFILE
Route::get("/dashboard/profile/edit", function() {
    return Inertia::render('Profile/Edit');
})->name('profile.edit');

// USER EDIT PROFILE
Route::get("/profile/edit", function() {
    return Inertia::render('Profile/Edit');
})->name('profile.user.edit');

// UPDATE PASSWORD
Route::put("/profile/edit", [PasswordController::class, 'update'])->name('password.update');

// BUY TICKET ROUTES
Route::get("/buy_ticket", [ticketController::class, 'buyPage']);