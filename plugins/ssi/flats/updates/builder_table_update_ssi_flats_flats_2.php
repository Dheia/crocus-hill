<?php namespace SSI\Flats\Updates;

use Schema;
use October\Rain\Database\Updates\Migration;

class BuilderTableUpdateSsiFlatsFlats2 extends Migration
{
    public function up()
    {
        Schema::table('ssi_flats_flats', function($table)
        {
            $table->integer('building_id')->nullable();
            $table->integer('floor_id')->nullable();
            $table->dropColumn('building');
            $table->dropColumn('floor');
        });
    }
    
    public function down()
    {
        Schema::table('ssi_flats_flats', function($table)
        {
            $table->dropColumn('building_id');
            $table->dropColumn('floor_id');
            $table->string('building', 191)->nullable();
            $table->string('floor', 191)->nullable();
        });
    }
}
