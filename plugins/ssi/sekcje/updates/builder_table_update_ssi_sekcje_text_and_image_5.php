<?php namespace SSI\Sekcje\Updates;

use Schema;
use October\Rain\Database\Updates\Migration;

class BuilderTableUpdateSsiSekcjeTextAndImage5 extends Migration
{
    public function up()
    {
        Schema::table('ssi_sekcje_text_and_image', function($table)
        {
            $table->string('description2')->nullable();
            $table->text('h2')->nullable();
        });
    }
    
    public function down()
    {
        Schema::table('ssi_sekcje_text_and_image', function($table)
        {
            $table->dropColumn('description2');
            $table->dropColumn('h2');
        });
    }
}
