<?php namespace SSI\Sekcje\Updates;

use Schema;
use October\Rain\Database\Updates\Migration;

class BuilderTableCreateSsiSekcjeIcons extends Migration
{
    public function up()
    {
        Schema::create('ssi_sekcje_icons', function($table)
        {
            $table->engine = 'InnoDB';
            $table->increments('id')->unsigned();
            $table->text('description');
        });
    }
    
    public function down()
    {
        Schema::dropIfExists('ssi_sekcje_icons');
    }
}
