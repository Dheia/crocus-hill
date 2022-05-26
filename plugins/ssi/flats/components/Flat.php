<?php

namespace SSI\Flats\Components;

use SSI\Flats\Models\Flat as flatModel;
use SSI\Flats\Models\Room;
use SSI\Flats\Models\FlatFloor;
use SSI\Flats\Models\ExtraSpace;

class Flat extends \Cms\Classes\ComponentBase
{
    public function componentDetails()
    {
        return [
            'name' => 'Mieszkanie',
            'description' => 'Widok pojedynczego mieszkania/domu'
        ];
    }

    public function onRun() {
        $this->flat = $this->loadFlat();
        $this->rooms = $this->loadRooms();
        $this->flatFloors = $this->loadFlatFloors();
        $this->extraSpaces = $this->loadExtraSpaces();
        if($this->flat){
            $this->page->title = $this->flat->name;
        }
    }

    protected function loadFlat(){
        $flatID = intval($this->param('id'));
        $query = flatModel::where('id', $flatID)
            ->first();
        return $query;
    }
    protected function loadRooms(){
        $query = Room::lists('name', 'name');
        return $query;
    }
    protected function loadFlatFloors(){
        $query = FlatFloor::lists('name', 'name');
        return $query;
    }

    protected function loadExtraSpaces()
    {
        $query = ExtraSpace::lists('name', 'id');
        return $query;
    }


    public $flat, $rooms, $flatFloors, $extraSpaces;
}