<?php namespace SSI\Flats\Updates;

use Schema;
use October\Rain\Database\Updates\Migration;

class BuilderTableCreateSsiFlatsBuildings extends Migration
{
    public function up()
    {
        Schema::create('ssi_flats_buildings', function($table)
        {
            $table->engine = 'InnoDB';
            $table->increments('id')->unsigned();
            $table->string('name')->nullable();
        });
    }
    
    public function down()
    {
        Schema::dropIfExists('ssi_flats_buildings');
    }
}
