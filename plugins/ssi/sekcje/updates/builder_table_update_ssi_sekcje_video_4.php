<?php namespace SSI\Sekcje\Updates;

use Schema;
use October\Rain\Database\Updates\Migration;

class BuilderTableUpdateSsiSekcjeVideo4 extends Migration
{
    public function up()
    {
        Schema::table('ssi_sekcje_video', function($table)
        {
            $table->dropColumn('height');
            $table->dropColumn('width');
        });
    }
    
    public function down()
    {
        Schema::table('ssi_sekcje_video', function($table)
        {
            $table->string('height', 255)->default('35');
            $table->string('width', 255)->default('100');
        });
    }
}
