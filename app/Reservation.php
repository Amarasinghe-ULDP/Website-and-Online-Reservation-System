<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Reservation extends Model
{
   /**
     * The table associated with the model.
     *
     * @var string
     */
    protected $table = 'reservations';

    protected $fillable = array('arrival', 'departure', 'adults', 'child', 'status', 'price','comment','customer_id');

    /**
     * Get the post that owns the comment.
     */
    public function customer()
    {
        return $this->belongsTo('App\Customer');
    }

    public function reserved_rooms()
    {
        return $this->hasMany('App\Reserved_Room');
    }
}