<?php namespace SSI\Flats\Updates;

use Schema;
use October\Rain\Database\Updates\Migration;

class BuilderTableUpdateSsiFlatsFlats extends Migration
{
    public function up()
    {
        Schema::rename('ssi_flats_', 'ssi_flats_flats');
    }
    
    public function down()
    {
        Schema::rename('ssi_flats_flats', 'ssi_flats_');
    }
}
