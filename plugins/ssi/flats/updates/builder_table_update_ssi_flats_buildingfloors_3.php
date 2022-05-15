<?php namespace SSI\Flats\Updates;

use Schema;
use October\Rain\Database\Updates\Migration;

class BuilderTableUpdateSsiFlatsBuildingfloors3 extends Migration
{
    public function up()
    {
        Schema::table('ssi_flats_buildingfloors', function($table)
        {
            $table->string('floor')->nullable();
        });
    }
    
    public function down()
    {
        Schema::table('ssi_flats_buildingfloors', function($table)
        {
            $table->dropColumn('floor');
        });
    }
}
