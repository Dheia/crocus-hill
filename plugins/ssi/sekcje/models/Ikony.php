<?php namespace SSI\Sekcje\Models;

use Model;

/**
 * Model
 */
class Ikony extends Model
{
    use \October\Rain\Database\Traits\Validation;
    
    /*
     * Disable timestamps by default.
     * Remove this line if timestamps are defined in the database table.
     */
    public $timestamps = false;

    protected $jsonable = ['icons_set'];

    /**
     * @var string The database table used by the model.
     */
    public $table = 'ssi_sekcje_icons';

    /**
     * @var array Validation rules
     */
    public $rules = [
    ];

    public $attachMany = [
        'img' => 'System\Models\File'
    ];
}
