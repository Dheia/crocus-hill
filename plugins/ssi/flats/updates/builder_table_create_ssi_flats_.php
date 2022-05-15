<?php namespace SSI\Flats\Updates;

use Schema;
use October\Rain\Database\Updates\Migration;

class BuilderTableCreateSsiFlats extends Migration
{
    public function up()
    {
        Schema::create('ssi_flats_', function($table)
        {
            $table->engine = 'InnoDB';
            $table->increments('id')->unsigned();
            $table->string('name');
            $table->double('area', 10, 0)->nullable();
            $table->double('all_area', 10, 0)->nullable();
            $table->string('status');
            $table->integer('rooms_number')->nullable();
            $table->integer('max_rooms_number')->nullable();
            $table->double('price', 10, 0)->nullable();
            $table->double('price_for_metre', 10, 0)->nullable();
            $table->string('symbol')->nullable();
            $table->text('description')->nullable();
            $table->string('building')->nullable();
            $table->string('floor')->nullable();
            $table->string('rooms')->nullable();
        });
    }
    
    public function down()
    {
        Schema::dropIfExists('ssi_flats_');
    }
}
