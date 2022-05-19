<?php namespace SSI\Sekcje\Updates;

use Schema;
use October\Rain\Database\Updates\Migration;

class BuilderTableUpdateSsiSekcjeTextAndImage2 extends Migration
{
    public function up()
    {
        Schema::table('ssi_sekcje_text_and_image', function($table)
        {
            $table->text('slider')->nullable();
        });
    }
    
    public function down()
    {
        Schema::table('ssi_sekcje_text_and_image', function($table)
        {
            $table->dropColumn('slider');
        });
    }
}
