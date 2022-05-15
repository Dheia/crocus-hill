<?php namespace SSI\Flats\Updates;

use Schema;
use October\Rain\Database\Updates\Migration;

class BuilderTableUpdateSsiFlatsBuildingfloors2 extends Migration
{
    public function up()
    {
        Schema::table('ssi_flats_buildingfloors', function($table)
        {
            $table->integer('building_id')->nullable();
            $table->dropColumn('building');
        });
    }
    
    public function down()
    {
        Schema::table('ssi_flats_buildingfloors', function($table)
        {
            $table->dropColumn('building_id');
            $table->string('building', 191)->nullable();
        });
    }
}
