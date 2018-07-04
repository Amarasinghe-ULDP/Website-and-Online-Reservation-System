<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateRoomTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('rooms', function (Blueprint $table) {
            $table->increments('id');
            $table->string('type')->default(null);
            $table->integer('rate')->default(null);
            $table->string('description',300)->default(null);
            $table->text('description_large')->default(null);
            $table->longText('image')->default(null);
            $table->integer('qty')->default(null);
            $table->integer('max_adult')->default(null);
            $table->integer('max_child')->default(null);
            $table->string('bed')->default(null);
            $table->string('view')->default(null);
            $table->integer('sqm')->default(null);
            $table->unsignedInteger('user_id')->default(null);
            $table->foreign('user_id')->references('id')->on('users');
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
        Schema::dropIfExists('rooms');
    }
}
