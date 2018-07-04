<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateSelectedRoomAmenitiesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('selected_room_amenities', function (Blueprint $table) {
            $table->increments('id');
            $table->unsignedInteger('room_id')->default(null);
            $table->foreign('room_id')->references('id')->on('rooms');
            $table->unsignedInteger('room_amenity_id')->default(null);
            $table->foreign('room_amenity_id')->references('id')->on('room_amenities');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('selected_room_amenities');
    }
}
