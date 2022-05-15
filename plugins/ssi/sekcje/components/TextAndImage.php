<?php

namespace SSI\Sekcje\Components;

use SSI\Sekcje\Models\TextAndImage as TI;

class TextAndImage extends \Cms\Classes\ComponentBase
{
    public function componentDetails()
    {
        return [
            'name' => 'Text And Image',
            'description' => 'Sekcja ze zdjęciem oraz tekstem'
        ];
    }

    public function defineProperties()
    {
        return [
            'sectionName' => [
                'title' => 'Nazwa Sekcji',
                'type' => 'dropdown',
                'description' => 'Wybierz sekcje',
            ]
        ];
    }

    public function getSectionNameOptions() {
        return TI::lists('name', 'name');
    }

    public function section() {
        $sectionName = $this->property('sectionName');
        $section = TI::where('name', $sectionName) -> first();

        return $section;
    }

}