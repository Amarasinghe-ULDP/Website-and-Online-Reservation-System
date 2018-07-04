<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class AboutController extends Controller
{
    public function getAboutView(){
    	return view('navigation/about_us');
    }
}
