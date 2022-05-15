<?php namespace SSI\Galeria\Updates;

use Schema;
use October\Rain\Database\Updates\Migration;

class BuilderTableUpdateSsiGaleriaSlider5 extends Migration
{
    public function up()
    {
        Schema::table('ssi_galeria_slider', function($table)
        {
            $table->text('slide');
        });
    }
    
    public function down()
    {
        Schema::table('ssi_galeria_slider', function($table)
        {
            $table->dropColumn('slide');
        });
    }
}
