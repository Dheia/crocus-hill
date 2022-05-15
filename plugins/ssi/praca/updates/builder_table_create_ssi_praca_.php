<?php namespace Ssi\Praca\Updates;

use Schema;
use October\Rain\Database\Updates\Migration;

class BuilderTableCreateSsiPraca extends Migration
{
    public function up()
    {
        Schema::create('ssi_praca_', function($table)
        {
            $table->engine = 'InnoDB';
            $table->increments('id')->unsigned();
            $table->timestamp('created_at')->nullable();
            $table->timestamp('updated_at')->nullable();
            $table->timestamp('deleted_at')->nullable();
            $table->string('title');
            $table->text('description');
            $table->boolean('status');
        });
    }
    
    public function down()
    {
        Schema::dropIfExists('ssi_praca_');
    }
}
