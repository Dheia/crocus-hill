<?php namespace SSI\News\Updates;

use Schema;
use October\Rain\Database\Updates\Migration;

class BuilderTableUpdateSsiNewsNews4 extends Migration
{
    public function up()
    {
        Schema::table('ssi_news_news', function($table)
        {
            $table->dateTime('promo_end')->nullable()->change();
        });
    }
    
    public function down()
    {
        Schema::table('ssi_news_news', function($table)
        {
            $table->dateTime('promo_end')->nullable(false)->change();
        });
    }
}
