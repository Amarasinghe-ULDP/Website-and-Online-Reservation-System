<?php

namespace App\Http\Controllers;

use App\Customer;
use App\Mail\SendReservationMail;
use App\Reservation;
use App\Reserved_Room;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Input;
use Illuminate\Support\Facades\Mail;

class RegistrationController extends Controller
{
    //
    public function getRegistrationView($id, $start, $end)
    {
        return view('navigation/registration_view', ["roomid" => $id, "start" => $start, "end" => $end]);
    }

    public function registration()
    {
        $input = Input::all();

        $saveCustomer = $this->saveCustomer($input);
        $price = $this->generateTotalPrice($input['roomid'], $input["noPeople"]);
        $saveReservation = $this->saveReservation($input, $price,$saveCustomer);
        $reserveRoom = $this->reserveRoom($input['roomid'], $saveReservation);

        if (!$saveCustomer || !$reserveRoom || $saveReservation) {
            //return view('navigation/registration_view', ["roomid" => $input['roomid']]);
        }

        Mail::to('avishkacooray@gmail.com')->send(new SendReservationMail($input,$price));
        Mail::to($input["email"])->send(new SendReservationMail($input,$price));

        return view('navigation/payment');

    }

    public function saveCustomer($input)
    {
        $customer = new Customer();
        $customer->name = $input['name'];
        $customer->email = $input['email'];
        $customer->nic = $input['nic'];
        $customer->street_no = $input['street-number'];
        $customer->street = $input['street'];
        $customer->city = $input['city'];
        $customer->zip_code = $input['post-code'];
        $customer->country = $input['country'];
        $customer->contact = $input['phone'];
        $customer->save();
        if (!$customer) {
            return false;
        }
        return $customer->id;
    }

    public function saveReservation($input, $price, $customer_id)
    {
        $reservation = new Reservation();
        $reservation->arrival = $input['start'];
        $reservation->departure = $input['end'];
        $reservation->adults = $input['noPeople'];
        $reservation->child = $input['noChildren'];
        $reservation->status = 1;
        $reservation->price = $price;
        $reservation->comment = $input['comments'];
        $reservation->customer_id = $customer_id;
        $reservation->save();
        if (!$reservation) {
            return false;
        }
        return $reservation->id;
    }

    public function reserveRoom($roomid, $reservationid)
    {
        $reserveRoom = new Reserved_Room();
        $reserveRoom->room_id = $roomid;
        $reserveRoom->reservation_id = $reservationid;
        $reserveRoom->save();
        if (!$reserveRoom) {
            return false;
        }
        return true;
    }

    public function generateTotalPrice($roomid, $adults)
    {
        $roomPrice = $this->getRoomPrice($roomid);

        $balanceRoom = $adults % 2;
        $balancePrice = 0;
        if ($balanceRoom != 0) {
            $balancePrice = 1;
        }
        $noRooms = $adults / 2 + $balancePrice;
        $total = $noRooms * $roomPrice[0]->rate;
        return $total;
    }

    public function getRoomPrice($roomid)
    {
        return DB::table('rooms')
            ->select('rate')
            ->where('id', '=', $roomid)
            ->get();;
    }

    public function stringToDate($string)
    {
        $time = strtotime($string);
        $newformat = date('d/m/Y', $time);
        return $newformat;
    }
}
