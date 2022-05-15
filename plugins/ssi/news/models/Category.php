<?php namespace SSI\News\Models;

use Model;

/**
 * Model
 */
class Category extends Model
{
    use \October\Rain\Database\Traits\Validation;
    use \October\Rain\Database\Traits\Sortable;

    /*
     * Disable timestamps by default.
     * Remove this line if timestamps are defined in the database table.
     */
    public $timestamps = false;


    /**
     * @var string The database table used by the model.
     */
    public $table = 'ssi_news_categories';

    public $implement = ['@RainLab.Translate.Behaviors.TranslatableModel'];

    /**
     * @var array Attributes that support translation, if available.
     */
    public $translatable = [
        'name',
        ['slug', 'index' => true]
    ];

    /**
     * @var array Validation rules
     */
    public $rules = [
        'name' => 'required'
    ];

    public function beforeSave() {
        $this->slug = str_slug($this->name);
    }
}
