<?php namespace SSI\Flats\Models;

use Model;
use SSI\Flats\Models\Room;
/**
 * Model
 */
class Flat extends Model
{
    use \October\Rain\Database\Traits\Validation;
    
    /*
     * Disable timestamps by default.
     * Remove this line if timestamps are defined in the database table.
     */
    public $timestamps = false;

    protected $jsonable = ['parter', 'floor', 'roof', 'rooms'];

    /**
     * @var string The database table used by the model.
     */
    public $table = 'ssi_flats_flats';

    // public $belongsTo = [
    //     'building' => [
    //         'ssi\flats\models\Building',
    //         'key' => 'building_id'
    //     ],
    // ];

    public $attachOne = [
        'pdf' => 'System\Models\File',
        'image' => 'System\Models\File',
        'parter_image' => 'System\Models\File',
        'floor_image' => 'System\Models\File',
        'roof_image' => 'System\Models\File',
        'way' => 'System\Models\File',
    ];

    public $attachMany = [
        'images' => 'System\Models\File',
    ];

    public function beforeSave() {
        $this->slug = str_slug($this->symbol);
    }

    public function getRoomOptions() { 
	
		$slo = Room::orderBy('name')->lists('name','name');
		
		return $slo;	 
		
	}

    /**
     * @var array Validation rules
     */
    public $rules = [
    ];
}
