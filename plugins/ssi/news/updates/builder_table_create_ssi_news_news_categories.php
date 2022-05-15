<?php namespace SSI\News\Updates;

use Schema;
use October\Rain\Database\Updates\Migration;

class BuilderTableCreateSsiNewsNewsCategories extends Migration
{
    public function up()
    {
        Schema::create('ssi_news_news_categories', function($table)
        {
            $table->engine = 'InnoDB';
            $table->integer('news_id');
            $table->integer('category_id');
        });
    }
    
    public function down()
    {
        Schema::dropIfExists('ssi_news_news_categories');
    }
}
