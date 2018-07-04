<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class ContactController extends Controller
{
    public function getContactView(){
    	return view('navigation/contact_us');
    }
}
