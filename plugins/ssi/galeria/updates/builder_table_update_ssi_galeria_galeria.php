<?php namespace SSI\Galeria\Updates;

use Schema;
use October\Rain\Database\Updates\Migration;

class BuilderTableUpdateSsiGaleriaGaleria extends Migration
{
    public function up()
    {
        Schema::table('ssi_galeria_galeria', function($table)
        {
            $table->string('slug', 191);
        });
    }
    
    public function down()
    {
        Schema::table('ssi_galeria_galeria', function($table)
        {
            $table->dropColumn('slug');
        });
    }
}
