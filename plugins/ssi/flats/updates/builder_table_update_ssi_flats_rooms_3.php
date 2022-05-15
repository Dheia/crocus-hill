<?php namespace SSI\Flats\Updates;

use Schema;
use October\Rain\Database\Updates\Migration;

class BuilderTableUpdateSsiFlatsRooms3 extends Migration
{
    public function up()
    {
        Schema::table('ssi_flats_rooms', function($table)
        {
            $table->integer('floor_id')->nullable();
        });
    }
    
    public function down()
    {
        Schema::table('ssi_flats_rooms', function($table)
        {
            $table->dropColumn('floor_id');
        });
    }
}
