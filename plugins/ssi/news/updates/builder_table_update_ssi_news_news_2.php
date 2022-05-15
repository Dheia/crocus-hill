<?php namespace SSI\News\Updates;

use Schema;
use October\Rain\Database\Updates\Migration;

class BuilderTableUpdateSsiNewsNews2 extends Migration
{
    public function up()
    {
        Schema::table('ssi_news_news', function($table)
        {
            $table->dropColumn('published_at');
        });
    }
    
    public function down()
    {
        Schema::table('ssi_news_news', function($table)
        {
            $table->timestamp('published_at')->default('0000-00-00 00:00:00');
        });
    }
}
