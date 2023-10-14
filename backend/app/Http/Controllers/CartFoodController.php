<?php

namespace App\Http\Controllers;

use App\Models\CartFood;
use App\Models\Food;
use Illuminate\Http\Request;

class CartFoodController extends Controller
{
    public function addCart(Request $request){
        $cart = CartFood::where('food_id', $request->food_id)->first();
        $food = Food::where('id', $request->food_id)->first();
        if($cart){
            $cart->quantity = $cart->quantity+=1;
            $cart->save();
          
        } else{
            $cart = CartFood::create([
                'food_id' => $request->food_id,
                "quantity" => $request->quantity,
            ]);
        }
        return response()->json([
            'data' => $food,
          
            'message' => 'Data uploaded'
        ], 200);
    }

    public function deleteFood($id){
        $food = CartFood::find($id);
        $food->delete();
        return response()->json([
            'message' => 'Delete'
        ]);
    }
    public function deleteAll(){
        $food = CartFood::truncate();
        return response()->json([
            'message' => 'Delete'
        ]);
    }
    public function getCart(){
        $food = CartFood::with('food')->latest()->get();

        return response()->json([
            'data' => $food,
        ]);
    }
}