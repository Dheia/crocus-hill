<?php namespace SSI\Sekcje\Updates;

use Schema;
use October\Rain\Database\Updates\Migration;

class BuilderTableUpdateSsiSekcjeTextAndImage4 extends Migration
{
    public function up()
    {
        Schema::table('ssi_sekcje_text_and_image', function($table)
        {
            $table->integer('form')->nullable();
            $table->boolean('extra')->nullable()->change();
        });
    }
    
    public function down()
    {
        Schema::table('ssi_sekcje_text_and_image', function($table)
        {
            $table->dropColumn('form');
            $table->boolean('extra')->nullable(false)->change();
        });
    }
}
