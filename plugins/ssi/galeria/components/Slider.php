<?php

namespace SSI\Galeria\Components;

use SSI\Galeria\Models\Slider as sliderModel;

class Slider extends \Cms\Classes\ComponentBase
{
    public function componentDetails()
    {
        return [
            'name' => 'SliderSSI',
            'description' => 'Slider SSI'
        ];
    }

    public function defineProperties()
    {
        return [
            'sliderName' => [
                'title' => 'Nazwa Slidera',
                'type' => 'dropdown',
                'description' => 'Wybierz slider',
            ]
        ];
    }

    public function getSliderNameOptions() {
        return sliderModel::lists('name', 'name');
    }

    public function sliderName() {
        return $this->property('sliderName');
    }

    public function images() {
        $sliderName = $this->property('sliderName');
        $images = sliderModel::where('name', $sliderName) -> first();
        return $images['images'];
    }

    public function record() {
        return sliderModel::where('name', $this->property('sliderName')) -> first();
    }

    public function onRun() {
        $this -> addJs('/plugins/ssi/galeria/assets/slick.js');
        $this -> addCss('/plugins/ssi/galeria/assets/slick.css');
        $this -> addCss('/plugins/ssi/galeria/assets/slick-theme.css');
    }
}