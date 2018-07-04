<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateReservationTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('reservations', function (Blueprint $table) {
            $table->increments('id');
            $table->string('arrival')->default(null);
            $table->string('departure')->default(null);
            $table->integer('adults')->default(null);
            $table->integer('child')->default(null);
            $table->string('status')->default(null);
            $table->integer('price')->default(null);
            $table->char('comment')->default(null);
            $table->unsignedInteger('customer_id')->default(null);
            $table->foreign('customer_id')->references('id')->on('customers');
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
        Schema::dropIfExists('reservations');
    }
}
