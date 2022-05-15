<?php namespace SSI\Galeria\Updates;

use Schema;
use October\Rain\Database\Updates\Migration;

class BuilderTableCreateSsiGaleriaGaleria extends Migration
{
    public function up()
    {
        Schema::create('ssi_galeria_galeria', function($table)
        {
            $table->engine = 'InnoDB';
            $table->increments('id')->unsigned();
            $table->timestamp('created_at')->nullable();
            $table->timestamp('updated_at')->nullable();
            $table->timestamp('deleted_at')->nullable();
            $table->string('name', 20);
        });
    }
    
    public function down()
    {
        Schema::dropIfExists('ssi_galeria_galeria');
    }
}
