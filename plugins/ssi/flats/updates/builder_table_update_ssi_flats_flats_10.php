<?php namespace SSI\Flats\Updates;

use Schema;
use October\Rain\Database\Updates\Migration;

class BuilderTableUpdateSsiFlatsFlats10 extends Migration
{
    public function up()
    {
        Schema::table('ssi_flats_flats', function($table)
        {
            $table->integer('parking')->nullable();
        });
    }
    
    public function down()
    {
        Schema::table('ssi_flats_flats', function($table)
        {
            $table->dropColumn('parking');
        });
    }
}
