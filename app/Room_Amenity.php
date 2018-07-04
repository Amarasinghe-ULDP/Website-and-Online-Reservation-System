<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Room_Amenity extends Model
{
    //
    /**
     * The table associated with the model.
     *
     * @var string
     */
    protected $table = 'room_amenities';

    protected $fillable = array('name');

    public function selected_room_amenties()
    {
        return $this->belongsTo('App\Selected_Room_Amenity');
    }
}
