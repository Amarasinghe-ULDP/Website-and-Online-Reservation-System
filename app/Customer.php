<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Customer extends Model
{
    /**
     * The table associated with the model.
     *
     * @var string
     */
    protected $table = 'customers';

    protected $fillable = array('name', 'email', 'nic', 'street_no', 'street', 'city', 'zip_code', 'country', 'contact');

    /**
     * Get the comments for the blog post.
     */
    public function reservations()
    {
        return $this->hasMany('App\Reservation');
    }
}
