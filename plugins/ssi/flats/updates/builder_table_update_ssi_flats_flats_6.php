<?php namespace SSI\Flats\Updates;

use Schema;
use October\Rain\Database\Updates\Migration;

class BuilderTableUpdateSsiFlatsFlats6 extends Migration
{
    public function up()
    {
        Schema::table('ssi_flats_flats', function($table)
        {
            $table->text('extra_spaces')->nullable()->change();
        });
    }
    
    public function down()
    {
        Schema::table('ssi_flats_flats', function($table)
        {
            $table->text('extra_spaces')->nullable(false)->change();
        });
    }
}
