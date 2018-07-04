<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Selected_Room_Amenity extends Model
{
    //
    /**
     * The table associated with the model.
     *
     * @var string
     */
    protected $table = 'selected_room_amenities';

   // protected $fillable = array('action');

    public function rooms()
    {
        return $this->belongsTo('App\Room');
    }

    public function room_amenties()
    {
        return $this->hasMany('App\Room_Amenity');
    }
}
