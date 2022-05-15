<?php

namespace SSI\Sekcje\Components;

use SSI\Sekcje\Models\Ikony as iconsModel;

class Ikony extends \Cms\Classes\ComponentBase
{
    public function componentDetails()
    {
        return [
            'name' => 'IkonySSI',
            'description' => 'Ikony SSI'
        ];
    }

    public function defineProperties()
    {
        return [
            'galleryName' => [
                'title' => 'Nazwa Zestawu Ikon',
                'type' => 'dropdown',
                'description' => 'Wybierz zestaw ikon',
            ],
            'iconsInRow' => [
                'title' => 'Ikon w linii',
                'description' => 'Ilość ikon w linii. Zero oznacza wszystkie ikony w jednej linii(max 8)',
                'default' => 0,
                'type' => 'string',
                'validationPattern' => '^[0-8]+$',
                'validationMessage' => 'Wybierz liczbę od 0 do 8, gdzie 0-wszystkie ikony w jednej linii'
            ]

        ];
    }

    public function getGalleryNameOptions() {
        return iconsModel::lists('name', 'name');
    }


    public function icons() {
        $galleryName = $this->property('galleryName');
        $icons = iconsModel::where('name', $galleryName) -> first();
        
        return $icons;
    }
}