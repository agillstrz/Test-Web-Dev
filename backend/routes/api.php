<?php

use App\Http\Controllers\CartFoodController;
use App\Http\Controllers\FoodController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::get('food', [FoodController::class,'getFood']);
Route::post('food', [FoodController::class,'addFood']);
Route::delete('food/{id}', [FoodController::class,'deleteFood']);


Route::get('cart', [CartFoodController::class,'getCart']);
Route::post('cart', [CartFoodController::class,'addCart']);
Route::delete('cart/{id}', [CartFoodController::class,'deleteCart']);
Route::delete('cart', [CartFoodController::class,'deleteAll']);