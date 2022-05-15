<?php namespace SSI\News\Models;

use Model;

/**
 * Model
 */
class News extends Model
{
    use \October\Rain\Database\Traits\Validation;
    
    use \October\Rain\Database\Traits\SoftDelete;

    use \October\Rain\Database\Traits\Sortable;

    protected $dates = ['deleted_at'];


    /**
     * @var string The database table used by the model.
     */
    public $table = 'ssi_news_news';

    public $implement = ['@RainLab.Translate.Behaviors.TranslatableModel'];

    /**
     * @var array Attributes that support translation, if available.
     */
    public $translatable = [
        'title',
        'excerpt',
        'content',
        'meta_title',
        'meta_description',
        ['slug', 'index' => true]
    ];

    /**
     * @var array Validation rules
     */
    public $rules = [
        'title' => 'required',
        'excerpt' => 'required',
        'content' => 'required'
    ];

    public $attachOne = [
        'image' => 'System\Models\File'
    ];

    public $attachMany = [
        'images' => 'System\Models\File',
        'files' => 'System\Models\File'
    ];

    public $belongsToMany = [
        'categories' => [
            'ssi\news\models\Category',
            'table' => 'ssi_news_news_categories',
            'order' => 'name'
        ]
    ];

    public function beforeSave() {
        $this->slug = str_slug($this->title);
        if(!$this->published_at){
            $this->published_at = now();
        }
    }
}
