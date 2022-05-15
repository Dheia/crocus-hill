<?php namespace SSI\Flats\Models;

use Model;

/**
 * Model
 */
class BuildingFloor extends Model
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
    public $table = 'ssi_flats_buildingfloors';

    public $belongsTo = [
        'building' => [
            'ssi\flats\models\Building',
            'key' => 'building_id'
        ],
    ];

    public $attachOne = [
        'image' => 'System\Models\File'
    ];

    public function beforeSave() {
        $this->name = 'Piętro: ' . $this->floor . ', budynek: ' . $this->building->name;
    }

    /**
     * @var array Validation rules
     */
    public $rules = [
    ];
}
