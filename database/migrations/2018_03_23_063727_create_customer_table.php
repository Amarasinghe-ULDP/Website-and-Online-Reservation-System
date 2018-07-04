<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateCustomerTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('customers', function (Blueprint $table) {
            $table->increments('id');
            $table->string('name')->default(null);
            $table->string('email')->default(null);
            $table->string('nic',20)->default(null);
            $table->string('street_no')->default(null);
            $table->string('street')->default(null);
            $table->string('city')->default(null);
            $table->string('zip_code')->default(null);
            $table->text('country')->default(null);
            $table->integer('contact')->default(null);
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
        Schema::dropIfExists('customers');
    }
}
