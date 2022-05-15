<?php

namespace SSI\Flats\Components;

use SSI\Flats\Models\Flat;
use SSI\Flats\Models\Building;
use SSI\Flats\Models\ExtraSpace;

class FlatsList extends \Cms\Classes\ComponentBase
{
    public function componentDetails()
    {
        return [
            'name' => 'Mieszkania',
            'description' => 'Lista mieszkań'
        ];
    }

    public function onRun() {
        $this->flats = $this->loadFlats();
        $this->buildings = $this->loadBuildings();
        $this->extraSpaces = $this->loadExtraSpaces();
    }

    protected function loadFlats(){
        $query = Flat::all();
        return $query;
    }

    protected function loadBuildings()
    {
        $query = Building::all();
        return $query;
    }

    protected function loadExtraSpaces()
    {
        $query = ExtraSpace::lists('name', 'id');
        return $query;
    }

    public $flats, $buildings, $extraSpaces;
}