<?php namespace SSI\Sekcje\Updates;

use Schema;
use October\Rain\Database\Updates\Migration;

class BuilderTableUpdateSsiSekcjeVideo extends Migration
{
    public function up()
    {
        Schema::table('ssi_sekcje_video', function($table)
        {
            $table->string('title');
        });
    }
    
    public function down()
    {
        Schema::table('ssi_sekcje_video', function($table)
        {
            $table->dropColumn('title');
        });
    }
}
