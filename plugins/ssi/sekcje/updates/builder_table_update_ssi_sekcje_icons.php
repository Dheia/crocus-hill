<?php namespace SSI\Sekcje\Updates;

use Schema;
use October\Rain\Database\Updates\Migration;

class BuilderTableUpdateSsiSekcjeIcons extends Migration
{
    public function up()
    {
        Schema::table('ssi_sekcje_icons', function($table)
        {
            $table->text('icons_set');
        });
    }
    
    public function down()
    {
        Schema::table('ssi_sekcje_icons', function($table)
        {
            $table->dropColumn('icons_set');
        });
    }
}
