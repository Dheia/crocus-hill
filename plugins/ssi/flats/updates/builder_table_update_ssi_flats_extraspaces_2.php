<?php namespace SSI\Flats\Updates;

use Schema;
use October\Rain\Database\Updates\Migration;

class BuilderTableUpdateSsiFlatsExtraspaces2 extends Migration
{
    public function up()
    {
        Schema::table('ssi_flats_extraspaces', function($table)
        {
            $table->text('name')->nullable(false)->unsigned(false)->default(null)->change();
        });
    }
    
    public function down()
    {
        Schema::table('ssi_flats_extraspaces', function($table)
        {
            $table->string('name', 191)->nullable(false)->unsigned(false)->default(null)->change();
        });
    }
}
