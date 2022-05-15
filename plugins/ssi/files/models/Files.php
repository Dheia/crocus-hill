<?php namespace SSI\Files\Models;

use Model;

/**
 * Model
 */
class Files extends Model
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
    public $table = 'ssi_files_';

    protected $jsonable = ['files'];

    /**
     * @var array Validation rules
     */
    public $rules = [
    ];
}
