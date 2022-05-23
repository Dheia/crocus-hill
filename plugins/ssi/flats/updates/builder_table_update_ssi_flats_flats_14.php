<?php namespace SSI\Flats\Updates;

use Schema;
use October\Rain\Database\Updates\Migration;

class BuilderTableUpdateSsiFlatsFlats14 extends Migration
{
    public function up()
    {
        Schema::table('ssi_flats_flats', function($table)
        {
            $table->integer('loggia')->nullable();
        });
    }
    
    public function down()
    {
        Schema::table('ssi_flats_flats', function($table)
        {
            $table->dropColumn('loggia');
        });
    }
}
