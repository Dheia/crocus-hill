<?php namespace SSI\Sekcje\Updates;

use Schema;
use October\Rain\Database\Updates\Migration;

class BuilderTableCreateSsiSekcjeVideo extends Migration
{
    public function up()
    {
        Schema::create('ssi_sekcje_video', function($table)
        {
            $table->engine = 'InnoDB';
            $table->increments('id')->unsigned();
            $table->text('video');
        });
    }
    
    public function down()
    {
        Schema::dropIfExists('ssi_sekcje_video');
    }
}
