<?php namespace SSI\Flats\Updates;

use Schema;
use October\Rain\Database\Updates\Migration;

class BuilderTableUpdateSsiFlatsFlats4 extends Migration
{
    public function up()
    {
        Schema::table('ssi_flats_flats', function($table)
        {
            $table->text('rooms')->nullable()->unsigned(false)->default(null)->change();
        });
    }
    
    public function down()
    {
        Schema::table('ssi_flats_flats', function($table)
        {
            $table->string('rooms', 191)->nullable()->unsigned(false)->default(null)->change();
        });
    }
}
