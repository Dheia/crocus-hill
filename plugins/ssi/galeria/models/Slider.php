<?php namespace SSI\Galeria\Models;

use Model;

/**
 * Model
 */
class Slider extends Model
{
    use \October\Rain\Database\Traits\Validation;
    
    use \October\Rain\Database\Traits\SoftDelete;

    protected $dates = ['deleted_at'];


    /**
     * @var string The database table used by the model.
     */
    public $table = 'ssi_galeria_slider';

    /**
     * @var array Validation rules
     */
    public $rules = [
        'name' => 'unique:ssi_galeria_slider'
    ];

    public $attachOne = [
        'slide_img' => 'System\Models\File'
    ];

    protected $jsonable = ['slide'];
}
