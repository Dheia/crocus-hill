<?php

namespace SSI\Sekcje\Components;

use SSI\Sekcje\Models\Video as VideoM;

class Video extends \Cms\Classes\ComponentBase
{
    public function componentDetails()
    {
        return [
            'name' => 'VideoSSI',
            'description' => 'Video SSI'
        ];
    }

    public function defineProperties()
    {
        return [
            'videoName' => [
                'title' => 'Nazwa Video',
                'type' => 'dropdown',
                'description' => 'Wybierz video',
            ],
            'height' => [
                'title' => 'Wysokość',
                'description' => '% od szerokości ekranu',
                'default' => 35,
                'type' => 'string',
                'validationPattern' => '^[1-9][0-9]?$|^100$',
                'validationMessage' => 'Wybierz liczbę od 0 do 100'
            ],
            'width' => [
                'title' => 'Szerokość',
                'description' => '% od szerokości elementu nadrzędnego',
                'default' => 100,
                'type' => 'string',
                'validationPattern' => '^[1-9][0-9]?$|^100$',
                'validationMessage' => 'Wybierz liczbę od 0 do 100'
            ],
        ];
    }

    public function getVideoNameOptions() {
        return VideoM::lists('title', 'title');
    }

    public function video() {
        $videoName = $this->property('videoName');
        $this->page->w = $this->property('width');
        $this->page->h = $this->property('height');
        $video = VideoM::where('title', $videoName) -> first();
        
        return $video;
    }
}