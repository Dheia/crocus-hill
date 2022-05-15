<?php namespace SSI\Sekcje\Updates;

use Schema;
use October\Rain\Database\Updates\Migration;

class BuilderTableUpdateSsiSekcjeIcons5 extends Migration
{
    public function up()
    {
        Schema::table('ssi_sekcje_icons', function($table)
        {
            $table->dropColumn('description');
        });
    }
    
    public function down()
    {
        Schema::table('ssi_sekcje_icons', function($table)
        {
            $table->text('description');
        });
    }
}
