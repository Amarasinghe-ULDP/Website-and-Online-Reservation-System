<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Room extends Model
{
    //
    /**
     * The table associated with the model.
     *
     * @var string
     */
    protected $table = 'rooms';

    protected $fillable = array('type', 'rate', 'description', 'description_large', 'image', 'qty', 'max_adult', 'max_child',
        'beds', 'view', 'sqm');

    public function reserved_rooms()
    {
        return $this->belongsTo('App\Reserved_Room');
    }

    public function selected_room_amenities()
    {
        return $this->hasMany('App\Selected_Room_Amenity');
    }
}
