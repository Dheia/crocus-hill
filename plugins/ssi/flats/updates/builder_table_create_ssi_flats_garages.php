<?php namespace SSI\Flats\Updates;

use Schema;
use October\Rain\Database\Updates\Migration;

class BuilderTableCreateSsiFlatsGarages extends Migration
{
    public function up()
    {
        Schema::create('ssi_flats_garages', function($table)
        {
            $table->engine = 'InnoDB';
            $table->increments('id')->unsigned();
            $table->string('name')->nullable();
            $table->double('area', 10, 0)->nullable();
            $table->string('building')->nullable();
        });
    }
    
    public function down()
    {
        Schema::dropIfExists('ssi_flats_garages');
    }
}
