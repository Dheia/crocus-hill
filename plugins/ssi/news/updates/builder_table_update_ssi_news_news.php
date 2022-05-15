<?php namespace SSI\News\Updates;

use Schema;
use October\Rain\Database\Updates\Migration;

class BuilderTableUpdateSsiNewsNews extends Migration
{
    public function up()
    {
        Schema::table('ssi_news_news', function($table)
        {
            $table->timestamp('published_at');
            $table->renameColumn('main_image_show', 'show_main_image');
        });
    }
    
    public function down()
    {
        Schema::table('ssi_news_news', function($table)
        {
            $table->dropColumn('published_at');
            $table->renameColumn('show_main_image', 'main_image_show');
        });
    }
}
