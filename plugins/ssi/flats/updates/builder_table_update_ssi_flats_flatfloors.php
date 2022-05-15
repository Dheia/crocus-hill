<?php namespace SSI\Flats\Updates;

use Schema;
use October\Rain\Database\Updates\Migration;

class BuilderTableUpdateSsiFlatsFlatfloors extends Migration
{
    public function up()
    {
        Schema::table('ssi_flats_flatfloors', function($table)
        {
            $table->string('name', 191)->nullable(false)->change();
        });
    }
    
    public function down()
    {
        Schema::table('ssi_flats_flatfloors', function($table)
        {
            $table->string('name', 191)->nullable()->change();
        });
    }
}
