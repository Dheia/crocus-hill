<?php namespace SSI\Sekcje\Updates;

use Schema;
use October\Rain\Database\Updates\Migration;

class BuilderTableUpdateSsiSekcjeVideo2 extends Migration
{
    public function up()
    {
        Schema::table('ssi_sekcje_video', function($table)
        {
            $table->string('height');
            $table->string('width');
        });
    }
    
    public function down()
    {
        Schema::table('ssi_sekcje_video', function($table)
        {
            $table->dropColumn('height');
            $table->dropColumn('width');
        });
    }
}
