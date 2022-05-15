<?php namespace SSI\News\Updates;

use Schema;
use October\Rain\Database\Updates\Migration;

class BuilderTableUpdateSsiNewsNews3 extends Migration
{
    public function up()
    {
        Schema::table('ssi_news_news', function($table)
        {
            $table->timestamp('published_at')->nullable();
        });
    }
    
    public function down()
    {
        Schema::table('ssi_news_news', function($table)
        {
            $table->dropColumn('published_at');
        });
    }
}
