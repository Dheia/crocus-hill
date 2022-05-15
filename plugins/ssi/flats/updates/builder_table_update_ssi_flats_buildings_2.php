<?php namespace SSI\Flats\Updates;

use Schema;
use October\Rain\Database\Updates\Migration;

class BuilderTableUpdateSsiFlatsBuildings2 extends Migration
{
    public function up()
    {
        Schema::table('ssi_flats_buildings', function($table)
        {
            $table->string('code')->nullable();
        });
    }
    
    public function down()
    {
        Schema::table('ssi_flats_buildings', function($table)
        {
            $table->dropColumn('code');
        });
    }
}
