<?php namespace SSI\Sekcje\Models;

use Model;

/**
 * Model
 */
class Video extends Model
{
    use \October\Rain\Database\Traits\Validation;
    
    /*
     * Disable timestamps by default.
     * Remove this line if timestamps are defined in the database table.
     */
    public $timestamps = false;

    protected $jsonable = ['group'];

    /**
     * @var string The database table used by the model.
     */
    public $table = 'ssi_sekcje_video';

    /**
     * @var array Validation rules
     */
    public $rules = [
    ];
}
