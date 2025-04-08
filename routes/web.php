<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Auth\RegisteredUserController;
use App\Http\Controllers\Auth\AuthenticatedSessionController;
use App\Http\Controllers\Auth\PasswordResetLinkController;
use App\Http\Controllers\Auth\NewPasswordController;
use App\Http\Controllers\Auth\PasswordController;
use App\Http\Controllers\ticketController;
use App\Http\Controllers\dashboardController;
use App\Models\Order;
use App\Models\Reciept;
use Inertia\Inertia;
use Illuminate\Support\Facades\Auth;

Route::get('/', function () {
    $userId = auth()->user()->id;
    $bought = Order::where('id_user',$userId)->exists();
    $paid = Reciept::where('id_user', $userId)->exists();    

    $orderAttendence = Order::where('id_user', $userId)->pluck("attendence");

    return Inertia::render('Welcome', [
        'success' => session('success'),
        'notAttend' => session('notAttend'),
        'bought' => $bought,
        'paid' => $paid,
        'orderAttendence' => $orderAttendence
    ]);
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
Route::get("/dashboard", [dashboardController::class, 'index'])->name('dashboard');

// DASHBOOARD -> USERSS
Route::get('/dashboard/users', [dashboardController::class, 'users'])->name('dashboard.users');

// DASHBOARD -> ORDERS
Route::get('/dashboard/orders', [dashboardController::class, 'orders'])->name('dashboard.orders');
Route::put('/dashboard/update/{id}', [dashboardController::class, 'update']);
Route::put('/dashboard/add/{id}', [dashboardController::class, 'add']);

// DASHBOARD -> PAYMENTS
Route::get('/dashboard/payments', [dashboardController::class, 'paymentsPage'])->name('paymentsPage');

// DASHBOARD EDIT PROFILE
Route::get("/dashboard/profile/edit", function() {
    return Inertia::render('Profile/Edit');
})->name('profile.edit');

// USER EDIT PROFILE
Route::get("/profile/edit", function() {
    return Inertia::render('Profile/Edit', [
        'success' => session('success')
    ]);
})->name('profile.user.edit');

// UPDATE PASSWORD
Route::put("/profile/edit", [PasswordController::class, 'update'])->name('password.update');

// BUY TICKET ROUTES
Route::get("/buy_ticket", [ticketController::class, 'buyPage']);
Route::post('/buy_ticket', [ticketController::class, 'order'])->name('order');

// Payment 
Route::get('/payment', [ticketController::class, 'paymentPage'])->name('paymentPage');
Route::post('/payment', [ticketController::class, 'upload'])->name('payment');