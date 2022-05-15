<?php namespace SSI\Flats\Updates;

use Schema;
use October\Rain\Database\Updates\Migration;

class BuilderTableUpdateSsiFlatsRooms extends Migration
{
    public function up()
    {
        Schema::table('ssi_flats_rooms', function($table)
        {
            $table->string('name', 191)->nullable()->change();
        });
    }
    
    public function down()
    {
        Schema::table('ssi_flats_rooms', function($table)
        {
            $table->string('name', 191)->nullable(false)->change();
        });
    }
}
