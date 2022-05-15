<?php

namespace SSI\Galeria\Components;

use SSI\Galeria\Models\Galeria as galeriaModel;

class Galeria extends \Cms\Classes\ComponentBase
{
    public function componentDetails()
    {
        return [
            'name' => 'GaleriaSSI',
            'description' => 'Galeria SSI'
        ];
    }

    public function defineProperties()
    {
        return [
            'galleryName' => [
                'title' => 'Nazwa Galerii',
                'type' => 'dropdown',
                'description' => 'Wybierz galerie',
            ],
            'imagesInRow' => [
                'title' => 'Zdjęcia w linii',
                'description' => 'Ilość zdjęć w linii',
                'default' => 3,
                'type' => 'string',
                'validationPattern' => '^[2-4]+$',
                'validationMessage' => 'Wybierz liczbę od 2 do 4'
            ]
        ];
    }

    public function getGalleryNameOptions() {
        return galeriaModel::lists('name', 'name');
    }

    public function images() {
        $galleryName = $this->property('galleryName');
        $images = galeriaModel::where('name', $galleryName) -> first();
        return $images['images'];
    }

    public function onRun() {
        $this -> addCss('/plugins/ssi/galeria/assets/galeria.css');
    }
}