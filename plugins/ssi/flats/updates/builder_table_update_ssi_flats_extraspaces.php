<?php namespace SSI\Flats\Updates;

use Schema;
use October\Rain\Database\Updates\Migration;

class BuilderTableUpdateSsiFlatsExtraspaces extends Migration
{
    public function up()
    {
        Schema::rename('ssi_flats_extraspace', 'ssi_flats_extraspaces');
    }
    
    public function down()
    {
        Schema::rename('ssi_flats_extraspaces', 'ssi_flats_extraspace');
    }
}
