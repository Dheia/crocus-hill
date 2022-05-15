<?php namespace SSI\News\Updates;

use Schema;
use October\Rain\Database\Updates\Migration;

class BuilderTableCreateSsiNewsNews extends Migration
{
    public function up()
    {
        Schema::create('ssi_news_news', function($table)
        {
            $table->engine = 'InnoDB';
            $table->increments('id')->unsigned();
            $table->timestamp('created_at')->nullable();
            $table->timestamp('updated_at')->nullable();
            $table->timestamp('deleted_at')->nullable();
            $table->string('title');
            $table->text('excerpt');
            $table->text('content');
            $table->string('slug');
            $table->integer('sort_order')->default(0);
            $table->boolean('visibility')->default(1);
            $table->boolean('on_main')->default(0);
            $table->boolean('promo');
            $table->dateTime('promo_end');
            $table->string('meta_title');
            $table->text('meta_description');
            $table->boolean('main_image_show')->default(1);
        });
    }
    
    public function down()
    {
        Schema::dropIfExists('ssi_news_news');
    }
}
