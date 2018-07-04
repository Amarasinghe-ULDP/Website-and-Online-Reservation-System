<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Input;

class ReservationController extends Controller
{
    public function getRoomsAvailability()
    {
        $input = Input::all();
        $start = $this->stringToDate($input['start']);
        $end = $this->stringToDate($input['end']);

        $availableRooms = DB::table('rooms')
            ->whereNotIn('rooms.id',function($query) use ($start,$end) {
                $query->select('rooms.id')->from('rooms')
                    ->join('reserved_rooms', 'rooms.id', '=', 'reserved_rooms.room_id')
                    ->join('reservations', 'reserved_rooms.reservation_id', '=', 'reservations.id')
                    ->where('reservations.arrival', '<=', $end)
                    ->where('reservations.departure', '>=', $start);
            })->get();

        return view('navigation/available_rooms', ["availableRooms" => $availableRooms, "start"=>$start, "end"=>$end]);
    }

    public function stringToDate($string)
    {
        $time = strtotime($string);
        $newformat = date('d-m-Y', $time);
        return $newformat;
    }
}
