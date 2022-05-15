<?php namespace SSI\Sekcje\Updates;

use Schema;
use October\Rain\Database\Updates\Migration;

class BuilderTableCreateSsiSekcjeTextAndImage extends Migration
{
    public function up()
    {
        Schema::create('ssi_sekcje_text_and_image', function($table)
        {
            $table->engine = 'InnoDB';
            $table->increments('id')->unsigned();
            $table->string('name');
            $table->text('description');
            $table->string('button_name')->nullable();
            $table->string('button_link')->nullable();
        });
    }
    
    public function down()
    {
        Schema::dropIfExists('ssi_sekcje_text_and_image');
    }
}
