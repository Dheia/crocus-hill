<?php namespace SSI\Galeria;

use System\Classes\PluginBase;

class Plugin extends PluginBase
{
    public function pluginDetails()
    {
        return [
            'name' => 'Galeria SSI',
            'description' => 'Plugin Galerii SSI',
            'icon' => 'icon-file-image-o'
        ];
    }

    public function registerComponents()
    {
        return [
            'SSI\Galeria\Components\Galeria' => 'GaleriaSSI',
            'SSI\Galeria\Components\Slider' => 'SliderSSI'
        ];
    }

    public function registerPageSnippets()
    {
        return [
            'SSI\Galeria\Components\Galeria' => 'GaleriaSSI'
        ];
    }
}
