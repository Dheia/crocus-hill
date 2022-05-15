<?php namespace SSI\Sekcje\Updates;

use Schema;
use October\Rain\Database\Updates\Migration;

class BuilderTableUpdateSsiSekcjeVideo3 extends Migration
{
    public function up()
    {
        Schema::table('ssi_sekcje_video', function($table)
        {
            $table->string('height', 255)->default('35')->change();
            $table->string('width', 255)->default('100')->change();
        });
    }
    
    public function down()
    {
        Schema::table('ssi_sekcje_video', function($table)
        {
            $table->string('height', 255)->default(null)->change();
            $table->string('width', 255)->default(null)->change();
        });
    }
}
