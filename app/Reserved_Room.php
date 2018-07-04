<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Reserved_Room extends Model
{
    //
    /**
     * The table associated with the model.
     *
     * @var string
     */
    protected $table = 'reserved_rooms';

    protected $fillable = array('room_id','reservation_id','action');

    public function rooms()
    {
        return $this->belongsTo('App\Room');
    }

    public function reservations()
    {
        return $this->belongsTo('App\Reservation');
    }
}
