<?php namespace SSI\Galeria\Updates;

use Schema;
use October\Rain\Database\Updates\Migration;

class BuilderTableUpdateSsiGaleriaSlider extends Migration
{
    public function up()
    {
        Schema::table('ssi_galeria_slider', function($table)
        {
            $table->integer('padding');
            $table->integer('rows');
            $table->integer('slide_per_rows');
            $table->string('lazy_load');
            $table->boolean('infinite');
            $table->boolean('focus_on_select');
            $table->boolean('fade');
            $table->string('css_ease');
            $table->integer('slides_to_show');
            $table->integer('slides_to_scroll');
            $table->integer('speed');
            $table->boolean('rtl');
        });
    }
    
    public function down()
    {
        Schema::table('ssi_galeria_slider', function($table)
        {
            $table->dropColumn('padding');
            $table->dropColumn('rows');
            $table->dropColumn('slide_per_rows');
            $table->dropColumn('lazy_load');
            $table->dropColumn('infinite');
            $table->dropColumn('focus_on_select');
            $table->dropColumn('fade');
            $table->dropColumn('css_ease');
            $table->dropColumn('slides_to_show');
            $table->dropColumn('slides_to_scroll');
            $table->dropColumn('speed');
            $table->dropColumn('rtl');
        });
    }
}
