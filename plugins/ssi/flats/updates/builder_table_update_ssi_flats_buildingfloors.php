<?php namespace SSI\Flats\Updates;

use Schema;
use October\Rain\Database\Updates\Migration;

class BuilderTableUpdateSsiFlatsBuildingfloors extends Migration
{
    public function up()
    {
        Schema::table('ssi_flats_buildingfloors', function($table)
        {
            $table->string('name', 191)->nullable(false)->change();
        });
    }
    
    public function down()
    {
        Schema::table('ssi_flats_buildingfloors', function($table)
        {
            $table->string('name', 191)->nullable()->change();
        });
    }
}
