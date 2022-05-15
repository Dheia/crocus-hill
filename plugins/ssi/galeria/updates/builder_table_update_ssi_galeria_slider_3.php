<?php namespace SSI\Galeria\Updates;

use Schema;
use October\Rain\Database\Updates\Migration;

class BuilderTableUpdateSsiGaleriaSlider3 extends Migration
{
    public function up()
    {
        Schema::table('ssi_galeria_slider', function($table)
        {
            $table->string('padding', 10)->nullable(false)->unsigned(false)->default(null)->change();
        });
    }
    
    public function down()
    {
        Schema::table('ssi_galeria_slider', function($table)
        {
            $table->integer('padding')->nullable(false)->unsigned(false)->default(null)->change();
        });
    }
}
