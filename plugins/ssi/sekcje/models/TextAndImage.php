<?php namespace SSI\Sekcje\Models;

use Model;

/**
 * Model
 */
class TextAndImage extends Model
{
    use \October\Rain\Database\Traits\Validation;
    
    /*
     * Disable timestamps by default.
     * Remove this line if timestamps are defined in the database table.
     */
    public $timestamps = false;

    public $attachMany = [
        'img' => 'System\Models\File'
    ];

    /**
     * @var string The database table used by the model.
     */
    public $table = 'ssi_sekcje_text_and_image';

    /**
     * @var array Validation rules
     */
    public $rules = [
    ];
}
