<?php namespace SSI\Flats\Updates;

use Schema;
use October\Rain\Database\Updates\Migration;

class BuilderTableCreateSsiFlatsBuildingfloors extends Migration
{
    public function up()
    {
        Schema::create('ssi_flats_buildingfloors', function($table)
        {
            $table->engine = 'InnoDB';
            $table->increments('id')->unsigned();
            $table->string('name')->nullable();
            $table->string('building')->nullable();
        });
    }
    
    public function down()
    {
        Schema::dropIfExists('ssi_flats_buildingfloors');
    }
}
