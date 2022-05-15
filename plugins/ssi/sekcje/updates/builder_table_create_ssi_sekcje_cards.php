<?php namespace SSI\Sekcje\Updates;

use Schema;
use October\Rain\Database\Updates\Migration;

class BuilderTableCreateSsiSekcjeCards extends Migration
{
    public function up()
    {
        Schema::create('ssi_sekcje_cards', function($table)
        {
            $table->engine = 'InnoDB';
            $table->increments('id')->unsigned();
            $table->text('cards_set');
            $table->string('img_src');
            $table->string('tittle');
            $table->string('description');
            $table->string('link');
            $table->string('name');
        });
    }
    
    public function down()
    {
        Schema::dropIfExists('ssi_sekcje_cards');
    }
}
