<?php namespace SSI\Galeria\Updates;

use Schema;
use October\Rain\Database\Updates\Migration;

class BuilderTableCreateSsiGaleriaSlider extends Migration
{
    public function up()
    {
        Schema::create('ssi_galeria_slider', function($table)
        {
            $table->engine = 'InnoDB';
            $table->increments('id')->unsigned();
            $table->timestamp('created_at')->nullable();
            $table->timestamp('updated_at')->nullable();
            $table->timestamp('deleted_at')->nullable();
            $table->boolean('autoplay');
            $table->integer('autoplay_speed');
            $table->boolean('pause_on_focus');
            $table->boolean('pause_on_hover');
            $table->boolean('pause_on_dots');
            $table->boolean('arrows');
            $table->string('append_arrows');
            $table->string('prev_arrow');
            $table->string('next_arrow');
            $table->boolean('adaptive_height');
            $table->integer('z_index');
            $table->boolean('variable_width');
            $table->boolean('swipe_to_slide');
            $table->string('append_dots');
            $table->boolean('center_mode');
        });
    }
    
    public function down()
    {
        Schema::dropIfExists('ssi_galeria_slider');
    }
}
