<?php namespace SSI\Galeria\Updates;

use Schema;
use October\Rain\Database\Updates\Migration;

class BuilderTableUpdateSsiGaleriaGaleria2 extends Migration
{
    public function up()
    {
        Schema::table('ssi_galeria_galeria', function($table)
        {
            $table->integer('sort_order')->default(0);
        });
    }
    
    public function down()
    {
        Schema::table('ssi_galeria_galeria', function($table)
        {
            $table->dropColumn('sort_order');
        });
    }
}
