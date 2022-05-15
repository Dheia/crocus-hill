<?php namespace SSI\Sekcje\Updates;

use Schema;
use October\Rain\Database\Updates\Migration;

class BuilderTableUpdateSsiSekcjeIcons4 extends Migration
{
    public function up()
    {
        Schema::table('ssi_sekcje_icons', function($table)
        {
            $table->text('description')->default('none')->change();
        });
    }
    
    public function down()
    {
        Schema::table('ssi_sekcje_icons', function($table)
        {
            $table->text('description')->default(null)->change();
        });
    }
}
