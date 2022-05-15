<?php namespace SSI\Flats\Updates;

use Schema;
use October\Rain\Database\Updates\Migration;

class BuilderTableUpdateSsiFlatsGarages3 extends Migration
{
    public function up()
    {
        Schema::table('ssi_flats_garages', function($table)
        {
            $table->string('status')->nullable();
        });
    }
    
    public function down()
    {
        Schema::table('ssi_flats_garages', function($table)
        {
            $table->dropColumn('status');
        });
    }
}
