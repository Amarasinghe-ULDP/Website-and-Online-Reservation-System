<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class AmenitiesController extends Controller
{
    public function getAmenityView(){
        $amenities = DB::table('amenities')->get();
    	return view('navigation/amenities',['amenities'=>$amenities]);
    }
}
