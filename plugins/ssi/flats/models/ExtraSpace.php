<?php namespace SSI\Flats\Models;

use Model;

/**
 * Model
 */
class ExtraSpace extends Model
{
    use \October\Rain\Database\Traits\Validation;
    
    /*
     * Disable timestamps by default.
     * Remove this line if timestamps are defined in the database table.
     */
    public $timestamps = false;


    /**
     * @var string The database table used by the model.
     */
    public $table = 'ssi_flats_extraspaces';

    /**
     * @var array Validation rules
     */
    public $rules = [
    ];
}
