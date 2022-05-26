<?php namespace SSI\Sekcje\Updates;

use Schema;
use October\Rain\Database\Updates\Migration;

class BuilderTableUpdateSsiSekcjeTextAndImage7 extends Migration
{
    public function up()
    {
        Schema::table('ssi_sekcje_text_and_image', function($table)
        {
            $table->text('description2')->nullable()->unsigned(false)->default(null)->change();
        });
    }
    
    public function down()
    {
        Schema::table('ssi_sekcje_text_and_image', function($table)
        {
            $table->string('description2', 255)->nullable()->unsigned(false)->default(null)->change();
        });
    }
}
