<?php namespace SSI\Sekcje\Updates;

use Schema;
use October\Rain\Database\Updates\Migration;

class BuilderTableUpdateSsiSekcjeIcons2 extends Migration
{
    public function up()
    {
        Schema::table('ssi_sekcje_icons', function($table)
        {
            $table->string('img_src');
        });
    }
    
    public function down()
    {
        Schema::table('ssi_sekcje_icons', function($table)
        {
            $table->dropColumn('img_src');
        });
    }
}
