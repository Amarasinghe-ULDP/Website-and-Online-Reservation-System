<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateReservedRoomsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('reserved_rooms', function (Blueprint $table) {
            $table->increments('id');
            $table->unsignedInteger('room_id')->default(null);
            $table->foreign('room_id')->references('id')->on('rooms');
            $table->unsignedInteger('reservation_id')->default(null);
            $table->foreign('reservation_id')->references('id')->on('reservations');
            $table->enum('action', [1, 2, 3]);
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
        Schema::dropIfExists('reserved_rooms');
    }
}
