<?php

namespace App\Http\Controllers;

use App\Models\Food;
use Illuminate\Http\Request;

class FoodController extends Controller
{
    public function addFood(Request $request){
        $request->validate([
            'name' => 'required|string',
            'price' => 'numeric|required'
        ]);
        
        $image = $request->image;
        $imageName = time() . '.' . $image->getClientOriginalExtension();
        $image->move(public_path('images'), $imageName);
    
        $food = Food::create([
            'name' => $request->name,
            'image' => $imageName, 
            'price' => $request->price,
        ]);
        return response()->json([
            'data' => $food,
            'message' => 'Data uploaded'
        ]);
    }

    public function deleteFood($id){
        $food = Food::find($id);

        $imagePath = public_path('images/' . $food->image);
        if (file_exists($imagePath)) {
            unlink($imagePath);
        }
        $food->delete();
        return response()->json([
            'message' => 'Delete'
]);
    }
    public function getFood(){
        $food = Food::latest()->get();
      
        return response()->json([
            'data' => $food,
        ]);
    }
}