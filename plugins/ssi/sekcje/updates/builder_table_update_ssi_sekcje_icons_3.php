<?php namespace SSI\Sekcje\Updates;

use Schema;
use October\Rain\Database\Updates\Migration;

class BuilderTableUpdateSsiSekcjeIcons3 extends Migration
{
    public function up()
    {
        Schema::table('ssi_sekcje_icons', function($table)
        {
            $table->string('name');
        });
    }
    
    public function down()
    {
        Schema::table('ssi_sekcje_icons', function($table)
        {
            $table->dropColumn('name');
        });
    }
}
