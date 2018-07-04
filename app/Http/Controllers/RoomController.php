<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class RoomController extends Controller
{
    public function getRoomView()
    {
        $rooms = DB::table('rooms')->get();
        return view('navigation/rooms', ['rooms' => $rooms]);
    }
}
