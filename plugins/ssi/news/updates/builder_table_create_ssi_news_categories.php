<?php namespace SSI\News\Updates;

use Schema;
use October\Rain\Database\Updates\Migration;

class BuilderTableCreateSsiNewsCategories extends Migration
{
    public function up()
    {
        Schema::create('ssi_news_categories', function($table)
        {
            $table->engine = 'InnoDB';
            $table->increments('id')->unsigned();
            $table->string('name');
            $table->string('slug');
            $table->integer('sort_order')->default(0);
        });
    }
    
    public function down()
    {
        Schema::dropIfExists('ssi_news_categories');
    }
}
