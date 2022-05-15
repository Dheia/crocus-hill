<?php namespace SSI\Galeria\Updates;

use Schema;
use October\Rain\Database\Updates\Migration;

class BuilderTableUpdateSsiGaleriaSlider2 extends Migration
{
    public function up()
    {
        Schema::table('ssi_galeria_slider', function($table)
        {
            $table->boolean('dots');
        });
    }
    
    public function down()
    {
        Schema::table('ssi_galeria_slider', function($table)
        {
            $table->dropColumn('dots');
        });
    }
}
