<?php namespace SSI\Files\Updates;

use Schema;
use October\Rain\Database\Updates\Migration;

class BuilderTableCreateSsiFiles extends Migration
{
    public function up()
    {
        Schema::create('ssi_files_', function($table)
        {
            $table->engine = 'InnoDB';
            $table->increments('id')->unsigned();
            $table->string('name');
            $table->text('files')->nullable();
        });
    }
    
    public function down()
    {
        Schema::dropIfExists('ssi_files_');
    }
}
