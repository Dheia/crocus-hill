<?php namespace SSI\Galeria\Models;

use Model;
use \October\Rain\Resize\Resizer;
/**
 * Model
 */
class Galeria extends Model
{
    use \October\Rain\Database\Traits\Validation;
    
    use \October\Rain\Database\Traits\SoftDelete;

    use \October\Rain\Database\Traits\Sortable;

    protected $dates = ['deleted_at'];

    /**
     * @var string The database table used by the model.
     */
    public $table = 'ssi_galeria_galeria';

    /**
     * @var array Validation rules
     */
    public $rules = [
    ];

    public $attachMany = [
        'images' => 'System\Models\File'
    ];

    public function afterSave(){
        $imgPath = $this->image->getLocalPath();
        $width = 800;
        $height = 800;
        $options = []; // or ['mode' => 'crop']

        Resizer::open($imgPath)
            ->resize($width, $height, $options)
            ->save($imgPath);
    }

    public function beforeSave() {
        $this->slug = str_slug($this->name);
    }
}
