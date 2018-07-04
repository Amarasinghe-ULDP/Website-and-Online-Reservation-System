<?php

namespace App\Mail;

use Illuminate\Bus\Queueable;
use Illuminate\Mail\Mailable;
use Illuminate\Queue\SerializesModels;
use Illuminate\Contracts\Queue\ShouldQueue;

class SendReservationMail extends Mailable
{
    use Queueable, SerializesModels;

    public $data;
    public $price;

    public function __construct($data,$price)
    {
        $this->data = $data;
        $this->price = $price;
    }

    public function build()
    {
        $address = 'reservation@aminvavilla.com';
        $subject = 'Aminva Villa - Reservation Details';
        $name = 'Aminva Villa';

        return $this->view('emails.reservation')
            ->from($address, $name)
            ->cc($address, $name)
            ->bcc($address, $name)
            ->replyTo($address, $name)
            ->subject($subject)
            ->with(['data'=> $this->data, 'price'=>$this->price]);
    }
}
